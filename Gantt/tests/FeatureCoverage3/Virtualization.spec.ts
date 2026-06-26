import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('VIET-001', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-002', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-003', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-004', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-005', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-006', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-007', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-008', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-009', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-010', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-011', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    //Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-012', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(2000);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-013', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(800);
    // Drag a taskbar to change its end date in the Gantt chart
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    const box = await rightResizer.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-014', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-015', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-016', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-017', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Edit 'predecessor' cell for a task in the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('2SS');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-018', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-019', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-020', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-021', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').click();
    await page.waitForTimeout(500);
    //Open task dialog edit 'predecessor' save changes
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-022', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    //Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-023', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(2000);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-024', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    // Drag a taskbar to change its end date in the Gantt chart
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    const box = await rightResizer.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-025', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-026', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-027', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-028', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Edit 'predecessor' cell for a task in the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('2SS');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-029', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-030', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-031', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-032', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').click();
    await page.waitForTimeout(500);
    //Open task dialog edit 'predecessor' save changes
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').dblclick();
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-033', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-034', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(2000);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-035', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(800);
    // Drag a taskbar to change its end date in the Gantt chart
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    const box = await rightResizer.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-036', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-037', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-038', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-039', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Edit 'predecessor' cell for a task in the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('2SS');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-040', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-041', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-042', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-043', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').click();
    await page.waitForTimeout(500);
    //Open task dialog edit 'predecessor' save changes
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').dblclick();
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-044', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-045', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(2000);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-046', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(800);
    // Drag a taskbar to change its end date in the Gantt chart
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    const box = await rightResizer.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-047', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-048', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-049', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(600);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(600);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(600);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(600);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-050', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Edit 'predecessor' cell for a task in the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('2SS');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-051', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-052', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-053', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-054', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').click();
    await page.waitForTimeout(500);
    //Open task dialog edit 'predecessor' save changes
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').dblclick();
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-055', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-056', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(2000);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-057', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(800);
    // Drag a taskbar to change its end date in the Gantt chart
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    const box = await rightResizer.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-058', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-059', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-060', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-061', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    //Edit 'predecessor' cell for a task in the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('2SS');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-062', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-063', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-064', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Week'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-065', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Year'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Month'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').click();
    await page.waitForTimeout(500);
    //Open task dialog edit 'predecessor' save changes
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').dblclick();
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-066', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-067', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(2000);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-068', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(800);
    // Drag a taskbar to change its end date in the Gantt chart
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    const box = await rightResizer.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-069', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-070', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-071', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-072', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //Edit 'predecessor' cell for a task in the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('2SS');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-073', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-074', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-075', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-076', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').click();
    await page.waitForTimeout(500);
    //Open task dialog edit 'predecessor' save changes
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').dblclick();
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-077', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    //Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-078', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(2000);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-079', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(800);
    // Drag a taskbar to change its end date in the Gantt chart
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    const box = await rightResizer.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-080', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-081', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-082', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-083', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'predecessor' cell for a task in the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('2SS');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-084', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-085', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-086', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-087', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').click();
    await page.waitForTimeout(500);
    //Open task dialog edit 'predecessor' save changes
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').dblclick();
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-088', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-089', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(2000);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-090', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(800);
    // Drag a taskbar to change its end date in the Gantt chart
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    const box = await rightResizer.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-091', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-092', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-093', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-094', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //Edit 'predecessor' cell for a task in the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('2SS');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-095', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-096', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-097', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-098', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Day'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').click();
    await page.waitForTimeout(500);
    //Open task dialog edit 'predecessor' save changes
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').dblclick();
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-099', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Resize a taskbar in the Gantt chart and assert size changed
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const beforeBox = await taskbar.boundingBox();
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    await rightResizer.click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    const afterBox = await taskbar.boundingBox();
    if (beforeBox && afterBox) {
        expect(afterBox.width).toBeGreaterThan(beforeBox.width);
        }
});


