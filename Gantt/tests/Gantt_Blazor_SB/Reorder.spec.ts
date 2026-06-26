import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
      ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
  });

test('1-Reorder initial load', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-reordering?theme=fluent');
    await page.waitForTimeout(5000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Reorder the ID column', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-reordering?theme=fluent');
    await page.waitForTimeout(4000);
    const src = page.locator("(//th[contains(@class,'e-headercell')])[1]");
    const dst = page.locator("(//th[contains(@class,'e-headercell')])[2]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if ( src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width/2, src_bound.y + src_bound.height/2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width/2, dst_bound.y + dst_bound.height/2, {steps: 30});
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Reorder the name column', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-reordering?theme=fluent');
    await page.waitForTimeout(4000);
    const src = page.locator("(//th[contains(@class,'e-headercell')])[2]");
    const dst = page.locator("(//th[contains(@class,'e-headercell')])[3]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if ( src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width/2, src_bound.y + src_bound.height/2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width/2, dst_bound.y + dst_bound.height/2, {steps: 30});
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
