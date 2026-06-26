import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';


test('RAET-001', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Screenshot for resource data load
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator("(//div[@class='e-toolbar-item '])[3]").click();
    await page.waitForTimeout(200);
    //Screenshot for presence for four resource
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //screenshot for 1st resource duration and milestone
    await page.locator("(//*[@class='e-icons e-treegridcollapse'])[1]").click();
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 500, y: 1 }
        });
    await page.waitForTimeout(200);
    //Screenshot for duration and milestones
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    //screenshot for 2nd resource duration and milestone
    await page.locator("(//*[@class='e-icons e-treegridexpand'])[1]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-icons e-treegridcollapse'])[2]").click();
    await page.waitForTimeout(200);
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 500, y: 1 }
        });
    await page.waitForTimeout(200);
    //Screenshot for duration and milestones
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    //screenshot for 3rd resource duration and milestone
    await page.locator("(//*[@class='e-icons e-treegridexpand'])[1]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-icons e-treegridcollapse'])[3]").click();
    await page.waitForTimeout(200);
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 500, y: 1 }
        });
    await page.waitForTimeout(200);
    //Screenshot for duration and milestones
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //screenshot for 4th resource duration and milestone
    await page.locator("(//*[@class='e-icons e-treegridexpand'])[1]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-icons e-treegridcollapse'])[4]").click();
    await page.waitForTimeout(200);
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 500, y: 1 }
        });
    await page.waitForTimeout(200);
    //Screenshot for duration and milestones
    //RAET-004 testcase also
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-002', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[1]").click();
    await page.waitForTimeout(200);
    //Screenshot for switch view
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-003', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //validation for public holidays set for 7th 
    await expect.soft(page.locator("(//div[@class='e-holiday'])[1]")).toHaveAttribute('aria-label', 'Public holidays from 1/7/2022 to 1/7/2022');
    await page.waitForTimeout(200);
    //validation for public holidays set for 19th and 20th
    await expect.soft(page.locator("(//div[@class='e-holiday'])[2]")).toHaveAttribute('aria-label', 'Public holiday from 1/19/2022 to 1/20/2022');
    await page.waitForTimeout(200);
    //Drag the taskbar over the holiday to check the taskbar rendering 
    await page.locator('.e-taskbar-right-resizer').first().click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.waitForTimeout(800);
    await page.mouse.move(800, 150);
    await page.waitForTimeout(2000);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('RAET-005', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for requirement gathering task details
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-006', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[3]").dblclick();
    await page.waitForTimeout(500);
    await page.locator("#TaskName").click();
    await page.waitForTimeout(1000);
    //Screenshot for feasibility study task details
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-007', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[4]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for resource planning task details
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-008', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[5]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for milestone task details
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-009', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[6]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for milestone task details
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-009B', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[7]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for milestone task details
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-010', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-icons e-treegridexpand'])[1]").click();
    await page.waitForTimeout(200);
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 500, y: 1 }
        });
    await page.waitForTimeout(1000);
    //Screenshot for duration and milestones
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-011', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[9]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for duration and milestones
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-012', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[10]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for duration and milestones
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-013', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[11]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for duration and milestones
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-014', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[12]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for duration and milestones for FD
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-015', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[13]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for duration and milestones for FW
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-015A', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[14]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for duration and milestones for FU
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-016', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//div[@class='e-toolbar-item '])[3]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-icons e-treegridcollapse'])[3]").click();
    await page.waitForTimeout(200);
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 500, y: 1 }
        });
    await page.waitForTimeout(200);
    //Screenshot for duration and milestones
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-017', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[16]").dblclick();
    await page.waitForTimeout(800);
    await page.locator("#TaskName").click();
    await page.waitForTimeout(2000);
    //Screenshot for duration and milestones for FU
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-018', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Screenshot for duration and milestones for FU
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-019', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//div[@class='e-toolbar-item '])[3]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-icons e-treegridcollapse'])[3]").click();
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 500, y: 1 }
        });
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-020', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[18]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-021', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[19]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-022', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[20]").dblclick();
    await page.waitForTimeout(500);
    await page.locator("#TaskName").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-022B', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[21]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-023', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//div[@class='e-toolbar-item '])[3]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-icons e-treegridcollapse'])[4]").click();
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 500, y: 1 }
        });
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-024', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[23]").dblclick();
    await page.waitForTimeout(500);
    await page.locator("#TaskName").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-025', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[24]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-026', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//div[@class='e-toolbar-item '])[3]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-icons e-treegridcollapse'])[4]").click();
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 500, y: 1 }
        });
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-027', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[25]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-028', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[26]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-029', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[27]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-029B', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[28]").dblclick();
    await page.waitForTimeout(500);
    await page.locator("#TaskName").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-030', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//div[@class='e-toolbar-item '])[3]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-icons e-treegridcollapse'])[5]").click();
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 500, y: 1 }
        });
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-031', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[30]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-032', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[31]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-033', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[32]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-034', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[33]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-035', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[34]").dblclick();
    await page.waitForTimeout(1000);
    await page.locator('#TaskName').click();
    await page.waitForTimeout(500);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-035B', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//td[@class='e-chart-row-cell e-chart-row-border'])[34]").dblclick();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-036', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-037', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[1]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-on'])[1]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-038', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-039', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll right
    await page.locator('(//div[contains(@class,"e-content")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(400, 0);
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.locator('//div[@class="e-chart-scroll-container e-content"]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-040', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll right
    await page.locator('(//div[contains(@class,"e-content")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(600, 0);
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.locator('//div[@class="e-chart-scroll-container e-content"]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-041', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll right
    await page.locator('(//div[contains(@class,"e-content")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(1300, 0);
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.locator('//div[@class="e-chart-scroll-container e-content"]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-042', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll right
    await page.locator('(//div[contains(@class,"e-content")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(1600, 0);
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.locator('//div[@class="e-chart-scroll-container e-content"]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 1000);
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//RAET-044 to RAET-047 are done together as they are interrelated
test('RAET-043', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 1000, y: 1 }
        });
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-048', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 1000, y: 1 }
        });
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-049', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 1000, y: 1 }
        });
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-050', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 1000, y: 1 }
        });
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-051', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 1000, y: 1 }
        });
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-052', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    var gantt = page.locator("//div[@class='sf-gantt e-control e-gantt']")
    await page.locator(".e-split-bar").dragTo(gantt,
        {
            targetPosition: { x: 1000, y: 1 }
        });
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-053', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-054', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll right
    await page.locator('(//div[contains(@class,"e-content")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(400, 0);
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.locator('//div[@class="e-chart-scroll-container e-content"]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

});