test('VIET-100', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(2000);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-101', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(800);
    // Drag a taskbar to change its end date in the Gantt chart
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    const box = await rightResizer.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-102', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Month'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-103', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-104', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-105', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'predecessor' cell for a task in the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('2SS');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-106', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-107', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-108', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-109', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Top Tier Unit to 'Week'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').click();
    await page.waitForTimeout(500);
    //Open task dialog edit 'predecessor' save changes
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').dblclick();
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-110', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-111', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(2000);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-112', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(800);
    // Drag a taskbar to change its end date in the Gantt chart
    const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
    const box = await rightResizer.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-113', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-114', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(600);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-115', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-116', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Edit 'predecessor' cell for a task in the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('2SS');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-117', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-118', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-119', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-120', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Top Tier Unit to 'Day'
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(500);
    // Bottom Tier Unit to 'Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[63]').click();
    await page.waitForTimeout(500);
    //Open task dialog edit 'predecessor' save changes
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').dblclick();
    await page.locator('(//td[contains(@class,"e-lastrowcell")])[3]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-132', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.waitForTimeout(500);
    // Wait for the Gantt chart container
    const ganttArea = page.locator('.e-gantt .e-content').first();
    await ganttArea.waitFor();
    await page.waitForTimeout(500);
    // Scroll to the middle horizontally
    await ganttArea.evaluate((el) => {
        el.scrollLeft = el.scrollWidth / 2;
    });
    await page.waitForTimeout(500);
    await page.mouse.wheel(100, 0);
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-133', async ({ page }) => {
    // Open the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.waitForTimeout(500);
    // Locate the Gantt chart content area
    const ganttArea = page.locator('.e-chart-scroll-container');
    await page.waitForTimeout(500);
    // Scroll from top to bottom
    await ganttArea.evaluate((el) => {
        el.scrollTop = el.scrollHeight;
    });
    await page.waitForTimeout(2000);
    await page.getByRole('gridcell', { name: 'Task 1000' }).click();
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-141', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('VIET-142', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.waitForTimeout(500);
//     //set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-143', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.waitForTimeout(500);
//     //set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-144', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     //Edit 'duration' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___Duration').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('10 days');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-145', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     //Edit 'Start date' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___StartDate').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('1/07/2001');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-146', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     //Edit 'end date' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___EndDate').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('1/07/2001');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-147', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     // Open task dialog edit 'duration' save changes.
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#Duration').fill('7 days');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-148', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     // Dialog Editing Start Date
//     await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#StartDate').fill('1/1/2001');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-149', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     // Dialog Editing End Date
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#EndDate').fill('1/5/2001');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-150', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     //Resize a taskbar in the Gantt chart
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(820, 302);
//     await page.mouse.move(1175, 313);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-151', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(800);
//     // Drag a taskbar to change its start date in the Gantt chart
//     const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
//     const box = await taskbar.boundingBox();
//     if (box) {
//         await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
//         await page.mouse.down();
//         await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
//         await page.mouse.up();
//     }
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-152', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(800);
//     // Drag a taskbar to change its end date in the Gantt chart
//     const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
//     const box = await rightResizer.boundingBox();
//     if (box) {
//         await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
//         await page.mouse.down();
//         await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
//         await page.mouse.up();
//     }
//     await page.waitForTimeout(2000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-153', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(300);
//     //Edit 'duration' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___Duration').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('10 days');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-154', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(300);
//     //Edit 'Start date' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___StartDate').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('1/07/2001');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-155', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(300);
//     //Edit 'end date' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___EndDate').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('1/07/2001');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-156', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(300);
//     // Open task dialog edit 'duration' save changes.
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#Duration').fill('7 days');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-157', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(300);
//     // Dialog Editing Start Date
//     await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#StartDate').fill('1/1/2001');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-158', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(300);
//     // Dialog Editing End Date
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#EndDate').fill('1/5/2001');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-159', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(300);
//     //Resize a taskbar in the Gantt chart
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(820, 302);
//     await page.mouse.move(1175, 313);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-160', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(300);
//     // Drag a taskbar to change its start date in the Gantt chart
//     const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
//     const box = await taskbar.boundingBox();
//     if (box) {
//         await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
//         await page.mouse.down();
//         await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right
//         await page.mouse.up();
//     }
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-161', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(300);
//     // Drag a taskbar to change its end date in the Gantt chart
//     const rightResizer = page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]');
//     const box = await rightResizer.boundingBox();
//     if (box) {
//         await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
//         await page.mouse.down();
//         await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2); // drag right to extend end date
//         await page.mouse.up();
//     }
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('VIET-162', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //Select 'AddRecordAsync
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'AddRecordAsync' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-163', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    //Select 'UpdateRecordbyIdAsync'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.getByRole('option', { name: 'UpdateRecordbyIdAsync' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-164', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.waitForTimeout(500);
    await page.setViewportSize({ width: 1920, height: 1080 });
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    //Select  Select 'DeleteRecordAsync'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'DeleteRecordAsync' }).click();
    await page.waitForTimeout(500);
    page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-165', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Select 'UpdatePredecessor'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-166', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Select 'AddPredecessor'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.getByRole('option', { name: 'AddPredecessor' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-167', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Select 'RemovePredecessor'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.getByRole('option', { name: 'RemovePredecessor' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('VIET-168', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //Select 'AddRecordAsync
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'AddRecordAsync' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-169', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
//     //Select 'UpdateRecordbyIdAsync'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'UpdateRecordbyIdAsync' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-170', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.waitForTimeout(500);
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
//     //Select  Select 'DeleteRecordAsync'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'DeleteRecordAsync' }).click();
//     await page.waitForTimeout(500);
//     page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-171', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'UpdatePredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-172', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'AddPredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'AddPredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-173', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'RemovePredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'RemovePredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-174', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //Select 'AddRecordAsync
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'AddRecordAsync' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-175', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
//     //Select 'UpdateRecordbyIdAsync'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'UpdateRecordbyIdAsync' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-176', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.waitForTimeout(500);
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //select task
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
//     //Select  Select 'DeleteRecordAsync'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'DeleteRecordAsync' }).click();
//     await page.waitForTimeout(500);
//     page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-177', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'UpdatePredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-178', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'AddPredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'AddPredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-179', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'RemovePredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'RemovePredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('VIET-180', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // enable row drag-and-drop in the Gantt chart
    await page.locator('.e-switch-handle').first().click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-181', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // enable row drag-and-drop in the Gantt chart
    await page.locator('.e-switch-handle').first().click();
    await page.waitForTimeout(500);
    // Disable row drag-and-drop in the Gantt chart
    await page.locator('.e-switch-handle').first().click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-182', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // enable row drag-and-drop in the Gantt chart
    await page.locator('.e-switch-handle').first().click();
    await page.waitForTimeout(500);
    //Drag a row to a new position
    const src = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[2]');
    const dst = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[5]');
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

// test('VIET-183', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // enable row drag-and-drop in the Gantt chart
//     await page.locator('.e-switch-handle').first().click();
//     await page.waitForTimeout(500);
//     //Drag a row to a new position
//     const src = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[2]');
//     const dst = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[5]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


test('VIET-184', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Template columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Template columns' }).click();
    await page.waitForTimeout(500);
    // enable row drag-and-drop in the Gantt chart
    await page.locator('.e-switch-handle').first().click();
    await page.waitForTimeout(500);
    //Drag a row to a new position
    const src = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[2]');
    const dst = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[5]');
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


test('VIET-185', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    // Set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(800);
    // Enable row drag-and-drop
    const toggle = page.locator('.e-switch-handle').first();
    await toggle.click();
    await page.waitForTimeout(500);
    // Verify drag handles are visible
    const dragHandles = page.locator('//div[contains(@class,"e-dtdiagonalright")]');
    await expect(dragHandles.first()).toBeVisible();
    // Perform drag-and-drop when enabled
    const src = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[2]');
    const dst = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[5]');
    await src.dragTo(dst);
    // Disable row drag-and-drop
    await toggle.click();
    await page.waitForTimeout(500);
    // Verify drag handles are hidden
    await expect(dragHandles.first()).toBeHidden();
    await expect(dragHandles).toHaveCount(0);
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


// test('VIET-186', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // enable row drag-and-drop in the Gantt chart
//     await page.locator('.e-switch-handle').first().click();
//     await page.waitForTimeout(500);
//     // Disable row drag-and-drop in the Gantt chart
//     await page.locator('.e-switch-handle').first().click();
//     await page.waitForTimeout(500);
//     //Drag a row to a new position
//     const src = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[2]');
//     const dst = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[5]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(2000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-187', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // enable row drag-and-drop in the Gantt chart
//     await page.locator('.e-switch-handle').first().click();
//     await page.waitForTimeout(500);
//     // Disable row drag-and-drop in the Gantt chart
//     await page.locator('.e-switch-handle').first().click();
//     await page.waitForTimeout(500);
//     //Drag a row to a new position
//     const src = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[2]');
//     const dst = page.locator('(//div[contains(@class,"e-dtdiagonalright")])[5]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(2000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('VIET-188', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //Select 'ScrollToTaskbar'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.getByRole('option', { name: 'ScrollToTaskbar' }).click();
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-189', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //Select 'Scroll Into View'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.getByRole('option', { name: 'ScrollIntoView' }).click();
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('VIET-190', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //Select 'ScrollToTaskbar'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'ScrollToTaskbar' }).click();
//     await page.waitForTimeout(3000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-191', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //Select 'Scroll Into View'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'ScrollIntoView' }).click();
//     await page.waitForTimeout(3000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-192', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //Select 'ScrollToTaskbar'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'ScrollToTaskbar' }).click();
//     await page.waitForTimeout(3000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-193', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //Select 'Scroll Into View'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'ScrollIntoView' }).click();
//     await page.waitForTimeout(3000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('VIET-195', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    //Disable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-196', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    //Select 'AddRecordAsync
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.getByRole('option', { name: 'AddRecordAsync' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-197', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    //Select 'UpdateRecordbyIdAsync'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.getByRole('option', { name: 'UpdateRecordbyIdAsync' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-198', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.waitForTimeout(500);
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    //Select  Select 'DeleteRecordAsync'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'DeleteRecordAsync' }).click();
    await page.waitForTimeout(500);
    page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-199', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Select 'UpdatePredecessor'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-200', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Select 'AddPredecessor'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'AddPredecessor' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-201', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Select 'RemovePredecessor'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'RemovePredecessor' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-202', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Select 'ScrollToTaskbar'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'ScrollToTaskbar' }).click();
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-203', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Select 'ScrollIntoView'
    await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'ScrollIntoView' }).click();
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-204', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // Set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Locate the Gantt chart horizontal scroll container
    const ganttArea = page.locator('.e-chart-scroll-container');
    await page.waitForTimeout(500);

    // Scroll from right to left horizontally
    await ganttArea.evaluate((el) => {
        el.scrollLeft = el.scrollWidth;
    });
    await page.waitForTimeout(500);
    // Scroll leftward (RTL direction)
    await page.mouse.wheel(-500, 0); // Negative X scrolls left
    await page.waitForTimeout(3000);

    // Screenshot and compare
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-205', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Locate the Gantt chart content area
    const ganttArea = page.locator('.e-chart-scroll-container');
    await page.waitForTimeout(500);
    // Scroll from top to bottom
    await ganttArea.evaluate((el) => {
        el.scrollTop = el.scrollHeight;
    });

    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});



test('VIET-206', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //Edit 'Start date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/05/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-207', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //Edit 'end date' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('1/07/2001');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-208', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //Edit 'duration' cell for a task in the Gantt chart grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-209', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Year-Month Dialog Editing Start Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('1/1/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-210', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //  Year-Month Dialog Editing End Date
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('1/5/2001');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-211', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    // Open task dialog edit 'duration' save changes.
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog box
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-212', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(820, 302);
    await page.mouse.move(1175, 313);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-213', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    // Enable RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(800);
    // Drag a taskbar to change its start date in the Gantt chart
    const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2);
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('VIET-214', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     //Disable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-215', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     //Select 'AddRecordAsync
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'AddRecordAsync' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-216', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
//     //Select 'UpdateRecordbyIdAsync'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'UpdateRecordbyIdAsync' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-217', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.waitForTimeout(500);
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
//     //Select  Select 'DeleteRecordAsync'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'DeleteRecordAsync' }).click();
//     await page.waitForTimeout(500);
//     page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-218', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'UpdatePredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-219', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'AddPredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'AddPredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-220', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'RemovePredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'RemovePredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-221', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'ScrollToTaskbar'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'ScrollToTaskbar' }).click();
//     await page.waitForTimeout(3000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-222', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'ScrollIntoView'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'ScrollIntoView' }).click();
//     await page.waitForTimeout(3000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-223', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Locate the Gantt chart horizontal scroll container
//     const ganttArea = page.locator('.e-chart-scroll-container');
//     await page.waitForTimeout(500);

//     // Scroll from right to left horizontally
//     await ganttArea.evaluate((el) => {
//         el.scrollLeft = el.scrollWidth;
//     });
//     await page.waitForTimeout(500);
//     // Scroll leftward (RTL direction)
//     await page.mouse.wheel(-500, 0); // Negative X scrolls left
//     await page.waitForTimeout(3000);

//     // Screenshot and compare
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-224', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Locate the Gantt chart content area
//     const ganttArea = page.locator('.e-chart-scroll-container');
//     await page.waitForTimeout(500);
//     // Scroll from top to bottom
//     await ganttArea.evaluate((el) => {
//         el.scrollTop = el.scrollHeight;
//     });

//     await page.waitForTimeout(3000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });



// test('VIET-225', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //Edit 'Start date' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[23]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___StartDate').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('1/05/2001');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-226', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //Edit 'end date' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___EndDate').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('1/07/2001');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-227', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //Edit 'duration' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___Duration').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('10 days');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-228', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Year-Month Dialog Editing Start Date
//     await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#StartDate').fill('1/1/2001');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-229', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //  Year-Month Dialog Editing End Date
//     await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#EndDate').fill('1/5/2001');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-230', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     // Open task dialog edit 'duration' save changes.
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#Duration').fill('7 days');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-231', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //Resize a taskbar in the Gantt chart
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(820, 302);
//     await page.mouse.move(1175, 313);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-232', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//   // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(2000);
//     // Drag a taskbar to change its start date in the Gantt chart
//     const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
//     const box = await taskbar.boundingBox();
//     if (box) {
//         await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
//         await page.mouse.down();
//         await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2);
//         await page.mouse.up();
//     }
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-233', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     //Disable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-234', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     //Select 'AddRecordAsync
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'AddRecordAsync' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-235', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
//     //Select 'UpdateRecordbyIdAsync'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.getByRole('option', { name: 'UpdateRecordbyIdAsync' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-236', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.waitForTimeout(500);
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
//     //Select  Select 'DeleteRecordAsync'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'DeleteRecordAsync' }).click();
//     await page.waitForTimeout(500);
//     page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-237', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'UpdatePredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-238', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'AddPredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'AddPredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-239', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'RemovePredecessor'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'RemovePredecessor' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-240', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'ScrollToTaskbar'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'ScrollToTaskbar' }).click();
//     await page.waitForTimeout(3000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-241', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Select 'ScrollIntoView'
//     await page.locator('(//span[contains(@class,"e-lib")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'ScrollIntoView' }).click();
//     await page.waitForTimeout(3000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-242', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Locate the Gantt chart horizontal scroll container
//     const ganttArea = page.locator('.e-chart-scroll-container');
//     await page.waitForTimeout(500);

//     // Scroll from right to left horizontally
//     await ganttArea.evaluate((el) => {
//         el.scrollLeft = el.scrollWidth;
//     });
//     await page.waitForTimeout(500);
//     // Scroll leftward (RTL direction)
//     await page.mouse.wheel(-500, 0); // Negative X scrolls left
//     await page.waitForTimeout(3000);

//     // Screenshot and compare
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-243', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Locate the Gantt chart content area
//     const ganttArea = page.locator('.e-chart-scroll-container');
//     await page.waitForTimeout(500);
//     // Scroll from top to bottom
//     await ganttArea.evaluate((el) => {
//         el.scrollTop = el.scrollHeight;
//     });

//     await page.waitForTimeout(3000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });



// test('VIET-244', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //Edit 'Start date' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[23]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___StartDate').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('1/05/2001');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-245', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //Edit 'end date' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___EndDate').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('1/07/2001');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-246', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //Edit 'duration' cell for a task in the Gantt chart grid
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___Duration').fill('');
//     await page.waitForTimeout(300);
//     await page.keyboard.type('10 days');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-247', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Year-Month Dialog Editing Start Date
//     await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#StartDate').fill('1/1/2001');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-248', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //  Year-Month Dialog Editing End Date
//     await page.locator('(//td[contains(@class,"e-rowcell")])[24]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#EndDate').fill('1/5/2001');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-249', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     // Open task dialog edit 'duration' save changes.
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
//     await page.waitForTimeout(500);
//     //Click the edit button to open the dialog box
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(800);
//     await page.locator('#Duration').fill('7 days');
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-250', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //Resize a taskbar in the Gantt chart
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(820, 302);
//     await page.mouse.move(1175, 313);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-251', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // Enable RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//      // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(2000);
//     // Drag a taskbar to change its start date in the Gantt chart
//     const taskbar = page.locator('(//div[contains(@class,"e-taskbar")])[1]');
//     const box = await taskbar.boundingBox();
//     if (box) {
//         await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
//         await page.mouse.down();
//         await page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2);
//         await page.mouse.up();
//     }
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('VIET-253', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    await page.getByText('Add').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-254', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    await page.getByText('Add').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-255', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //select the task
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(300);
    await page.getByText('Delete').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-256', async ({ page }) => {
    await page.goto('http://localhost:5004/Virtualization');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    // set Column Type to 'Normal columns'
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Normal columns' }).click();
    await page.waitForTimeout(500);
    //select the task
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(300);
    await page.getByText('Delete').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


// test('VIET-257', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     await page.getByText('Add').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-258', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     await page.getByText('Add').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-259', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //select the task
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
//     await page.waitForTimeout(300);
//     await page.getByText('Delete').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-260', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Frozen columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Frozen columns' }).click();
//     await page.waitForTimeout(500);
//     //select the task
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
//     await page.waitForTimeout(300);
//     await page.getByText('Delete').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });



// test('VIET-261', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     await page.getByText('Add').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-262', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     await page.getByText('Add').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-263', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //select the task
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
//     await page.waitForTimeout(300);
//     await page.getByText('Delete').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-264', async ({ page }) => {
//     await page.goto('http://localhost:5004/Virtualization');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the RTL
//     await page.locator('.e-switch-handle').nth(1).click();
//     await page.waitForTimeout(500);
//     // set Column Type to 'Template columns'
//     await page.locator('.e-input-group-icon').first().click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Template columns' }).click();
//     await page.waitForTimeout(500);
//     //select the task
//     await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
//     await page.waitForTimeout(300);
//     await page.getByText('Delete').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('VIET-266', async ({ page }) => {
//     await page.goto('http://localhost:5004/resource-vitrual');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//Enable the Spilt task
//     await page.locator('.e-switch-handle').first().click();
//     await page.waitForTimeout(2000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('VIET-267', async ({ page }) => {
//     await page.goto('http://localhost:5004/resource-vitrual');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //Enable the Spilt task
//     await page.locator('.e-switch-handle').first().click();
//     await page.waitForTimeout(300);
//     //Disable the Spilt task
//     await page.locator('.e-switch-handle').first().click();
//     await page.waitForTimeout(2000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('VIET-268', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    await page.getByText('Add').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-269', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    await page.getByText('Add').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-270', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //select the task
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(300);
    await page.getByText('Delete').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-271', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    //select the task
    await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
    await page.waitForTimeout(300);
    await page.getByText('Delete').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-272', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //select the task
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(300);
    await page.getByText('Edit').click();
    await page.waitForTimeout(300);
    await page.locator('#TaskName').fill('New task');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-273', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    //select the task
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(300);
    await page.getByText('Edit').click();
    await page.waitForTimeout(300);
    await page.locator('#TaskName').fill('New task');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-274', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //select the task
    await page.getByText('Next timespan').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-275', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    await page.getByText('Next timespan').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-276', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //select the task
    await page.getByText('Previous timespan').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-277', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the RTL
    await page.locator('.e-switch-handle').nth(1).click();
    await page.waitForTimeout(500);
    await page.getByText('Previous timespan').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-280', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the hierarchy data binding 
    await page.locator('.e-switch-handle').nth(2).click();
    await page.locator('.e-switch-handle').nth(2).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-281', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //disable the hierarchy data binding 
    await page.locator('.e-switch-handle').nth(2).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-282', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the hierarchy data binding 
    await page.locator('.e-switch-handle').nth(2).click();
    await page.locator('.e-switch-handle').nth(2).click();
    //Add task in toolbar
    await page.getByText('Add').click();
    await page.waitForTimeout(800);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


// test('VIET-283', async ({ page }) => {
//     await page.goto('http://localhost:5004/resource-vitrual');
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.waitForTimeout(500);
//     //select the task
//     await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
//     await page.waitForTimeout(300);
//     await page.getByText('Delete').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('VIET-284', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the hierarchy data binding 
    await page.locator('.e-switch-handle').nth(2).click();
    await page.locator('.e-switch-handle').nth(2).click();
    //select the task
    await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
    await page.waitForTimeout(300);
    await page.getByText('Edit').click();
    await page.waitForTimeout(300);
    await page.locator('#TaskName').fill('New task');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('VIET-285', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the hierarchy data binding 
    await page.locator('.e-switch-handle').nth(2).click();
    await page.locator('.e-switch-handle').nth(2).click();
    //Resize a taskbar in the Gantt chart
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(562, 2102);
    await page.mouse.move(1085, 221);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});



test('VIET-286', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the hierarchy data binding 
    await page.locator('.e-switch-handle').nth(2).click();
    await page.locator('.e-switch-handle').nth(2).click();
    //select the Next timespan
    await page.getByText('Next timespan').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-287', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
    //Enable the hierarchy data binding 
    await page.locator('.e-switch-handle').nth(2).click();
    await page.locator('.e-switch-handle').nth(2).click();
    //select the Previous timespan
    await page.getByText('Previous timespan').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-288', async ({ page }) => {
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.waitForTimeout(500);
    // Wait for the Gantt chart container
    const ganttArea = page.locator('.e-gantt .e-content').first();
    await ganttArea.waitFor();
    await page.waitForTimeout(500);
    // Scroll to the middle horizontally
    await ganttArea.evaluate((el) => {
        el.scrollLeft = el.scrollWidth / 2;
    });
    await page.waitForTimeout(500);
    await page.mouse.wheel(100, 0);
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('VIET-289', async ({ page }) => {
    // Open the page
    await page.goto('http://localhost:5004/resource-vitrual');
    await page.waitForTimeout(500);
    // Locate the Gantt chart content area
    const ganttArea = page.locator('.e-chart-scroll-container');
    await page.waitForTimeout(500);
    // Scroll from top to bottom
    await ganttArea.evaluate((el) => {
        el.scrollTop = el.scrollHeight;
    });
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});