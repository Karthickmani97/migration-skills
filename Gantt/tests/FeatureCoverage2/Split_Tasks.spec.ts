import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('STET-001', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Year in top tier and Month in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-002', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Year in top tier and Month in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-003', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task's start and end dates update accordingly, segment position adjusts on the timeline.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-004', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the duration
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task's start and end dates update accordingly, segment position adjusts on the timeline.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-005', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the start date
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('5/4/2022');
    await page.waitForTimeout(500);
    //Click update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task and its segments shift right on the timeline, Gantt reflects the new start.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-006', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the end date
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('5/9/2022');
    await page.waitForTimeout(500);
    //Click update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-007', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the predecessor
    await page.locator("(//td[contains(@class,'e-rowcell')])[14]").dblclick();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3FS');
    await page.waitForTimeout(500);
    //Click update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-008', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //select duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(600);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-009', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //select start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('5/4/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-010', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //select end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('5/9/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-011', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-012', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-013', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-014', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-015', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Year in top tier and Week in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-016', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-017', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-018', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-019', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task start date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-020', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task end  date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-021', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-022', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-023', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date 
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-024', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date 
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-025', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-026', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-027', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-028', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is deleted and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-029', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Year in top tier and Day in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-030', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-031', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-032', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-033', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-034', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-035', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(1000);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Year
//     await page.locator("(//li[text()='Year'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Double click the second task 
//     await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
//     await page.waitForTimeout(500);
//     //Navigate to segment
//     await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
//     await page.waitForTimeout(500);
//     //Click add button
//     await page.locator("(//span[text()='Add'])[2]").click();
//     await page.waitForTimeout(500);
//     //Click save
//     await page.locator("(//button[text()='Save'])[1]").click();
//     await page.waitForTimeout(1200);
//     //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-036', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('STET-037', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-038', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-039', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-040', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-041', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-042', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is deleted and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-043', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Month in top tier and Week in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-044', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-045', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task's start and end dates update accordingly, segment position adjusts on the timeline.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-046', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-047', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-048', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('STET-049', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-050', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-051', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-052', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-053', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-054', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(1000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-055', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-056', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is deleted and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-057', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Month in top tier and Day in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-058', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-059', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task's start and end dates update accordingly, segment position adjusts on the timeline.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-060', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-061', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-062', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-063', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-064', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-065', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-066', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-067', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-068', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-069', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-070', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is deleted and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-071', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Month in top tier and Day in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-072', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-073', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task's start and end dates update accordingly, segment position adjusts on the timeline.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-074', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-075', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-076', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-077', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-078', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-079', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-080', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-081', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-082', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(200);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-083', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-084', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is deleted and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-085', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Month in top tier and Day in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-086', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-087', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task's start and end dates update accordingly, segment position adjusts on the timeline.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-088', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-089', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-090', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-091', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-092', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-093', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-094', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-095', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-096', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-097', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-098', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is deleted and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-099', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Month in top tier and Day in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-100', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-101', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task's start and end dates update accordingly, segment position adjusts on the timeline.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-102', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-103', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-104', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-105', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-106', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-107', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-108', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-109', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-110', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-111', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-112', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is deleted and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-113', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Month in top tier and Day in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-114', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-115', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task's start and end dates update accordingly, segment position adjusts on the timeline.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-116', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-117', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-118', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-119', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-120', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-121', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-122', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-123', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-124', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-125', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-126', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is deleted and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-127', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Month in top tier and Day in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-128', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select HoMinute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-129', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task's start and end dates update accordingly, segment position adjusts on the timeline.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-130', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-131', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-132', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-133', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-134', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-135', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-136', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-137', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-138', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-139', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-140', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is deleted and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-141', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads correctly with timeline showing Month in top tier and Day in bottom tier. Split tasks are visible.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-142', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select HoMinute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-143', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task's start and end dates update accordingly, segment position adjusts on the timeline.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-144', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-145', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-146', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration extends, segments adjust accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-147', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task shows connector to predecessor, respecting dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-148', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task updates duration and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-149', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task updates start date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-150', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates end date and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-151', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task updates predecessor and is reflected on the chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-152', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-153', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-154', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is deleted and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ENABLE RTL 
test('STET-155', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads in RTL mode with the selected timeline without errors.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-156', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task duration updates correctly in RTL mode.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-157', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Drag and Drop
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task start and end dates update accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-158', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Drag and Drop
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task end date updates without issue.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-159', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the duration
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-160', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the start date
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('5/4/2022');
    await page.waitForTimeout(500);
    //Click update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-161', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the end date
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('5/9/2022');
    await page.waitForTimeout(500);
    //Click update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date updates and taskbar reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-162', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the predecessor
    await page.locator("(//td[contains(@class,'e-rowcell')])[14]").dblclick();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3FS');
    await page.waitForTimeout(500);
    //Click update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency updates and renders correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-163', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //select duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-164', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //select start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('5/4/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-TStart date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-165', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //select end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Clear
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('5/9/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-166', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency line updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-167', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-New segment appears on taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-168', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-169', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-170', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads in RTL mode with the selected timeline without errors.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-171', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Year
//     await page.locator("(//li[text()='Year'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Week
//     await page.locator("(//li[text()='Week'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-172', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Year
//     await page.locator("(//li[text()='Year'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Week
//     await page.locator("(//li[text()='Week'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Segment duration should update, Gantt should reflect new timeline correctly.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-173', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Drag and Drop
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task start and end dates update accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-174', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-175', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task start date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-176', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task end  date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date updates and taskbar reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-177', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency updates and renders correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-178', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-179', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date 
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-180', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date 
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-181', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency line updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-182', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-New segment appears on taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-183', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-184', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is removed visually and in data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-185', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads in RTL mode with the selected timeline without errors.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-186', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Resize
    await page.mouse.click(798, 232);
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task updates with new duration, segments stretch as needed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-187', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Year
//     await page.locator("(//li[text()='Year'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task updates with new duration, segments stretch as needed.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-188', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //drag and drop
    await page.mouse.click(798, 232);
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task end date updates without issue.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-189', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-190', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-191', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date updates and taskbar reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('STET-192', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency updates and renders correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-193', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-194', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-195', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-196', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency line updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-197', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-New segment appears on taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-198', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-199', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is removed visually and in data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-200', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads in RTL mode with the selected timeline without errors.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-201', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Month
//     await page.locator("(//li[text()='Month'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Week
//     await page.locator("(//li[text()='Week'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task updates with new duration, segments stretch as needed.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-202', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Month
//     await page.locator("(//li[text()='Month'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Week
//     await page.locator("(//li[text()='Week'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task updates with new duration, segments stretch as needed.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-203', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //drag and drop
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task end date updates without issue.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-204', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-205', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-206', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date updates and taskbar reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-207', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency updates and renders correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-208', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-209', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-210', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-211', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency line updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-212', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-New segment appears on taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-213', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-214', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is removed visually and in data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-215', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads in RTL mode with the selected timeline without errors.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-216', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Month
//     await page.locator("(//li[text()='Month'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task updates with new duration, segments stretch as needed.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-217', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Month
//     await page.locator("(//li[text()='Month'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task start and end dates update accordingly.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-218', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //drag and drop
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task end date updates without issue.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-219', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-220', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-221', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date updates and taskbar reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-222', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency updates and renders correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-223', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-224', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-225', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-226', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency line updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-227', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-New segment appears on taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-228', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-229', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is removed visually and in data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-230', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads in RTL mode with the selected timeline without errors.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-231', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Week
//     await page.locator("(//li[text()='Week'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-232', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Week
//     await page.locator("(//li[text()='Week'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task start and end dates update accordingly.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-233', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //drag and drop
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task end date updates without issue.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-234', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-235', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-236', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date updates and taskbar reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-237', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency updates and renders correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-238', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-239', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-240', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-241', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency line updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-242', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-New segment appears on taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-243', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-244', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is removed visually and in data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-245', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads in RTL mode with the selected timeline without errors.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-246', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Month
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Hour'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task updates with new duration, segments stretch as needed.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-247', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Month
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Hour'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task start and end dates update accordingly.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-248', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(1000);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Month
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Hour'])[1]").click();
//     await page.waitForTimeout(1000);
//     //drag and drop
//     await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task end date updates without issue.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-249', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-250', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-251', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date updates and taskbar reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-252', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency updates and renders correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-253', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-254', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Start date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-255', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-256', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(1000);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Dependency line updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-257', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(1000);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-New segment appears on taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-258', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-259', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is removed visually and in data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-260', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt loads in RTL mode with the selected timeline without errors.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-261', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Hour
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Minute'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task updates with new duration, segments stretch as needed.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-262', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-timeline');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select Hour
//     await page.locator("(//li[text()='Day'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the Bottom tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //Select Day
//     await page.locator("(//li[text()='Minute'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(1180, 232);
//     await page.mouse.move(1142, 231);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task start and end dates update accordingly.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-263', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //drag and drop
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task end date updates without issue.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-264', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-265', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-266', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date updates and taskbar reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-267', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dependency updates and renders correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-268', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-269', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Start date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-270', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-271', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(1000);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Dependency line updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-272', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(1000);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-New segment appears on taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-273', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-274', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is removed visually and in data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-275', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The Gantt chart and segment data bind correctly with int task and segment IDs
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-276', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select int
//     await page.locator("(//li[text()='int'])[1]").click();
//     await page.waitForTimeout(500);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Gantt updates the duration of Task ID 2 and reflects the change visually
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-277', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select int
//     await page.locator("(//li[text()='int'])[1]").click();
//     await page.waitForTimeout(500);
//     //drag
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Gantt updates the duration of Task ID 2 and reflects the change visually
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-278', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select int
//     await page.locator("(//li[text()='int'])[1]").click();
//     await page.waitForTimeout(500);
//     //drag
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Gantt updates the duration of Task ID 2 and reflects the change visually
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-279', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Duration updates correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-280', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-281', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date updates and taskbar reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-282', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Dependency updates and renders correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-283', async ({ page }) => {
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-284', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Start date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-285', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-286', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(1000);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Dependency line updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-287', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(1000);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-New segment appears on taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-288', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-289', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Segment is removed visually and in data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-290', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click split task
    await page.locator("(//li[text()='Split Task'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task splits into multiple segments correctly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-292', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart and segment data bind correctly with object task and segment IDs
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-293', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select object
//     await page.locator("(//li[text()='object'])[1]").click();
//     await page.waitForTimeout(500);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Gantt updates the duration of Task ID 2 and reflects the change visually
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-294', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select object
//     await page.locator("(//li[text()='object'])[1]").click();
//     await page.waitForTimeout(500);
//     //drag
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Gantt updates the duration of Task ID 2 and reflects the change visually
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-295', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select object
//     await page.locator("(//li[text()='object'])[1]").click();
//     await page.waitForTimeout(500);
//     //drag
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Gantt updates the duration of Task ID 2 and reflects the change visually
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//ISSUE-https://es-testingportal.bolddesk.com/agent/tickets/64971
test('STET-296', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration updates and changes appear in Gantt
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE-https://es-testingportal.bolddesk.com/agent/tickets/64971
test('STET-297', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-298', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt chart updates Task ID 2 to reflect new end date
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-299', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Predecessor update reflects in Gantt dependency lines
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-300', async ({ page }) => {
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-301', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Start date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE-TICKET CREATED https://es-testingportal.bolddesk.com/agent/tickets/64971
test('STET-302', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE
test('STET-303', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(1000);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Predecessor is saved and visible in the Gantt dependency
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE CONSOLE ERROR THROWN SIMILAR TICKET CREATED -https://es-testingportal.bolddesk.com/agent/tickets/64971
test('STET-304', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-New segment appears on taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE
test('STET-305', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE 
test('STET-306', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Segment is removed visually and in data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE -Ticket created https://es-testingportal.bolddesk.com/agent/tickets/64971
test('STET-307', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click split task
    await page.locator("(//li[text()='Split Task'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE -Ticket created https://es-testingportal.bolddesk.com/agent/tickets/64971
test('STET-308', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click merge task
    await page.locator("(//li[text()='Merge Task'])[1]").click();
    await page.waitForTimeout(500);
    //Left
    await page.locator("(//li[text()='Left'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-All segments of Task ID 2 merge into one correctly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE 
test('STET-309', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The Gantt chart and segment data bind correctly with string task and segment IDs
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-310', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select string
//     await page.locator("(//li[text()='string'])[1]").click();
//     await page.waitForTimeout(500);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Gantt updates the duration of Task ID 2 and reflects the change visually
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-311', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select string
//     await page.locator("(//li[text()='string'])[1]").click();
//     await page.waitForTimeout(500);
//     //drag
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Gantt updates the duration of Task ID 2 and reflects the change visually
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-312', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select string
//     await page.locator("(//li[text()='string'])[1]").click();
//     await page.waitForTimeout(500);
//     //drag
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Gantt updates the duration of Task ID 2 and reflects the change visually
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-313', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration updates and changes appear in Gantt
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-314', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates and timeline reflects change.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-315', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Gantt chart updates Task ID 2 to reflect new end date
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-316', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Predecessor update reflects in Gantt dependency lines
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-317', async ({ page }) => {
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//span[text()="Identify site location"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Duration updates in both data and taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-318', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Start date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-319', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-End date reflects in taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-320', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(1000);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Predecessor is saved and visible in the Gantt dependency
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-321', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select string
//     await page.locator("(//li[text()='string'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Double click the second task 
//     await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
//     await page.waitForTimeout(500);
//     //Navigate to segment
//     await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
//     await page.waitForTimeout(500);
//     //Click add button
//     await page.locator("(//span[text()='Add'])[2]").click();
//     await page.waitForTimeout(1000);
//     //Click save
//     await page.locator("(//button[text()='Save'])[1]").click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-New segment appears on taskbar.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-322', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment duration or position updates.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-323', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is removed visually and in data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-324', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click split task
    await page.locator("(//li[text()='Split Task'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-325', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click merge task
    await page.locator("(//li[text()='Merge Task'])[1]").click();
    await page.waitForTimeout(500);
    //Left
    await page.locator("(//li[text()='Left'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-All segments of Task ID 2 merge into one correctly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-326', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(1000);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(800);
//     //Select int
//     await page.locator("(//li[text()='int'])[1]").click();
//     await page.waitForTimeout(600);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(600);
//     //Select AddRecordAsync
//     await page.locator("(//li[text()='AddRecordAsync'])[1]").click();
//     await page.waitForTimeout(1200);
//     // Validation: ensure a new row is added and it contains the expected task name
//     const rowsBefore = 0; // placeholder to keep structure consistent when running isolated
//     const rowsAfter = await page.locator('.e-gantt .e-gridcontent .e-row').count();
//     // Expect at least one row and that one row contains the new task name
//     await expect(rowsAfter).toBeGreaterThan(0);
//     const newTask = page.locator('.e-gantt .e-gridcontent .e-row', { hasText: 'New Task 16' });
//     await expect(newTask).toHaveCount(1);
// });

test('STET-327', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select AddRecordAsync
    await page.locator("(//li[text()='AddRecordAsync'])[1]").click();
    await page.waitForTimeout(1000);
    // Validation: ensure a new row is added and it contains the expected task name
    const rowsBefore = 0; // placeholder to keep structure consistent when running isolated
    const rowsAfter = await page.locator('.e-gantt .e-gridcontent .e-row').count();
    // Expect at least one row and that one row contains the new task name
    await expect(rowsAfter).toBeGreaterThan(0);
    const newTask = page.locator('.e-gantt .e-gridcontent .e-row', { hasText: 'New Task 16' });
    await expect(newTask).toHaveCount(1);
});

test('STET-328', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select AddRecordAsync
    await page.locator("(//li[text()='AddRecordAsync'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-A task with ID 16 and name “New Task 16” should be added to the Gantt chart using int type model
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('STET-329', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(800);
    //Select record
    await page.locator("(//span[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(800);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(800);
    //Select UpdateRecordbyIdAsync
    await page.locator("(//li[text()='UpdateRecordbyIdAsync'])[1]").click();
    await page.waitForTimeout(1200);
    // Validation: ensure the Gantt has rows and the selected task exists after update
    const rowsAfter = await page.locator('.e-gantt .e-gridcontent .e-row').count();
    await expect(rowsAfter).toBeGreaterThan(0);
    const taskRow = page.locator('.e-gantt .e-gridcontent .e-row', { hasText: 'Site analyze' });
    await expect(taskRow).toHaveCount(1);
});

test('STET-330', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Select record
    await page.locator("(//span[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select UpdateRecordbyIdAsync
    await page.locator("(//li[text()='UpdateRecordbyIdAsync'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The selected task should be updated with a new StartDate (+1 day) and duration of 5 using string type model
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-331', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(500);
    //Select record
    await page.locator("(//span[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select UpdateRecordbyIdAsync
    await page.locator("(//li[text()='UpdateRecordbyIdAsync'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The selected task should be updated with a new StartDate (+1 day) and duration of 5 using object type modell
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-332', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(1000);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(800);
//     //Select int
//     await page.locator("(//li[text()='int'])[1]").click();
//     await page.waitForTimeout(800);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(800);
//     //Select UpdatePredecessor
//     await page.locator("(//li[text()='UpdatePredecessor'])[1]").click();
//     await page.waitForTimeout(1200);
//     // Validation: ensure Gantt has rows and the predecessor text '3FS' appears in the grid
//     const rowsAfter = await page.locator('.e-gantt .e-gridcontent .e-row').count();
//     await expect(rowsAfter).toBeGreaterThan(0);
//     const predecessorCell = page.locator('.e-gantt .e-gridcontent').locator('text=3FS');
//     await expect(predecessorCell).toHaveCount(1);
// });

test('STET-333', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select UpdatePredecessor
    await page.locator("(//li[text()='UpdatePredecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task “4” should be updated with predecessor “3FS” in the Gantt chart
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-334', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(1000);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select int
//     await page.locator("(//li[text()='int'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select AddPredecessor
//     await page.locator("(//li[text()='AddPredecessor'])[1]").click();
//     await page.waitForTimeout(1200);
//     // Validation: ensure Gantt has rows and the predecessor text '3FS' appears in the grid
//     const rowsAfter = await page.locator('.e-gantt .e-gridcontent .e-row').count();
//     await expect(rowsAfter).toBeGreaterThan(0);
//     const predecessorCell = page.locator('.e-gantt .e-gridcontent').locator('text=3FS');
//     await expect(predecessorCell).toHaveCount(1);
// });

test('STET-335', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select AddPredecessor
    await page.locator("(//li[text()='AddPredecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task “5” should have “3FS” predecessor added in the Gantt chart
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-336', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select RemovePredecessor
    await page.locator("(//li[text()='RemovePredecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Predecessor should be removed from task 4 in the Gantt chart
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-337', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select RemovePredecessor
    await page.locator("(//li[text()='RemovePredecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Predecessor should be removed from task 4 in the Gantt chart
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-338', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Gantt chart successfully binds and displays tasks using GUIDs as IDs
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('STET-339', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select guid
//     await page.locator("(//li[text()='guid'])[1]").click();
//     await page.waitForTimeout(500);
//     //Resize
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task duration updates and Gantt reflects visual change
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-340', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select guid
//     await page.locator("(//li[text()='guid'])[1]").click();
//     await page.waitForTimeout(500);
//     //drag
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task start date changes and displays correctly
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('STET-341', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/split-task-method');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
//     await page.waitForTimeout(500);
//     //Click the Top tier drop down
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //Select guid
//     await page.locator("(//li[text()='guid'])[1]").click();
//     await page.waitForTimeout(500);
//     //drag
//     await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
//     await page.waitForTimeout(1000);
//     await page.mouse.down();
//     await page.mouse.move(649, 198);
//     await page.mouse.move(673, 199);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task end date changes and displays correctly
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('STET-342', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(1000);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration updates in Gantt and persists after save/refresh
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-343', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Start date updates in Gantt and persists after save/refresh
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-344', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second  
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(1000);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click Update
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-End date updates in Gantt and persists after save/refresh
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-345', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Predecessor update reflects in Gantt dependency lines
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-346', async ({ page }) => {
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);

    //Screenshot validation-Task duration updates and persists after save/refresh
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-347', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task start date updates and persists after save/refresh
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-348', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task end date updates and persists after save/refresh
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-349', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(1000);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Predecessor is saved as GUID, dependency arrow updated in Gantt
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-350', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-New segment with its own GUID is saved and visible on the Gantt timeline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-351', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").dblclick();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[9]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment updates and displays correctly in Gantt
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-352', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Segment is removed from Gantt view and data
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-353', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click split task
    await page.locator("(//li[text()='Split Task'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task splits into two segments with unique GUIDs
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-354', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click merge task
    await page.locator("(//li[text()='Merge Task'])[1]").click();
    await page.waitForTimeout(500);
    //Left
    await page.locator("(//li[text()='Left'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Select 'guid' datatype from dropdown; Right-click the first segment of a split GUID task; Select Merge option
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-355', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //select record
    await page.locator("(//span[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select UpdateRecordbyIdAsync
    await page.locator("(//li[text()='UpdateRecordbyIdAsync'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task with GUID appears in Gantt grid and chart
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-356', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //select record
    await page.locator("(//span[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select AddRecordAsync
    await page.locator("(//li[text()='AddRecordAsync'])[1]").click();
    await page.waitForTimeout(1000);
    // Validation: ensure a new row is added and it contains the expected task name
    const rowsBefore = 0; // placeholder to keep structure consistent when running isolated
    const rowsAfter = await page.locator('.e-gantt .e-gridcontent .e-row').count();
    // Expect at least one row and that one row contains the new task name
    await expect(rowsAfter).toBeGreaterThan(0);
    const newTask = page.locator('.e-gantt .e-gridcontent .e-row', { hasText: 'New Task 16' });
    await expect(newTask).toHaveCount(1);
});

test('STET-357', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Dependency updates, predecessor is saved as GUID and lines render correctly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-358', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Predecessor update reflects in Gantt dependency lines
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-359', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //click the record 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the record to delete
    await page.locator("(//td[contains(@class,'e-rowcell e-lastrowcell  e-leftalign')])[4]").click();
    await page.waitForTimeout(1000);
    //Click add button
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Dependency line disappears, Predecessor property is empty for that task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-360', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select int
    await page.locator("(//li[text()='int'])[1]").click();
    await page.waitForTimeout(500);
    //select record
    await page.locator("(//span[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select DeleteRecordAsync
    await page.locator("(//li[text()='DeleteRecordAsync'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The selected task is deleted from the grid and chart for int data type, and the deletion is reflected in the UI
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-361', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //select record
    await page.locator("(//span[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select DeleteRecordAsync
    await page.locator("(//li[text()='DeleteRecordAsync'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The selected task is deleted from the grid and chart for string data type, and the deletion is reflected in the UI
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-362', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    //select record
    await page.locator("(//span[text()='Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select DeleteRecordAsync
    await page.locator("(//li[text()='DeleteRecordAsync'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The selected task is deleted from the grid and chart for string data type, and the deletion is reflected in the UI
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-363', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The Gantt chart loads correctly with tasks of ExpandoObject type and displays all task information
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-364', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The edited task is updated as expected, and changes reflect in both the grid and chart for ExpandoObject type
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-365', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The Gantt chart loads correctly with tasks of ExpandoObject type and displays all task information
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-366', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The edited task is updated as expected, and changes reflect in both the grid and chart for ExpandoObject type
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-367', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The Gantt chart loads correctly with tasks of ExpandoObject type and displays all task information
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-368', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The edited task is updated as expected, and changes reflect in both the grid and chart for ExpandoObject type
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-369', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The edited task is updated as expected, and changes reflect in both the grid and chart for ExpandoObject type
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-370', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-End Date of Task ID 2 should update correctly in the Gantt chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-371', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(1000);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration of Task ID 2 should update correctly in the Gantt chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-372', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='9-Child Task 7'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Predecessor update reflects in Gantt dependency lines
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-373', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The edited task is updated as expected, and changes reflect in both the grid and chart for ExpandoObject type
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-374', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-End Date of Task ID 2 should update correctly in the Gantt chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-375', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration 
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration of Task ID 2 should update correctly in the Gantt chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-376', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='6-Parent Task 2'])[1]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Predecessor for Task ID 2 should be updated correctly with a valid dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-377', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The edited task is updated as expected, and changes reflect in both the grid and chart for ExpandoObject type
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-378', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(800);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Screenshot validation-The edited task is updated as expected, and changes reflect in both the grid and chart for ExpandoObject type
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-379', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(1000);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration of Task ID 2 should update correctly in the Gantt chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-380', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='9-Child Task 7'])[1]").click();
    await page.waitForTimeout(500);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Predecessor update reflects in Gantt dependency lines
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-381', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Start Date for Task ID 2 should be updated accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-382', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-End Date for Task ID 2 should reflect the updated value in the Gantt chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-383', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration for Task ID 2 should be updated correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-384', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='9-Child Task 7'])[1]").click();
    await page.waitForTimeout(500);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Predecessor for Task ID 2 should reflect the new dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-385', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Start Date for Task ID 2 should be updated accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-386', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-End Date for Task ID 2 should reflect the updated value in the Gantt chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-387', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Duration for Task ID 2 should be updated correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-388', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select 
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Predecessor for Task ID 2 should reflect the new dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-389', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('3/30/2022');
    await page.waitForTimeout(800);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Start Date for Task ID 2 should be updated accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-390', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('4/12/2022');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-End Date for Task ID 2 should reflect the updated value in the Gantt chart.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-391', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Duration for Task ID 2 should be updated correctly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-392', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Select 
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //select predecessor
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select dependency
    await page.locator("(//li[text()='3-Site analyze'])[1]").click();
    await page.waitForTimeout(500);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Screenshot validation-Predecessor for Task ID 2 should reflect the new dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-393', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(1000);
    //Resize
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Updated count increments by the number of segments moved or resized
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-394', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-method');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
    await page.waitForTimeout(1000);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click split task
    await page.locator("(//li[text()='Split Task'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task splits into two segments with unique GUIDs
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-395', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(1000);
    //Resize
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(1180, 232);
    await page.mouse.move(1142, 231);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Updated count increments by the number of segments moved or resized
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-396', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Enable Segment Cancel 
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //Select Add
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);;
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//span[text()="New Task 16"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-397', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Enable Segment Cancel 
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //Select Add
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);;
    //Click add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//span[text()="New Task 16"])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-Segment is addd and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('STET-398', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/split-task-timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-timeline' });
    await page.waitForTimeout(500);
    //Enable Segment Cancel 
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //Double click the second task 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to segment
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Double click the records
    await page.locator("(//td[contains(@class,'e-rowcell')])[108]").click();
    await page.waitForTimeout(200);
    //Click the delete button 
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Segment is updated and Gantt chart updates accordingly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