test('RAET-055', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll right
    await page.locator('(//div[contains(@class,"e-content")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(600, 0);
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.locator('//div[@class="e-chart-scroll-container e-content"]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-056', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll right
    await page.locator('(//div[contains(@class,"e-content")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(1600, 0);
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.locator('//div[@class="e-chart-scroll-container e-content"]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 1000);
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('RAET-057', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll right
    await page.locator('(//div[contains(@class,"e-content")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(1600, 0);
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.locator('//div[@class="e-chart-scroll-container e-content"]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 1000);
    await page.waitForTimeout(200);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
});


test('RAET-058', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    // Drag and drop 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(505, 127);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-059', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    // Drag and drop 
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-060', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    // Drag and drop 
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    await page.waitForTimeout(1000);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(200);
    //Double click the record to show Rose Fuller
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-061', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    // Drag and drop 
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
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
    await page.waitForTimeout(1000);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-062', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    // Drag and drop 
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    await page.waitForTimeout(1000);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-063', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    // Drag and drop 
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    await page.waitForTimeout(1000);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(200);
    //Double click the record to show Rose Fuller
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Click save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-064', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(500);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Drag and drop 
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    await page.waitForTimeout(1000);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Use mouse wheel to scroll right
    await page.locator('(//div[contains(@class,"e-content")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(1600, 0);
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.locator('//div[@class="e-chart-scroll-container e-content"]').hover();
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 1000);
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-065', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    // Drag and drop 
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-066', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    // Drag and drop 
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    await page.waitForTimeout(1000);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(200);
    //Double click the record to show Rose Fuller
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Click save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-067', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    // Turn on the needed switches and expand
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    // Drag & drop taskbar (preserve the original motion but avoid fixed waits)
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
    if ((await src.count()) > 0 && (await dst.count()) > 0) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
        }
    }
    // Open editor for target record and switch to Resources tab
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]").dblclick();
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    // Assert the expected resource name is visible (avoid screenshot diff)
    await expect(page.locator("span.e-label", { hasText: 'Rose Fuller' }).first()).toBeVisible();
    // Save and assert resource still present
    await page.locator("(//button[text()='Save'])[1]").click();
    await expect(page.locator("span.e-label", { hasText: 'Rose Fuller' }).first()).toBeVisible();
});

test('RAET-068', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Include weekend
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(200);
    // Drag and drop 
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[9]");
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
    await page.waitForTimeout(1000);
    //Double click the record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[9]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Click save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-069', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Include weekend
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(200);
    // Drag and drop 
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[7]");
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
    await page.waitForTimeout(1000);
    //Double click the record 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[9]").dblclick();
    await page.waitForTimeout(500);
    //Navigate to resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Click save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-070', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click CollapseAllParentTasks
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('RAET-071', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-072', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-073', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-074', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-075', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-076', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-077', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-078', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-079', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-080', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-081', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-082', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-083', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-084', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-085', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-086', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-087', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-088', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-089', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-090', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-091', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-092', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-093', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-094', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-095', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-096', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-097', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-098', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-099', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-100', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-101', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-102', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-103', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-104', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-105', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-106', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-107', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-108', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-109', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-110', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-111', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-112', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('RAET-113', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(1000);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(1000);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1500);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-114', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-115', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(1000);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(1000);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1200);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-116', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-117', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-118', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(600);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(600);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(600);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(600);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(500);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-119', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1200);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-120', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-121', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-122', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-123', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-124', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-125', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-126', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-127', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-128', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-129', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-130', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-131', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-132', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-133', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-134', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-135', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-136', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-137', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-138', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-139', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-140', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-141', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-142', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-143', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-144', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('RAET-145', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-146', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-147', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-148', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-149', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-150', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-151', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-152', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-153', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-154', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-155', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-156', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-157', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-158', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-159', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-160', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-161', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-162', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-163', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-164', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-165', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-166', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-167', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-168', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-169', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-170', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-171', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-172', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-173', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-174', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-175', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-176', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-177', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-178', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-179', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-180', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-181', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-182', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-183', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Work Unit
    await page.mouse.click(1873, 440);
    await page.waitForTimeout(1000);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(2000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-184', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(1000);
    //Work Unit
    await page.mouse.click(1873, 440);
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-185', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.mouse.click(1872, 406);
    await page.waitForTimeout(1000);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Work Unit
    await page.mouse.click(1873, 440);
    await page.waitForTimeout(1000);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(2000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-186', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-187', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-188', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Year
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-189', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-190', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Change Month
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-191', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.mouse.click(1872, 406);
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.mouse.click(1873, 440);
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-192', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Week
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.mouse.click(1872, 406);
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.mouse.click(1873, 440);
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-193', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(1000);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(1000);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Duration Unit
    await page.mouse.click(1872, 406);
    await page.waitForTimeout(1000);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Work Unit
    await page.mouse.click(1873, 440);
    await page.waitForTimeout(1000);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1500);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-194', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Day
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.locator("(//span[contains(@class,'e-input')])[19]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-195', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Duration Unit
    await page.mouse.click(1872, 406);
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Work Unit
    await page.mouse.click(1873, 440);
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-196', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Change Hour
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Duration Unit
    await page.mouse.click(1872, 406);
    await page.waitForTimeout(5000);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Work Unit
    await page.mouse.click(1873, 440);
    await page.waitForTimeout(5000);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-197', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/05/2025');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //select martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('RAET-198', async ({ page }) => {
    await test.step('Open Resource Allocation page', async () => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('http://localhost:5004/resourceallocation');

        await expect(page).toHaveURL(/resourceallocation/);
    });
    await test.step('Enable Overallocation', async () => {
        const overallocationToggle = page.locator("(//span[@class='e-switch-off'])[3]");
        await expect(overallocationToggle).toBeVisible();
        await overallocationToggle.click();
    });
    await test.step('Click Add button', async () => {
        const addBtn = page.locator("(//span[text()='Add'])[1]");
        await expect(addBtn).toBeEnabled();
        await addBtn.click();
    });
    await test.step('Update Start Date', async () => {
        const startDateInput = page.locator("#StartDate");
        await expect(startDateInput).toBeVisible();

        await startDateInput.fill(''); // Clear
        await startDateInput.type('01/05/2025');

        await expect(startDateInput).toHaveValue('01/05/2025');
    });
    await test.step('Select Resource', async () => {
        const resourceTab = page.locator("(//div[contains(@class,'e-tab-text')])[2]");
        await resourceTab.click();
        const martinCheckbox = page.locator("(//span[contains(@class,'e-frame')])[1]");
        await expect(martinCheckbox).toBeVisible();
        await martinCheckbox.click();
    });
    await test.step('Save Allocation', async () => {
        const saveBtn = page.locator("(//button[text()='Save'])[1]");
        await expect(saveBtn).toBeEnabled();
        await saveBtn.click();
    });
    await test.step('Collapse All', async () => {
        const collapseBtn = page.locator("(//span[text()='Collapse all'])[1]");
        await expect(collapseBtn).toBeVisible();
        await collapseBtn.click();
    });
    await test.step('Enable Multi Taskbar', async () => {
        const multiTaskbarToggle = page.locator("(//span[@class='e-switch-off'])[4]");
        await expect(multiTaskbarToggle).toBeVisible();
        await multiTaskbarToggle.click();
    });
    await test.step('Click first chart row', async () => {
        const firstRow = page.locator("(//td[contains(@class,'e-chart-row-cell')])[1]");
        await expect(firstRow).toBeVisible();
        await firstRow.click();
    });

});

test('RAET-199', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('05/01/2025');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //select martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-ensure the newly added record is displayed under Martin Tamer
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//200 and 201 is same as the unassigned task the overallocation is indicated properly 
test('RAET-200', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/14/2022');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2500);
    //Screenshot validation-newly added task is displayed under assigned tasks
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-202', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/14/2022');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //Click the 1st row on the chart side
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[5]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-the overallocation is maintained in unassigned tasks
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-203', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click 1st unassigned task record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[13]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/5/2025');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //select martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Edited record is removed from unassigned task
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-204', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click 1st unassigned task record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[13]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/5/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //select martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Click the record moved to martin tamer
    await page.locator("(//td[contains(@class,'e-rowcell')])[58]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation- edited task is added under the "Martin Tamer" resource.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//205 and 206 The overallocation lines remains specifically and same on the tasks 
test('RAET-205', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click 1st unassigned task record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[13]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/5/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //select martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Click the record moved to martin tamer
    await page.locator("(//td[contains(@class,'e-rowcell')])[58]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensure the overalllocation lines under martin tamer are updated for newly added record
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-207', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Click 1st unassigned task record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[13]").dblclick();
    await page.waitForTimeout(800);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(600);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(600);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/5/2022');
    await page.waitForTimeout(600);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(600);
    //select martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[1]").click();
    await page.waitForTimeout(600);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(600);
    //Click the record moved to martin tamer
    await page.locator("(//td[contains(@class,'e-rowcell')])[58]").click();
    await page.waitForTimeout(600);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(1000);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensure the overalllocation lines under martin tamer are updated for newly added record
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-208', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Click 1st unassigned task record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[13]").dblclick();
    await page.waitForTimeout(800);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/5/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(600);
    //select martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[1]").click();
    await page.waitForTimeout(600);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the record moved to martin tamer
    await page.locator("(//td[contains(@class,'e-rowcell')])[58]").click();
    await page.waitForTimeout(600);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(800);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(800);
    //Click the 1st row on the chart side
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[5]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensure the overalllocation lines under unassigned tasks are indicated
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-209', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Click the record moved to martin tamer
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[2]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The record for Martin tamer is removed from the resource list
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-210', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Click the record under unassigned task
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[29]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Unassigned task under Martin Tamer is moved
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-211', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Unassigned task under Martin Tamer is moved
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-212', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Unassigned task under Martin Tamer is moved
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-213', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Unassigned task under Martin Tamer is moved
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-214', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //Click the record under unassigned task
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border e-lastrow')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Overallocation under unassigned task is updated accurately
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-215', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").dblclick();
    await page.waitForTimeout(1000);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-the date is updated properly
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Select same task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Overallocation under unassigned task is updated accurately
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-216', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").dblclick();
    await page.waitForTimeout(1000);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-the date is updated properly
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Select same task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    //record under unassigned task
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[29]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Overallocation under unassigned task is updated accurately
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-217', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").dblclick();
    await page.waitForTimeout(1000);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-the date is updated properly
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Select same task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Overallocation under unassigned task is updated accurately
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-218', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").dblclick();
    await page.waitForTimeout(1000);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-the date is updated properly
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Select same task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //record under unassigned task
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[29]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Overallocation under unassigned task is updated accurately
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-219', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").dblclick();
    await page.waitForTimeout(1000);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-the date is updated properly
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Select same task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Overallocation under unassigned task is updated accurately
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-220', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the record under martin tamer
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").dblclick();
    await page.waitForTimeout(1000);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('03/15/2022');
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-the date is updated properly
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Select same task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //record under unassigned task
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border e-lastrow')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Overallocation under unassigned task is updated accurately
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-221', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[13]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation- The selected record should beremoved from the user interface.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-222', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[13]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Screenshot validation- The selected record should be removed from the user interface.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-223', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[13]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //record under unassigned task
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border e-lastrow')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation- The selected record should be removed from the user interface.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-224', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click martin tamer task record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/21/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Check Rose Fuller
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The record should not appear under Martin Tamer anymore
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-225', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click martin tamer task record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/21/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Check Rose Fuller
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //record under Rose Fuller
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[8]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task should appear under Rose Fuller
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-226', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click martin tamer task record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1200);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/21/2022');
    await page.waitForTimeout(600);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(600);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Check Rose Fuller
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(800);
    //record under Rose Fuller
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[8]").click();
    await page.waitForTimeout(600);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task should appear under Rose Fuller
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-227', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click martin tamer task record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/21/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Check Rose Fuller
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //record under Rose Fuller
    await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[8]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task should appear under Rose Fuller
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//228 and 229 the testcases are same as under Rose Fuller the overallocation resource is accurately updated
test('RAET-228', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click martin tamer task record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Change start date
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //clear records
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //type the record
    await page.keyboard.type('01/21/2022');
    await page.waitForTimeout(500);
    //Select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Uncheck martin tamer
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //Check Rose Fuller
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Task should appear under Rose Fuller
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-230', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //RemoveAssignment
    await page.locator("(//li[text()='RemoveAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-231', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //RemoveAssignment
    await page.locator("(//li[text()='RemoveAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select all
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-232', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //RemoveAssignment
    await page.locator("(//li[text()='RemoveAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select all
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-233', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //RemoveAssignment
    await page.locator("(//li[text()='RemoveAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select all
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-234', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //RemoveAssignment
    await page.locator("(//li[text()='RemoveAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select all
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(500);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-235', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //RemoveAssignment
    await page.locator("(//li[text()='RemoveAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select all
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-236', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddAssignment
    await page.locator("(//li[text()='AddAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-237', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddAssignment
    await page.locator("(//li[text()='AddAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-238', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddAssignment
    await page.locator("(//li[text()='AddAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-239', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddAssignment
    await page.locator("(//li[text()='AddAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('RAET-240', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(500);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
//     await page.waitForTimeout(1000);
//     //AddAssignment
//     await page.locator("(//li[text()='AddAssignment'])[1]").click();
//     await page.waitForTimeout(500);
//     //select button click
//     await page.locator("(//button[text()='Click'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[text()='Collapse all'])[1]").click();
//     await page.waitForTimeout(400);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-No visual glitches or inconsistencies should appear after collapsing the task view
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-241', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(500);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
//     await page.waitForTimeout(1000);
//     //AddAssignment
//     await page.locator("(//li[text()='AddAssignment'])[1]").click();
//     await page.waitForTimeout(500);
//     //select button click
//     await page.locator("(//button[text()='Click'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[text()='Collapse all'])[1]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-No visual glitches or inconsistencies should appear after collapsing the task view
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('RAET-242', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //UpdateAssignment
    await page.locator("(//li[text()='UpdateAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-243', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(800);
    //UpdateAssignment
    await page.locator("(//li[text()='UpdateAssignment'])[1]").click();
    await page.waitForTimeout(600);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-244', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(800);
    //UpdateAssignment
    await page.locator("(//li[text()='UpdateAssignment'])[1]").click();
    await page.waitForTimeout(600);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-245', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(800);
    //UpdateAssignment
    await page.locator("(//li[text()='UpdateAssignment'])[1]").click();
    await page.waitForTimeout(600);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-246', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(800);
    //UpdateAssignment
    await page.locator("(//li[text()='UpdateAssignment'])[1]").click();
    await page.waitForTimeout(600);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(500);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-No visual glitches or inconsistencies should appear after collapsing the task view
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('RAET-247', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
//     await page.waitForTimeout(800);
//     //UpdateAssignment
//     await page.locator("(//li[text()='UpdateAssignment'])[1]").click();
//     await page.waitForTimeout(600);
//     //select button click
//     await page.locator("(//button[text()='Click'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[text()='Collapse all'])[1]").click();
//     await page.waitForTimeout(300);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-No visual glitches or inconsistencies should appear after collapsing the task view
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('RAET-248', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //DeleteRecord
    await page.locator("(//li[text()='DeleteRecord'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-249', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //DeleteRecord
    await page.locator("(//li[text()='DeleteRecord'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-250', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //DeleteRecord
    await page.locator("(//li[text()='DeleteRecord'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-251', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //DeleteRecord
    await page.locator("(//li[text()='DeleteRecord'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-No error warning is displayed.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-252', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //DeleteRecord
    await page.locator("(//li[text()='DeleteRecord'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-No visual glitches or inconsistencies should appear after collapsing the task view
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('RAET-253', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(500);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
//     await page.waitForTimeout(1000);
//     //DeleteRecord
//     await page.locator("(//li[text()='DeleteRecord'])[1]").click();
//     await page.waitForTimeout(500);
//     //select button click
//     await page.locator("(//button[text()='Click'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[text()='Collapse all'])[1]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(1000);
//     //Three validations: Gantt visible, a taskbar visible, and tolerant screenshot match
//     await expect.soft(page.locator('.e-gantt')).toBeVisible();
//     await expect.soft(page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]")).toBeVisible();
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 300 });
// });

test('RAET-254', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    // Open dropdown -> DeleteRecord flow
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='DeleteRecord'])[1]").click();
    await page.waitForTimeout(500);
    // Click the sample action button
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(300);
    // Select an unassigned task cell and assert it is visible (avoid image diff)
    const unassigned = page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[29]");
    await unassigned.click();
    await expect(unassigned).toBeVisible();
    // Trigger the action again and assert selected cell remains visible
    await page.locator("(//button[text()='Click'])[1]").click();
    await expect(unassigned).toBeVisible();
});

// test('RAET-255', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
//     await page.waitForTimeout(800);
//     //DeleteRecord
//     await page.locator("(//li[text()='DeleteRecord'])[1]").click();
//     await page.waitForTimeout(600);
//     //select button click
//     await page.locator("(//button[text()='Click'])[1]").click();
//     await page.waitForTimeout(500);
//     //select from the unassigned task 
//     await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[29]").click();
//     await page.waitForTimeout(500);
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(500);
//     //select button click
//     await page.locator("(//button[text()='Click'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-256', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //Click the dropdown
//     await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
//     await page.waitForTimeout(800);
//     //DeleteRecord
//     await page.locator("(//li[text()='DeleteRecord'])[1]").click();
//     await page.waitForTimeout(600);
//     //select button click
//     await page.locator("(//button[text()='Click'])[1]").click();
//     await page.waitForTimeout(500);
//     //select from the unassigned task 
//     await page.locator("(//td[contains(@class,'e-chart-row-cell e-chart-row-border')])[29]").click();
//     await page.waitForTimeout(1000);
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(500);
//     //select button click
//     await page.locator("(//button[text()='Click'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[text()='Collapse all'])[1]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('RAET-257', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(800);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddWithOutResource
    await page.locator("(//li[text()='AddWithOutResource'])[1]").click();
    await page.waitForTimeout(800);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1200);
    //Click the new records
    await page.locator('(//span[text()="New Task 35"])[1]').click();
    //Screenshot validation- No errors or warnings should occur during this operation
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-258', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddWithOutResource
    await page.locator("(//li[text()='AddWithOutResource'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The system should maintain performance without any lag or visual inconsistencies.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-259', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddWithOutResource
    await page.locator("(//li[text()='AddWithOutResource'])[1]").click();
    await page.waitForTimeout(800);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(800);
    //Click the new records
    await page.locator('(//span[text()="New Task 35"])[1]').click();
    await page.waitForTimeout(800);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-The application should update visually without errors and correctly display the remaining task count in the multi taskbar
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-260', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddWithOutResource
    await page.locator("(//li[text()='AddWithOutResource'])[1]").click();
    await page.waitForTimeout(800);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(800);
    //Click the new records
    await page.locator('(//span[text()="New Task 35"])[1]').click();
    await page.waitForTimeout(1200);
    //Screenshot validation-The application should update visually without errors and correctly display the remaining task count in the multi taskbar
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-261', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddWithOutResource
    await page.locator("(//li[text()='AddWithOutResource'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The application should update visually without errors and correctly display the remaining task count in the multi taskbar
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-262', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddWithOutResource
    await page.locator("(//li[text()='AddWithOutResource'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The application should update visually without errors and correctly display the remaining task count in the multi taskbar
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUES WITH DeleteRecordCancel 263-
test('RAET-263', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //DeleteRecordCancel
    await page.locator("(//li[text()='DeleteRecordCancel'])[1]").click();;
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE
test('RAET-264', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //DeleteRecordCancel
    await page.locator("(//li[text()='DeleteRecordCancel'])[1]").click();;
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE
test('RAET-265', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //DeleteRecordCancel
    await page.locator("(//li[text()='DeleteRecordCancel'])[1]").click();;
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE
test('RAET-266', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //DeleteRecordCancel
    await page.locator("(//li[text()='DeleteRecordCancel'])[1]").click();;
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-267', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //DeleteRecord
    await page.locator("(//li[text()='DeleteRecord'])[1]").click();;
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-268', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddAssignment
    await page.locator("(//li[text()='AddAssignment'])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-268.png', { maxDiffPixels: 100 });
});

test('RAET-269', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddAssignment
    await page.locator("(//li[text()='AddAssignment'])[1]").click();;
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-269.png', { maxDiffPixels: 100 });
});

test('RAET-270', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //UpdateAssignment
    await page.locator("(//li[text()='UpdateAssignment'])[1]").click();;
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-270.png', { maxDiffPixels: 100 });
});

test('RAET-271', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[13]").click();
    await page.waitForTimeout(1000);
    //AddWithResource
    await page.locator("(//li[text()='AddWithResource'])[1]").click();;
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Click'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-271.png', { maxDiffPixels: 100 });
});

test('RAET-272', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Click the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Navigate to resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();;
    await page.waitForTimeout(500);
    //Click record to select
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-272.png', { maxDiffPixels: 100 });
});

test('RAET-273', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Double click the record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[13]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();;
    await page.waitForTimeout(500);
    //Click record to select
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-273.png', { maxDiffPixels: 100 });
});

test('RAET-274', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Double click the record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    //select button click
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-274.png', { maxDiffPixels: 100 });
});

test('RAET-275', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Double click the record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    //select button click
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-A confirmation message is displayed at the bottom of the sample saying "The deleted resource action is canceled!"
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-275.png', { maxDiffPixels: 100 });
});

test('RAET-276', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Double click the record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();;
    await page.waitForTimeout(500);
    //Click record to select
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-276.png', { maxDiffPixels: 100 });
});

test('RAET-277', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(500);
    //Double click the record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();;
    await page.waitForTimeout(500);
    //Click record to select
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-277.png', { maxDiffPixels: 100 });
});

test('RAET-278', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/resourceallocation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
    await page.waitForTimeout(1000);
    //Double click the record
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(800);
    //Navigate to resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();;
    await page.waitForTimeout(500);
    //Click record to select
    await page.locator("(//span[contains(@class,'e-frame e-icons e-check')])[1]").click();
    await page.waitForTimeout(500);
    //select Rose Fuller
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[2]").click();
    await page.waitForTimeout(500);
    //select button click
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-
    await expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot('RAET-278.png', { maxDiffPixels: 100 });
});

//UnScheduled

test('RAET-279', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UnschedulesResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/UnschedulesResource' });
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-280', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UnschedulesResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/UnschedulesResource' });
    await page.waitForTimeout(1000);
    //Enable overallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Console shows no erros 
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-281', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UnschedulesResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/UnschedulesResource' });
    await page.waitForTimeout(1000);
    //Enable overallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Console shows no erros 
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-282', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UnschedulesResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/UnschedulesResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    //Screenshot validation-Console shows no erros 
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('RAET-283', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Unscheduled
//     await page.locator("(//li[text()='UnScheduled'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(400);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(1000);
//     //Drag and drop horizontally on the same row 
//     await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.waitForTimeout(300);
//     await page.mouse.move(718, 139);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-No change occurs on the visual layout or data intergrity due to restriction
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-284', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Unscheduled
//     await page.locator("(//li[text()='UnScheduled'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(400);
//     //Drag and drop horizontally on the same row 
//     await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.waitForTimeout(300);
//     await page.mouse.move(487, 128);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-No change occurs on the visual layout or data intergrity due to restriction
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('RAET-285', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UnschedulesResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/UnschedulesResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(500);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Records are enabled and no console error is thrown
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-286', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UnschedulesResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/UnschedulesResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(500);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    //Screenshot validation-Console shows no erros 
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-287', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UnschedulesResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/UnschedulesResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(500);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    //Screenshot validation-Console shows no erros 
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-288', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UnschedulesResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/UnschedulesResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(500);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
    //Screenshot validation-Console shows no erros 
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('RAET-289', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Unscheduled
//     await page.locator("(//li[text()='UnScheduled'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(500);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[4]");
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
//     //Screenshot validation-Console shows no erros 
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-290', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Unscheduled
//     await page.locator("(//li[text()='UnScheduled'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(200);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Screenshot validation-Console shows no erros 
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//ISSUE 
// test('RAET-291', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Unscheduled
//     await page.locator("(//li[text()='UnScheduled'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(200);
//     //Expand all
//     await page.locator("(//span[text()='Expand all'])[1]").click();
//     await page.waitForTimeout(500);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Screenshot validation-Console shows no erros 
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//ISSUE 
// test('RAET-292', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Unscheduled
//     await page.locator("(//li[text()='UnScheduled'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(200);
//     //Expand all
//     await page.locator("(//span[text()='Expand all'])[1]").click();
//     await page.waitForTimeout(500);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Screenshot validation-Console shows no erros 
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('RAET-293', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/HierarchyResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/HierarchyResource' });
    await page.waitForTimeout(1000);
    //Screenshot validation-  
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-294', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/HierarchyResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/HierarchyResource' });
    await page.waitForTimeout(1000);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-  
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('RAET-295', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Screenshot validation-  
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//ISSUE MISALIGNMENT ON GRID AND CHART SIDE
// test('RAET-296', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Screenshot validation-  
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-297', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Drag and drop horizontally on the same row 
//     await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.waitForTimeout(300);
//     await page.mouse.move(487, 128);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-No change occurs on the visual layout or data intergrity due to restriction
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-298', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Drag and drop horizontally on the same row 
//     await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.waitForTimeout(300);
//     await page.mouse.move(487, 128);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-No change occurs on the visual layout or data intergrity due to restriction
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-299', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-300', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(500);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Screenshot validation-  
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-301', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(500);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Screenshot validation-  
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-302', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(500);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Screenshot validation-  
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-303', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(500);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Screenshot validation-  
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('RAET-304', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(500);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(200);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(200);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(500);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Screenshot validation-  
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('RAET-305', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/HierarchyResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/HierarchyResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(500);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(500);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-  
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('RAET-306', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(600);
//     //select Hierarchy
//     await page.locator("(//li[text()='Hierarchy'])[1]").click();
//     await page.waitForTimeout(600);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(500);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(500);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(500);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(500);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Expand all 
//     await page.locator("(//span[text()='Expand all'])[1]").click();
//     await page.waitForTimeout(200);
//     //Three validations: Gantt visible, a taskbar visible, and tolerant screenshot match
//     await expect.soft(page.locator('.e-gantt')).toBeVisible();
//     await expect.soft(page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]")).toBeVisible();
//     await page.waitForTimeout(1000);
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 300 });
// });

test('RAET-307', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Screenshot validation- No console error is shown
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('RAET-308', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-309', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Screenshot validation-  
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-310', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Screenshot validation- Parent tasks collapse, showing only the parent tasks
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-311', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-  Taskbars are not draggable to another row
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-312', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-  Taskbars are not draggable to another row
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-313', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-  Taskbars are not draggable to another row
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-314', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Taskbar drag and drop feature is enabled without issues.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-315', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-Taskbar drag and drop feature is enabled without issues.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-316', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-317', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-The dragged taskbar resources updates to reflext curremy rows resource name.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-318', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/ExpandoResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/ExpandoResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-The original resource name is removed from the dragged taskbar
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('RAET-319', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(600);
//     //select Expando
//     await page.locator("(//li[text()='Expando'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(500);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(500);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(800);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(200);
//     //Three validations: Gantt visible, a taskbar visible, and tolerant screenshot match
//     await expect.soft(page.locator('.e-gantt')).toBeVisible();
//     await expect.soft(page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]")).toBeVisible();
//     await page.waitForTimeout(1000);
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 300 });
// });

// test('RAET-320', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/resourceallocation');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//     await page.waitForTimeout(1000);
//     //select data type
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-dd')])[8]").click();
//     await page.waitForTimeout(600);
//     //select Expando
//     await page.locator("(//li[text()='Expando'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click CollapseAll
//     await page.locator("(//span[@class='e-switch-off'])[5]").click();
//     await page.waitForTimeout(500);
//     //Click Enable Multi Taskbar
//     await page.locator("(//span[@class='e-switch-off'])[4]").click();
//     await page.waitForTimeout(500);
//     //Click AllowTaskbarBarDragDrop
//     await page.locator("(//span[@class='e-switch-off'])[2]").click();
//     await page.waitForTimeout(800);
//     //Drag and drop from one row to next row
//     const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
//     const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
//     await page.waitForTimeout(200);
//     //Click EnableOverallocation
//     await page.locator("(//span[@class='e-switch-off'])[3]").click();
//     await page.waitForTimeout(200);
//     //Click Expand all
//     await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
//     await page.waitForTimeout(500);
//     //Three validations: Gantt visible, a taskbar visible, and tolerant screenshot match
//     await expect.soft(page.locator('.e-gantt')).toBeVisible();
//     await expect.soft(page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]")).toBeVisible();
//     await page.waitForTimeout(1000);
//     await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 300 });
// });

test('RAET-321', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Screenshot validation- No console error is shown
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-322', async ({ page }) => {
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-323', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Screenshot validation-  
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-324', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Screenshot validation- Parent tasks collapse, showing only the parent tasks
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-325', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-  Taskbars are not draggable to another row
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-326', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-  Taskbars are not draggable to another row
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-327', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-  Taskbars are not draggable to another row
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-328', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-Taskbar drag and drop feature is enabled without issues.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-329', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-Taskbar drag and drop feature is enabled without issues.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-330', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000)
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-331', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-The dragged taskbar resources updates to reflext curremy rows resource name.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-332', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-The original resource name is removed from the dragged taskbar
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-333', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1200);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(300);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(300);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    await page.waitForTimeout(200);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-334', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/VirtualResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/VirtualResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-335', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Screenshot validation- No console error is shown
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-336', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-337', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Screenshot validation-  
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-338', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Screenshot validation- Parent tasks collapse, showing only the parent tasks
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-339', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1200);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(500);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    await page.waitForTimeout(1000);
    //Screenshot validation-  Taskbars are not draggable to another row
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-340', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-  Taskbars are not draggable to another row
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-341', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(500);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(500);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    await page.waitForTimeout(1000);
    //Screenshot validation-  Taskbars are not draggable to another row
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-342', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Taskbar drag and drop feature is enabled without issues.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-343', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(200);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-Taskbar drag and drop feature is enabled without issues.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-344', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-345', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-The dragged taskbar resources updates to reflext curremy rows resource name.
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-346', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Screenshot validation-The original resource name is removed from the dragged taskbar
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-347', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-348', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Click AllowTaskbarBarDragDrop
    await page.locator("(//span[@class='e-switch-off'])[2]").click();
    await page.waitForTimeout(1000);
    //Drag and drop from one row to next row
    const src = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]");
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
    //Click EnableOverallocation
    await page.locator("(//span[@class='e-switch-off'])[3]").click();
    await page.waitForTimeout(200);
    //Click Expand all
    await page.locator("(//*[@class='e-toolbar-item '])[2]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('RAET-349', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Changing working days reflected properly
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('RAET-350', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/RTLResource');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/RTLResource' });
    await page.waitForTimeout(1000);
    //Click CollapseAll
    await page.locator("(//span[@class='e-switch-off'])[5]").click();
    await page.waitForTimeout(200);
    //Click Enable Multi Taskbar
    await page.locator("(//span[@class='e-switch-off'])[4]").click();
    await page.waitForTimeout(200);
    //Work Unit
    await page.locator("(//span[contains(@class,'e-input')])[21]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Changing working hours reflected properly
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});