import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Week timeline mode - taskbar tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Week-timeline-mode');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div/div/div').click({force: true});
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Week timeline mode - bottom cell tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Week-timeline-mode');
  await page.waitForTimeout(1000);
  await page.getByLabel('Timeline cell 4/6/2022').getByText('W').click({force: true});
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Week timeline mode - top tier tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Week-timeline-mode');
  await page.waitForTimeout(1000);
  await page.getByText('Apr 03, 2022').click({force: true});
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Month timeline mode - top tier tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Month-timeline-mode');
  await page.waitForTimeout(1000);
  await page.getByText('Apr 2022').click({force: true});
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Month timeline mode - bottom tier tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Month-timeline-mode');
  await page.waitForTimeout(1000);
  await page.getByText('Apr 10, 2022').click({force: true});
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Year timeline mode - top tier timeline', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Year-timeline-mode');
  await page.waitForTimeout(1000);
  await page.getByText('2022', { exact: true }).click({force: true});
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Year timeline mode - bottom tier timeline', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Year-timeline-mode');
  await page.waitForTimeout(1000);
  await page.getByText('Apr 2022').click({force: true});
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Day timeline mode - top tier timeline', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Day-timeline-mode');
  await page.waitForTimeout(1000);
  await page.getByText('T', { exact: true }).click({force: true});
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Day timeline mode - bottom tier timeline', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Day-timeline-mode');
  await page.waitForTimeout(1000);
  await page.getByText('05').nth(1).click({force: true});
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Hour timeline mode - top tier timeline', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Hour-timeline-mode');
  await page.waitForTimeout(1000);
  await page.locator('.e-header-cell-label').first().click({force: true});
  await page.waitForTimeout(500);
  await page.mouse.down();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Hour timeline mode - bottom tier timeline', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Hour-timeline-mode');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Week start day', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Week-start-day');
  await page.waitForTimeout(1000);
  await page.getByText('W').first().click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Customize automatic timescale', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-timescale');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Top and bottom tier', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Top-tier-and-bottom-tier');
  await page.waitForTimeout(1000);
  await page.getByText('F', { exact: true }).first().click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Combining timeline cells ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Combining-timeline-cells');
  await page.waitForTimeout(1000);
  await page.getByText('Jan').first().click();
  await page.waitForTimeout(200);
  await page.getByText('Jul').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Customize header cell ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-header-timeline-cells');
  await page.waitForTimeout(1000);
  await page.getByText('Q1').click();
  await page.getByText('Q2').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Timeline cell width', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Timeline-cell-width');
  await page.waitForTimeout(1000);
  await page.getByText('S', { exact: true }).first().click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Zoom-in to view day', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Zooming-UG');
  await page.waitForTimeout(1000);
  await page.getByLabel('3 Column Header ID').locator('div').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Zoom in').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Zoom-in to view hours', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Zooming-UG');
  await page.waitForTimeout(1000);
  await page.getByLabel('Left task label Project estimation').first().click();
  await page.getByLabel('Zoom in').click();
  await page.getByLabel('Zoom in').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Zoom in').click();
  await page.getByLabel('Zoom in').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Zoom-out one time', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Zooming-UG');
  await page.waitForTimeout(1000);
  await page.getByLabel('Zoom out').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Zoom out to view days', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Zooming-UG');
  await page.waitForTimeout(1000);
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Zoom out to view month', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Zooming-UG');
  await page.waitForTimeout(1000);
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Zoom out to view quater view', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Zooming-UG');
  await page.waitForTimeout(1000);
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Zoom out to view half view', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Zooming-UG');
  await page.waitForTimeout(1000);
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Zoom-out to view year view', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Zooming-UG');
  await page.waitForTimeout(1000);
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Zoom to fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Zooming-UG');
  await page.waitForTimeout(1000);
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom out').click();
  await page.getByLabel('Zoom to fit').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});