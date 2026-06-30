import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';


//Initial load on Persistence 
test('PST-1', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Reload state in persistence
test('PST-2', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom in persistence
test('PST-3', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom in and save state
test('PST-4', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom in save state & Reload page
test('PST-5', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom in save state & Reload and Reset the page
test('PST-6', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom out persistence
test('PST-7', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom out and save state
test('PST-8', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom out save state & Reload page
test('PST-9', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom out save state & Reload and Reset the page
test('PST-10', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom to Fit persistence
test('PST-11', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom to Fit and save state
test('PST-12', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom to Fit save state & Reload page
test('PST-13', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom to Fit save state & Reload and Reset the page
test('PST-14', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom to Fit save state Zoom out Load State
test('PST-15', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PersistenceSample');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//......................................................................./Public Method......................................

//Initial load on Public method
test('PST-16', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Reload state in persistence
test('PST-17', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom in persistence
test('PST-18', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom in and save state
test('PST-19', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom in save state & Reload page
test('PST-20', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom in save state & Reload and Reset the page
test('PST-21', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom in save state Zoom out Load State
test('PST-22', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


// Click Zoom out persistence
test('PST-23', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom out and save state
test('PST-24', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom out save state & Reload page
test('PST-25', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom out save state & Reload and Reset the page
test('PST-26', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom Out save state Zoom to fit Load State
test('PST-27', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom Out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom to Fit persistence
test('PST-28', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom to Fit and save state
test('PST-29', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom to Fit save state & Reload page
test('PST-30', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom to Fit save state & Reload and Reset the page
test('PST-31', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Zoom to Fit save state Zoom In Load State
test('PST-32', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom In
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Sort ascending
test('PST-33', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(200);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click sort ascending
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Sort ascending and save state
test('PST-34', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click sort ascending
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Sort ascending  save state & Reload page
test('PST-35', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click sort ascending
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Sort ascending  save state & Reload and Reset the page
test('PST-36', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click sort ascending
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Click Sort ascending  save state Zoom to fit Load State
// test('PST-37', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//    //Click sort ascending
//     await page.locator('//th[contains(@class, "e-headercell")][2]').click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Zoom to fit
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
//     await page.waitForTimeout(800);
//     //Load state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Sort descending
test('PST-38', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Sort descending
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(5000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Sort descending and save state
test('PST-39', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Sort descending
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Sort descending  save state & Reload page
test('PST-40', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Sort descending
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Sort descending  save state & Reload and Reset the page
test('PST-41', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Sort descending
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    await page.locator('//th[contains(@class, "e-headercell")][2]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Click Sort descending save state Zoom to fit Load State
// test('PST-42', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//    //Sort descending
//     await page.locator('//th[contains(@class, "e-headercell")][2]').click();
//     await page.waitForTimeout(800);
//     await page.locator('//th[contains(@class, "e-headercell")][2]').click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Zoom to fit
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
//     await page.waitForTimeout(800);
//     //Load state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Sort ascending in column menu 
test('PST-43', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(200);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
    await page.waitForTimeout(800);
    //Click Sort Ascending
    await page.locator('(//li[text()="Sort Ascending"])[1]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Sort ascending in column menu and save state
test('PST-44', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
    await page.waitForTimeout(800);
    //Click Sort Ascending
    await page.locator('(//li[text()="Sort Ascending"])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Sort ascending in column menu save state & Reload page
test('PST-45', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
    await page.waitForTimeout(800);
    //Click Sort Ascending
    await page.locator('(//li[text()="Sort Ascending"])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Sort ascending in column menu save state & Reload and Reset the page
test('PST-46', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
    await page.waitForTimeout(800);
    //Click Sort Ascending
    await page.locator('(//li[text()="Sort Ascending"])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //Sort ascending in column menu save state Zoom to fit Load State
// test('PST-47', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Click the column menu 
//     await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
//     await page.waitForTimeout(800);
//     //Click Sort Ascending
//     await page.locator('(//li[text()="Sort Ascending"])[1]').click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Zoom to fit
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
//     await page.waitForTimeout(800);
//     //Load state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Sort Descending in column menu 
test('PST-48', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(200);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
    await page.waitForTimeout(800);
    //Click Sort Descending
    await page.locator('(//li[text()="Sort Descending"])[1]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Sort Descending in column menu and save state
test('PST-49', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
    await page.waitForTimeout(800);
    //Click Sort Descending
    await page.locator('(//li[text()="Sort Descending"])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Sort Descending in column menu save state & Reload page
test('PST-50', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
    await page.waitForTimeout(800);
    //Click Sort Descending
    await page.locator('(//li[text()="Sort Descending"])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Sort Descending in column menu save state & Reload and Reset the page
test('PST-51', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
    await page.waitForTimeout(800);
    //Click Sort Descending
    await page.locator('(//li[text()="Sort Descending"])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //Sort Descending in column menu save state Zoom to fit Load State
// test('PST-52', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Click the column menu 
//     await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
//     await page.waitForTimeout(800);
//     //Click Sort Descending
//     await page.locator('(//li[text()="Sort Descending"])[1]').click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Zoom to fit
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
//     await page.waitForTimeout(800);
//     //Load state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //Click Autofit all column in column menu 
// test('PST-53', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(200);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Click the column menu 
//     await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
//     await page.waitForTimeout(800);
//     //Click Sort Descending
//     await page.locator('(//li[text()="Sort Descending"])[1]').click();
//     await page.waitForTimeout(800);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Click Autofit all column in column menu and save state
test('PST-54', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
    await page.waitForTimeout(800);
    //Click Autofit all columns
    await page.locator('(//li[text()="Autofit all columns"])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //Click Autofit all column in column menu save state & Reload page
// test('PST-55', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Click the column menu 
//     await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
//     await page.waitForTimeout(800);
//     //Click Autofit all columns
//     await page.locator('(//li[text()="Autofit all columns"])[1]').click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Click Autofit all column in column menu save state & Reload and Reset the page
test('PST-56', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
    await page.waitForTimeout(800);
    //Click Autofit all columns
    await page.locator('(//li[text()="Autofit all columns"])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //Click Autofit all column in column menu save state Zoom to fit Load State
// test('PST-57', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Click the column menu
//     await page.locator('(//div[contains(@class, "e-columnmenu ")])[5]').click();
//     await page.waitForTimeout(800);
//     //Click Autofit all columns
//     await page.locator('(//li[text()="Autofit all columns"])[1]').click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Zoom to fit
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
//     await page.waitForTimeout(800);
//     //Load state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //Click Autofit this column in column menu 
// test('PST-58', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(200);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Click the column menu 
//     await page.locator('(//div[contains(@class, "e-columnmenu ")])[2]').click();
//     await page.waitForTimeout(800);
//     //Click Autofit this column
//     await page.locator('(//li[text()="Autofit this column"])[1]').click();
//     await page.waitForTimeout(800);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Click Autofit this column in column menu and save state
test('PST-59', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[2]').click();
    await page.waitForTimeout(800);
    //Click Autofit this column
    await page.locator('(//li[text()="Autofit this column"])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //Click Autofit this column in column menu save state & Reload page
// test('PST-60', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//      //Click the column menu 
//     await page.locator('(//div[contains(@class, "e-columnmenu ")])[2]').click();
//     await page.waitForTimeout(800);
//     //Click Autofit this column
//     await page.locator('(//li[text()="Autofit this column"])[1]').click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Click Autofit this column in column menu save state & Reload and Reset the page
test('PST-61', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the column menu 
    await page.locator('(//div[contains(@class, "e-columnmenu ")])[2]').click();
    await page.waitForTimeout(800);
    //Click Autofit this column
    await page.locator('(//li[text()="Autofit this column"])[1]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //Click Autofit this column in column menu save state Zoom to fit Load State
// test('PST-62', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Click the column menu 
//     await page.locator('(//div[contains(@class, "e-columnmenu ")])[2]').click();
//     await page.waitForTimeout(800);
//     //Click Autofit this column
//     await page.locator('(//li[text()="Autofit this column"])[1]').click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Zoom to fit
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
//     await page.waitForTimeout(800);
//     //Load state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Columns disable 
test('PST-63', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the taskname columnmenu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
    await page.waitForTimeout(800);
    //Columns
    await page.locator('(//li[contains(@class, "e-menu-item")])[5]').hover();
    await page.waitForTimeout(800);
    //Name
    await page.locator('(//li[contains(@class, "e-menu-item")])[8]').click();
    await page.waitForTimeout(800);
    //Start date
    await page.locator('(//li[contains(@class, "e-menu-item")])[9]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class, "e-spacer ")])[1]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Columns disablet and save state
test('PST-64', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the taskname columnmenu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
    await page.waitForTimeout(800);
    //Columns
    await page.locator('(//li[contains(@class, "e-menu-item")])[5]').hover();
    await page.waitForTimeout(800);
    //Name
    await page.locator('(//li[contains(@class, "e-menu-item")])[8]').click();
    await page.waitForTimeout(800);
    //Start date
    await page.locator('(//li[contains(@class, "e-menu-item")])[9]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class, "e-spacer ")])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Columns disable save state & Reload page
test('PST-65', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the taskname columnmenu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
    await page.waitForTimeout(800);
    //Columns
    await page.locator('(//li[contains(@class, "e-menu-item")])[5]').hover();
    await page.waitForTimeout(800);
    //Name
    await page.locator('(//li[contains(@class, "e-menu-item")])[8]').click();
    await page.waitForTimeout(800);
    //Start date
    await page.locator('(//li[contains(@class, "e-menu-item")])[9]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class, "e-spacer ")])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Columns disable save state & Reload and Reset the page
// test('PST-66', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Click the taskname columnmenu
//     await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
//     await page.waitForTimeout(800);
//     //Columns
//     await page.locator('(//li[contains(@class, "e-menu-item")])[5]').hover();
//     await page.waitForTimeout(800);
//     //Name
//     await page.locator('(//li[contains(@class, "e-menu-item")])[8]').click();
//     await page.waitForTimeout(800);
//     //Start date
//     await page.locator('(//li[contains(@class, "e-menu-item")])[9]').click();
//     await page.waitForTimeout(800);
//     await page.locator('(//div[contains(@class, "e-spacer ")])[1]').click();
//     await page.waitForTimeout(1000);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(1000);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     //Reset state
//     await page.locator('#ClearPersistence').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// Columns disable save state Zoom to fit Load State
test('PST-67', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the taskname columnmenu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
    await page.waitForTimeout(800);
    //Columns
    await page.locator('(//li[contains(@class, "e-menu-item")])[5]').hover();
    await page.waitForTimeout(800);
    //Name
    await page.locator('(//li[contains(@class, "e-menu-item")])[8]').click();
    await page.waitForTimeout(800);
    //Start date
    await page.locator('(//li[contains(@class, "e-menu-item")])[9]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class, "e-spacer ")])[1]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Filter the Task name
test('PST-68', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the taskname columnmenu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
    await page.waitForTimeout(800);
    //Click Filter 
    await page.locator('(//li[contains(@class, "e-menu-item")])[6]').hover();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[4]').fill('Concept approval');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Filter and save state
test('PST-69', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the taskname columnmenu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
    await page.waitForTimeout(800);
    //Click Filter 
    await page.locator('(//li[contains(@class, "e-menu-item")])[6]').hover();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[4]').fill('Concept approval');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Filter save state & Reload page
test('PST-70', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the taskname columnmenu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
    await page.waitForTimeout(800);
    //Click Filter 
    await page.locator('(//li[contains(@class, "e-menu-item")])[6]').hover();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[4]').fill('Concept approval');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Filter save state & Reload and Reset the page
// test('PST-71', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Click the taskname columnmenu
//     await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
//     await page.waitForTimeout(800);
//     //Click Filter 
//     await page.locator('(//li[contains(@class, "e-menu-item")])[6]').hover();
//     await page.waitForTimeout(800);
//     //Fill the Enter the value
//     await page.locator('(//input[contains(@class, "control")])[4]').fill('Concept approval');
//     await page.waitForTimeout(500);
//     //Click the Filter
//     await page.locator("(//button[text()='Filter'])[1]").click();
//     await page.waitForTimeout(2000);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(1000);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// Filter save state Zoom to fit Load State
test('PST-72', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click the taskname columnmenu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
    await page.waitForTimeout(800);
    //Click Filter 
    await page.locator('(//li[contains(@class, "e-menu-item")])[6]').hover();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[4]').fill('Concept approval');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Search using toolbar
test('PST-73', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[2]').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Search using toolbar and save state
test('PST-74', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[2]').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Search using toolbar save state & Reload page
test('PST-75', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[2]').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Search using toolbar save state & Reload and Reset the page
// test('PST-76', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Fill the Enter the value
//     await page.locator('(//input[contains(@class, "control")])[2]').fill('Concept approval');
//     await page.waitForTimeout(500);
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(500);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(1000);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// Search using toolbar save state Zoom to fit Load State
test('PST-77', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[2]').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Zoom-in after zoom-to-fit
test('PST-78', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset 
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Zoom fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Reload
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //Move the child task and Click the Reset 
// test('PST-79', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(2000);
//     //select the child record on the chart side of the component
//     await page.locator('(//div[contains(@class,"child")])[2]').click();
//     await page.waitForTimeout(500);
//     //mouse move
//     await page.mouse.move(914, 85);
//     await page.waitForTimeout(500);
//     //Click the Reset buttton
//     await page.locator('(//span[contains(@class,"resetstate")])').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Reorder the name column and Click Relode
test('PST-80', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(2000);
    //Reset 
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    const src = page.locator("(//th[contains(@class,'e-headercell')])[2]");
    const dst = page.locator("(//th[contains(@class,'e-headercell')])[1]");
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

// //Reorder the name column
// test('PST-81', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(2000);
//     //Reset 
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     const src = page.locator("(//th[contains(@class,'e-headercell')])[2]");
//     const dst = page.locator("(//th[contains(@class,'e-headercell')])[1]");
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
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

// });

//Reorder the name column and Click save state
test('PST-82', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(2000);
    //Reset 
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    const src = page.locator("(//th[contains(@class,'e-headercell')])[2]");
    const dst = page.locator("(//th[contains(@class,'e-headercell')])[1]");
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
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Reorder the name column save state & Reload page
// test('PST-83', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     const src = page.locator("(//th[contains(@class,'e-headercell')])[2]");
//     const dst = page.locator("(//th[contains(@class,'e-headercell')])[1]");
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
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// // Reorder the name column save state & Reload and Reset the page
// test('PST-84', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     const src = page.locator("(//th[contains(@class,'e-headercell')])[2]");
//     const dst = page.locator("(//th[contains(@class,'e-headercell')])[1]");
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
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(1000);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// // Reorder the name column save state Zoom to fit Load State
// test('PST-85', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     const src = page.locator("(//th[contains(@class,'e-headercell')])[2]");
//     const dst = page.locator("(//th[contains(@class,'e-headercell')])[1]");
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
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Zoom to fit
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
//     await page.waitForTimeout(800);
//     //Load state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// Resize the Task Name Header and Reload
test('PST-86', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click and hold the resize handle of the Task Name column
    await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[2]").click();
    await page.mouse.down();
    // Move the mouse to resize the column
    await page.mouse.move(478, 187);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Resize the Task Name Header and Reload
test('PST-87', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click and hold the resize handle of the Task Name column
    await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[2]").click();
    await page.mouse.down();
    // Move the mouse to resize the column
    await page.mouse.move(478, 187);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Resize the Task Name Header in and save state
test('PST-88', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click and hold the resize handle of the Task Name column
    await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[2]").click();
    await page.mouse.down();
    // Move the mouse to resize the column
    await page.mouse.move(478, 187);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Resize the Task Name Header in save state & Reload page
test('PST-89', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click and hold the resize handle of the Task Name column
    await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[2]").click();
    await page.mouse.down();
    // Move the mouse to resize the column
    await page.mouse.move(478, 187);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Resize the Task Name Header save state & Reload and Reset the page
// test('PST-90', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//    await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     // Click and hold the resize handle of the Task Name column
//     await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[2]").click();
//     await page.mouse.down();
//     // Move the mouse to resize the column
//     await page.mouse.move(478, 187);
//     await page.waitForTimeout(1000);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(800);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Resize the Task Name Header in save state & Zoom to fit and Load state
test('PST-91', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click and hold the resize handle of the Task Name column
    await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[2]").click();
    await page.mouse.down();
    // Move the mouse to resize the column
    await page.mouse.move(478, 187);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// SetTreeColumnIndex 
test('PST-92', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click SetTreeColumnIndex 
    await page.locator("(//button[text()='SetTreeColumnIndex'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // SetTreeColumnIndex and Reload
// test('PST-93', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(5000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     // Click SetTreeColumnIndex 
//     await page.locator("(//button[text()='SetTreeColumnIndex'])").click();
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//SetTreeColumnIndex in and save state
test('PST-94', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click SetTreeColumnIndex 
    await page.locator("(//button[text()='SetTreeColumnIndex'])").click();
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // SetTreeColumnIndex in save state & Reload page
// test('PST-95', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     // Click SetTreeColumnIndex 
//     await page.locator("(//button[text()='SetTreeColumnIndex'])").click();
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //SetTreeColumnIndex save state & Reload and Reset the page
// test('PST-96', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     // Click SetTreeColumnIndex 
//     await page.locator("(//button[text()='SetTreeColumnIndex'])").click();
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(800);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Resize the Task Name Header in save state & Zoom to fit and Lode the page
test('PST-97', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click SetTreeColumnIndex 
    await page.locator("(//button[text()='SetTreeColumnIndex'])").click();
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Sort Column 
test('PST-98', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click Sort Column
    await page.locator("(//button[text()='Sort Column'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Sort Column and Reload
// test('PST-99', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(5000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     // Click Sort Column
//     await page.locator("(//button[text()='Sort Column'])").click();
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Sort Column in and save state
test('PST-100', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click Sort Column
    await page.locator("(//button[text()='Sort Column'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Sort Column in save state & Reload page
// test('PST-101', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     // Click Sort Column
//     await page.locator("(//button[text()='Sort Column'])").click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Sort Column save state & Reload and Reset the page
test('PST-102', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click Sort Column
    await page.locator("(//button[text()='Sort Column'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //Sort Column in save state & Zoom to fit and Lode the page
// test('PST-103', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//    // Click Sort Column
//     await page.locator("(//button[text()='Sort Column'])").click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Zoom to fit
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
//     await page.waitForTimeout(800);
//     //Load state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Clear Column 
test('PST-104', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click Sort Column
    await page.locator("(//button[text()='Sort Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Column 
    await page.locator("(//button[text()='Clear Column'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Clear Column and Reload
test('PST-105', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(5000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click Sort Column
    await page.locator("(//button[text()='Sort Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Column 
    await page.locator("(//button[text()='Clear Column'])").click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Clear Column in and save state
test('PST-106', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click Sort Column
    await page.locator("(//button[text()='Sort Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Column 
    await page.locator("(//button[text()='Clear Column'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Clear Column in save state & Reload page
test('PST-107', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click Sort Column
    await page.locator("(//button[text()='Sort Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Column 
    await page.locator("(//button[text()='Clear Column'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Clear Column save state and Reset the page
test('PST-108', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click Sort Column
    await page.locator("(//button[text()='Sort Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Column 
    await page.locator("(//button[text()='Clear Column'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Clear Column in save state & Zoom to fit and Lode the page
test('PST-109', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    // Click Sort Column
    await page.locator("(//button[text()='Sort Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Column 
    await page.locator("(//button[text()='Clear Column'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Filter Column 
test('PST-110', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Filter Column and Reload
test('PST-111', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Filter Column and save state
test('PST-112', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Filter Column save state & Reload page
test('PST-113', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Filter Column state & Reload and Reset the page
// test('PST-114', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Click Filter Column
//     await page.locator("(//button[text()='Filter Column'])").click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(1000);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// Filter Column save state Zoom to fit Load State
test('PST-115', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//Filter Column and Click clear filter
test('PST-116', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Filter
    await page.locator("(//button[text()='Clear Filter'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Filter Column Click clear filter and Reload
test('PST-117', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Filter
    await page.locator("(//button[text()='Clear Filter'])").click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Filter Column Click clear filter and save state
test('PST-118', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Filter
    await page.locator("(//button[text()='Clear Filter'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Filter Column Click clear filter save state & Reload page
test('PST-119', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Filter
    await page.locator("(//button[text()='Clear Filter'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Filter Column Click clear filter state & Reload and Reset the page
test('PST-120', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Filter
    await page.locator("(//button[text()='Clear Filter'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(1000);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Filter Column Click clear filter save state Zoom to fit Load State
test('PST-121', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Filter Column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(800);
    //Click Clear Filter
    await page.locator("(//button[text()='Clear Filter'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Hide Columns
test('PST-122', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Hide Columns and Reload
test('PST-123', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Hide Columns and save state
test('PST-124', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Hide Columns save state & Reload page
test('PST-125', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Hide Columns state & Reload and Reset the page
test('PST-126', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(1000);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Hide Columns save state Zoom to fit Load State
test('PST-127', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//Hide Columns Show Columns
test('PST-128', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Show Columns
    await page.locator("(//button[text()='Show Columns'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Hide Columns Show Columns and Reload
test('PST-129', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Show Columns
    await page.locator("(//button[text()='Show Columns'])").click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Hide Columns Show Columns and save state
test('PST-130', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Show Columns
    await page.locator("(//button[text()='Show Columns'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Hide Columns Show Columns save state & Reload page
test('PST-131', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Show Columns
    await page.locator("(//button[text()='Show Columns'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Hide Columns Show Columns Save state & Reload and Reset the page
test('PST-132', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Show Columns
    await page.locator("(//button[text()='Show Columns'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(1000);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Hide Columns Show Columns save state Zoom to fit Load State
test('PST-133', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Hide Columns
    await page.locator("(//button[text()='Hide Columns'])").click();
    await page.waitForTimeout(800);
    //Show Columns
    await page.locator("(//button[text()='Show Columns'])").click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Load State
test('PST-134', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Click  the ID header
    await page.locator("(//th[contains(@class,'headercell')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save state button on the toolbar
    await page.locator("(//span[text()='Save state'])").click();
    await page.waitForTimeout(500);
    //Click the ID 
    await page.locator("(//th[contains(@class,'headercell')])[1]").click();
    await page.waitForTimeout(500);
    //Load state clicked
    await page.locator("(//span[text()='Load state'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Load state is working properly 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Load State
test('PST-135', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Click  the ID header
    await page.locator("(//th[contains(@class,'headercell')])[1]").click();
    await page.waitForTimeout(500);
    //Click the save state button on the toolbar
    await page.locator("(//span[text()='Save state'])").click();
    await page.waitForTimeout(500);
    //Click the Progress
    await page.locator("(//th[contains(@class,'headercell')])[6]").click();
    await page.waitForTimeout(500);
    //Load state clicked
    await page.locator("(//span[text()='Load state'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Load state is working properly 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Multi sort
test('PST-136', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Sort ascend 1st column
    await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
    await page.waitForTimeout(500);
    //Sort ascend 2nd column
    await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
    await page.waitForTimeout(500);
    //Sort ascend 3rd column
    await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    await page.waitForTimeout(2000);
    //Screenshot validation-Multisorting is not maintained on the columns
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Multi sort and Reload
test('PST-137', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Sort ascend 1st column
    await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
    await page.waitForTimeout(500);
    //Sort ascend 2nd column
    await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
    await page.waitForTimeout(500);
    //Sort ascend 3rd column
    await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Multi sort and save state
test('PST-138', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Sort ascend 1st column
    await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
    await page.waitForTimeout(500);
    //Sort ascend 2nd column
    await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
    await page.waitForTimeout(500);
    //Sort ascend 3rd column
    await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Multi sort save state & Reload page
test('PST-139', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Sort ascend 1st column
    await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
    await page.waitForTimeout(500);
    //Sort ascend 2nd column
    await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
    await page.waitForTimeout(500);
    //Sort ascend 3rd column
    await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Multi sort Save state & Reload and Reset the page
test('PST-140', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Sort ascend 1st column
    await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
    await page.waitForTimeout(500);
    //Sort ascend 2nd column
    await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
    await page.waitForTimeout(500);
    //Sort ascend 3rd column
    await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(1000);
    //Reload page
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(2000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Multi sort save state Zoom to fit Load State
test('PST-141', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Sort ascend 1st column
    await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
    await page.waitForTimeout(500);
    //Sort ascend 2nd column
    await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
    await page.waitForTimeout(500);
    //Sort ascend 3rd column
    await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Multi sort  Zoom to fit save state  Reset state
test('PST-142', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Sort ascend 1st column
    await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
    await page.waitForTimeout(500);
    //Sort ascend 2nd column
    await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
    await page.waitForTimeout(500);
    //Sort ascend 3rd column
    await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // Multi sort  Zoom to fit save state Reset Load State
// test('PST-143', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Press the keyboard Control button down
//     await page.keyboard.down("Control");
//     await page.waitForTimeout(500);
//     //Sort ascend 1st column
//     await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
//     await page.waitForTimeout(500);
//     //Sort ascend 2nd column
//     await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
//     await page.waitForTimeout(500);
//     //Sort ascend 3rd column
//     await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
//     await page.waitForTimeout(500);
//     //Press the keyboard Control button down
//     await page.keyboard.up("Control");
//      await page.waitForTimeout(1000);
//     //Zoom to fit
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
//     await page.waitForTimeout(800);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Load State
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Search using method
test('PST-144', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[1]').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.locator('(//button[contains(@class, "e-control")])[1]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //Search using method and reload
// test('PST-145', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Fill the Enter the value
//     await page.locator('(//input[contains(@class, "control")])[1]').fill('Concept approval');
//     await page.waitForTimeout(500);
//     await page.locator('(//button[contains(@class, "e-control")])[1]').click();
//     await page.waitForTimeout(500);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

///Search using method and save state
test('PST-146', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[1]').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.locator('(//button[contains(@class, "e-control")])[1]').click();
    await page.waitForTimeout(500);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// // /Search using method save state & Reload page
// test('PST-147', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Fill the Enter the value
//     await page.locator('(//input[contains(@class, "control")])[1]').fill('Concept approval');
//     await page.waitForTimeout(500);
//     await page.locator('(//button[contains(@class, "e-control")])[1]').click();
//     await page.waitForTimeout(500);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(800);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //Search using method save state & Reload and Reset the page
// test('PST-148', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/PublicMethod');
//     await page.waitForTimeout(1000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(800);
//     //Fill the Enter the value
//     await page.locator('(//input[contains(@class, "control")])[1]').fill('Concept approval');
//     await page.waitForTimeout(500);
//     await page.locator('(//button[contains(@class, "e-control")])[1]').click();
//     await page.waitForTimeout(500);
//     //Save state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//     await page.waitForTimeout(1000);
//     //Reload page
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//     await page.waitForTimeout(2000);
//     //Reset state
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Search using method save state Zoom to fit Load State
test('PST-149', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[1]').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.locator('(//button[contains(@class, "e-control")])[1]').click();
    await page.waitForTimeout(500);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Search using method and clear save state Zoom to fit Load State
test('PST-150', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/PublicMethod');
    await page.waitForTimeout(1000);
    //Reset state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Fill the Enter the value
    await page.locator('(//input[contains(@class, "control")])[1]').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.locator('(//button[contains(@class, "e-control")])[1]').click();
    await page.waitForTimeout(500);
    //Click Clear Search
    await page.locator('(//button[text()="Clear Search"])').click();
    await page.waitForTimeout(500);
    //Save state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(800);
    //Zoom to fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(800);
    //Load state
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});