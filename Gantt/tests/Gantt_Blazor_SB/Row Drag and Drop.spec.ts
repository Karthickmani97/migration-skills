import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Drag and Drop the parent records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'row-drag-and-drop?theme=fluent');
    await page.waitForTimeout(4000);
    const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[6]");
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

test('2-Drag and Drop child record to parent record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'row-drag-and-drop?theme=fluent');
    await page.waitForTimeout(10000);
    const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[6]");
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

test('3-Drag and Drop child record to child record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'row-drag-and-drop?theme=fluent');
    await page.waitForTimeout(4000);
    const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[5]");
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

test('4-Drag and Drop child record Above', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'row-drag-and-drop?theme=fluent');
    await page.waitForTimeout(4000);
    const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[5]");
    const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[2]");
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

test('5-Drag and Drop child record Below', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'row-drag-and-drop?theme=fluent');
    await page.waitForTimeout(4000);
    const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[9]");
    const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[11]");
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

test('6-Collapse the record and drag and drop', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'row-drag-and-drop?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the icon to collapse the record
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    //Drag and drop the records selected
    const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[9]");
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
    //Screenshot validation-Row dragged and dropped
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});