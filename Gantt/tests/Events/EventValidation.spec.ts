import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Events initial load - lifecycle events', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(2000);
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Row selecting event at grid side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Row selecting event at chart side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-left-label-container')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Row deselecting event', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Cell deselecting event', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[3]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Cell edit - open', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").dblclick();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Cell edit save - Enter key', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").dblclick();
    await page.waitForTimeout(200);
    await page.locator('#DataItem___TaskName').fill('Modified Task Name');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Cell edit save - Update toolbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").dblclick();
    await page.waitForTimeout(200);
    await page.locator('#DataItem___TaskName').fill('Updated via Toolbar');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Update' }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Dialog edit - open and save', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.getByLabel('Duration', { exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByLabel('Duration', { exact: true }).fill('5');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Dialog edit - open via taskbar dblclick', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Add record via toolbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('#TaskName').fill('New Task');
    await page.waitForTimeout(300);
    await page.locator('#Duration').fill('3');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Delete record via toolbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Delete record via Delete key - chart side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//div[contains(@class,'e-left-label-container')])[3]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Delete');
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Sort ascending - header click', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Sort descending - header click', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(800);
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Sort ascending via column menu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Sort Ascending'])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Sort descending via column menu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Sort Descending'])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Search record - toolbar search', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').click();
    await page.waitForTimeout(200);
    await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').fill('Foundation');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Collapse row - expand icon', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Expand row - collapse icon', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
    await page.waitForTimeout(600);
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-icons e-treegridcollapse')])[1]").click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Collapse All and Expand All toolbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Indent record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Indent'])[1]").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Outdent record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Outdent'])[1]").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Taskbar drag - child task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(1250, 243);
    await page.waitForTimeout(600);
    await page.mouse.up();
    await page.waitForTimeout(1500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Taskbar drag - parent task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-left-label-container')])[1]").click();
    await page.waitForTimeout(300);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(1270, 167);
    await page.waitForTimeout(600);
    await page.mouse.up();
    await page.waitForTimeout(1500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Draw connector line', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    const taskbar1 = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const taskbar2 = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
    const box1 = await taskbar1.boundingBox();
    const box2 = await taskbar2.boundingBox();
    if (box1 && box2) {
        await page.mouse.move(box1.x + box1.width, box1.y + box1.height / 2);
        await page.waitForTimeout(300);
        await page.mouse.down();
        await page.waitForTimeout(300);
        await page.mouse.move(box2.x, box2.y + box2.height / 2, { steps: 20 });
        await page.waitForTimeout(300);
        await page.mouse.up();
        await page.waitForTimeout(1500);
    }
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Row drag and drop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    const src = page.locator('(//div[contains(@class,"e-rowcelldrag")])[2]');
    const dst = page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]');
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
        await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
        await page.mouse.down();
        await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
        await page.mouse.up();
        await page.waitForTimeout(2000);
    }
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Drag selection', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    const row1 = page.locator("(//td[contains(@class,'e-rowcell')])[9]");
    const row4 = page.locator("(//td[contains(@class,'e-rowcell')])[25]");
    const box1 = await row1.boundingBox();
    const box4 = await row4.boundingBox();
    if (box1 && box4) {
        await page.mouse.move(box1.x + 10, box1.y + 10);
        await page.mouse.down();
        await page.mouse.move(box4.x + 10, box4.y + 10, { steps: 20 });
        await page.mouse.up();
        await page.waitForTimeout(1000);
    }
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Filter menu open', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Filter'])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Column menu open event', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Column reorder', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    const header1 = page.locator("(//div[contains(@class,'e-headercell')])[3]");
    const header2 = page.locator("(//div[contains(@class,'e-headercell')])[1]");
    const box1 = await header1.boundingBox();
    const box2 = await header2.boundingBox();
    if (box1 && box2) {
        await page.mouse.move(box1.x + box1.width / 2, box1.y + box1.height / 2);
        await page.mouse.down();
        await page.waitForTimeout(300);
        await page.mouse.move(box2.x + 20, box2.y + box2.height / 2, { steps: 20 });
        await page.waitForTimeout(300);
        await page.mouse.up();
        await page.waitForTimeout(1000);
    }
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Column resize', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-rhandler e-rcursor")])[2]').click();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(500, 105);
    await page.waitForTimeout(600);
    await page.mouse.up();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Autofit all columns - column menu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Autofit all columns'])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Autofit this column - column menu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Autofit this column'])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Context menu open - grid side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Context menu - Task Information', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Task Information'])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Context menu - Delete Task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Delete Task'])[1]").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Context menu - Add Above', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(400);
    await page.locator("(//li[text()='Above'])").click();
    await page.waitForTimeout(2500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Context menu - Convert to Milestone', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Convert'])").click({ force: true });
    await page.waitForTimeout(600);
    await page.locator("(//li[text()='To Milestone'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Zoom in', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Zoom out', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Zoom out'])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Zoom to fit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Next and Previous timespan', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Undo action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(800);
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Undo'])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Redo action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator("(//span[text()='Undo'])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Redo'])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('46-PDF export', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'PDF Export' }).click();
    await page.waitForTimeout(3000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Copy row - grid side (Ctrl+C)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+c');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Copy row - chart side (Ctrl+C)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//div[contains(@class,'e-left-label-container')])[3]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").press('Control+c');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-Splitter resize start', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    const splitter = page.locator('(//div[contains(@class,"e-split-bar e-split-bar-horizontal")])[1]');
    const box = await splitter.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.waitForTimeout(300);
        await page.mouse.move(box.x + 100, box.y + box.height / 2);
        await page.waitForTimeout(300);
        await page.mouse.up();
        await page.waitForTimeout(800);
    }
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('50-Clear event log button', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-Cell selecting event', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-Multiple row selection - Ctrl+Click', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
    await page.waitForTimeout(300);
    await page.keyboard.down('Control');
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").click();
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('53-Taskbar left resize', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    const taskbar = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + 5, box.y + box.height / 2);
        await page.waitForTimeout(300);
        await page.mouse.down();
        await page.waitForTimeout(300);
        await page.mouse.move(box.x + 30, box.y + box.height / 2);
        await page.waitForTimeout(600);
        await page.mouse.up();
        await page.waitForTimeout(1500);
    }
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('54-Taskbar right resize', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    const taskbar = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const box = await taskbar.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width - 5, box.y + box.height / 2);
        await page.waitForTimeout(300);
        await page.mouse.down();
        await page.waitForTimeout(300);
        await page.mouse.move(box.x + box.width + 40, box.y + box.height / 2);
        await page.waitForTimeout(600);
        await page.mouse.up();
        await page.waitForTimeout(1500);
    }
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('55-Progress resize', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    const taskbar = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const box = await taskbar.boundingBox();
    if (box) {
        // Move to the progress resize handle (usually on right side of progress bar)
        await page.mouse.move(box.x + box.width * 0.3, box.y + box.height / 2);
        await page.waitForTimeout(300);
        await page.mouse.down();
        await page.waitForTimeout(300);
        await page.mouse.move(box.x + box.width * 0.6, box.y + box.height / 2);
        await page.waitForTimeout(600);
        await page.mouse.up();
        await page.waitForTimeout(1500);
    }
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('56-Context menu - Add Below', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(400);
    await page.locator("(//li[text()='Below'])").click();
    await page.waitForTimeout(2500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('57-Context menu - Add Child', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(400);
    await page.locator("(//li[text()='Child'])").click();
    await page.waitForTimeout(2500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('58-Context menu open - chart side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('59-Context menu - Convert to Task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    // First convert to milestone
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Convert'])").click({ force: true });
    await page.waitForTimeout(600);
    await page.locator("(//li[text()='To Milestone'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // Now convert back to task
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Convert'])").click({ force: true });
    await page.waitForTimeout(600);
    await page.locator("(//li[text()='To Task'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('60-Delete dependency via context menu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    // First create a dependency
    const taskbar1 = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const taskbar2 = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
    const box1 = await taskbar1.boundingBox();
    const box2 = await taskbar2.boundingBox();
    if (box1 && box2) {
        await page.mouse.move(box1.x + box1.width, box1.y + box1.height / 2);
        await page.waitForTimeout(300);
        await page.mouse.down();
        await page.waitForTimeout(300);
        await page.mouse.move(box2.x, box2.y + box2.height / 2, { steps: 20 });
        await page.waitForTimeout(300);
        await page.mouse.up();
        await page.waitForTimeout(1500);
    }
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // Now delete the dependency
    await page.locator("(//div[contains(@class,'e-line')])[1]").click({ button: 'right', force: true });
    await page.waitForTimeout(500);
    await page.locator("(//li[contains(text(),'Delete Dependency')])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('61-Cell edit cancel - Escape key', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").dblclick();
    await page.waitForTimeout(200);
    await page.locator('#DataItem___TaskName').fill('This Should Not Save');
    await page.waitForTimeout(300);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('62-Cell edit cancel - Cancel toolbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").dblclick();
    await page.waitForTimeout(200);
    await page.locator('#DataItem___TaskName').fill('Cancel this edit');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('63-Dialog edit - cancel with unsaved changes', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Duration', { exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByLabel('Duration', { exact: true }).fill('8');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('64-Dialog edit - tab navigation between fields', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(300);
});

test('65-Keyboard navigation - Arrow keys', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('66-Keyboard navigation - Home and End keys', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Home');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('End');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('67-Column hide via column menu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    await page.locator('(//li[text()="Columns"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class, "e-icons e-frame e-check")])[2]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('.e-gantt').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('68-Column chooser - show hidden column', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    await page.locator('(//li[text()="Columns"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class, "e-icons e-frame e-check")])[2]').click();
    await page.waitForTimeout(300);
    await page.locator('.e-gantt').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//li[text()="Columns"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class, "e-icons e-frame")])[2]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('.e-gantt').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('69-Scroll timeline horizontally', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('//div[contains(@class,"e-chart-scroll-container")]').evaluate(element => {
        element.scrollLeft = 500;
    });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('70-Scroll grid vertically', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('//div[contains(@class,"e-content")]').first().evaluate(element => {
        element.scrollTop = 300;
    });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('71-Row selecting event at grid side and chart side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/events');
    await page.waitForTimeout(1000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-left-label-container')])[7]").click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('72-Cell edit save - update toolbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/events');
    await page.waitForTimeout(1000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(200);
    await page.locator('#DataItem___TaskName').fill('events');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('73-Delete record via Delete key - grid side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Delete');
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('74-Taskbar hover event', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").hover();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('75-Parent taskbar double click', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").dblclick();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('76-Milestone taskbar click', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // First convert a task to milestone
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Convert'])").click({ force: true });
    await page.waitForTimeout(600);
    await page.locator("(//li[text()='To Milestone'])").click();
    await page.waitForTimeout(2000);
    // Now click the milestone
    await page.locator("(//div[contains(@class,'e-gantt-milestone')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('77-Milestone drag', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // First convert a task to milestone
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[text()='Convert'])").click({ force: true });
    await page.waitForTimeout(600);
    await page.locator("(//li[text()='To Milestone'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // Drag the milestone
    const milestone = page.locator("(//div[contains(@class,'e-gantt-milestone')])[1]");
    const box = await milestone.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.waitForTimeout(300);
        await page.mouse.move(box.x + 80, box.y + box.height / 2);
        await page.waitForTimeout(600);
        await page.mouse.up();
        await page.waitForTimeout(1500);
    }
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('78-Row hover event', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").hover();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('79-Connector line hover', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // First create a dependency
    const taskbar1 = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const taskbar2 = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
    const box1 = await taskbar1.boundingBox();
    const box2 = await taskbar2.boundingBox();
    if (box1 && box2) {
        await page.mouse.move(box1.x + box1.width, box1.y + box1.height / 2);
        await page.waitForTimeout(300);
        await page.mouse.down();
        await page.waitForTimeout(300);
        await page.mouse.move(box2.x, box2.y + box2.height / 2, { steps: 20 });
        await page.waitForTimeout(300);
        await page.mouse.up();
        await page.waitForTimeout(1500);
    }
    await page.waitForTimeout(1000);
    // Hover over connector line
    await page.locator("(//div[contains(@class,'e-line')])[1]").hover({ force: true });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('80-Timeline header click event', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-timeline-header-container')]//div)[5]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('81-Multiple undo operations', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    // Perform multiple actions
    await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator("(//div[contains(@class,'e-headercell')])[2]").click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // Undo first action
    await page.locator("(//span[text()='Undo'])[1]").click();
    await page.waitForTimeout(600);
    // Undo second action
    await page.locator("(//span[text()='Undo'])[1]").click();
    await page.waitForTimeout(600);
    // Undo third action
    await page.locator("(//span[text()='Undo'])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('82-Multiple redo operations', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // Perform multiple actions and undo them
    await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Undo'])[1]").click();
    await page.waitForTimeout(600);
    await page.locator("(//span[text()='Undo'])[1]").click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // Redo actions
    await page.locator("(//span[text()='Redo'])[1]").click();
    await page.waitForTimeout(600);
    await page.locator("(//span[text()='Redo'])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('83-Context menu - Indent via context menu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[contains(text(),'Indent')])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('84-Context menu - Outdent via context menu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("(//li[contains(text(),'Outdent')])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('85-Search clear event', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    // Perform search first
    await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').click();
    await page.waitForTimeout(200);
    await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').fill('Foundation');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // Clear search
    await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').fill('');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('86-Add dialog cancel without adding', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#TaskName').fill('Test Cancel');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('87-Row double click on grid', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").dblclick();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('88-Column menu filter option', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    await page.locator("(//li[contains(text(),'Filter')])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('89-Shift+Click row selection', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
    await page.waitForTimeout(300);
    await page.keyboard.down('Shift');
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").click();
    await page.keyboard.up('Shift');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('90-Parent taskbar click selection', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('91-Click toolbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-toolbar-item e-spacer')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('92-Zoom multiple times', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('93-Multiple expand and collapse operations', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
    await page.waitForTimeout(400);
    await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[2]").click();
    await page.waitForTimeout(400);
    await page.locator("(//span[contains(@class,'e-icons e-treegridcollapse')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('94-Sort clear via column menu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // First sort
    await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    // Clear sort
    await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('95-Taskbar progress bar visibility', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('96-click the baseline event', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.locator("(//div[contains(@class,'e-baseline-bar')])[3]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('97-Keyboard shortcut - Ctrl+Home', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+Home');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('98-Keyboard shortcut - Ctrl+End', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+End');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('99-Page Down key navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('PageDown');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('100-Page Up key navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Event_Validation');
    await page.waitForTimeout(1200);
    await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Clear")').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('PageUp');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
