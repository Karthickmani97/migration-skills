import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('UET-1', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Add a new task via toolbar
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-2', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Add a new task via toolbar
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-3', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Add a new task via toolbar
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(800);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-4', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Add a new task via insert key
    await page.getByRole('gridcell', { name: '1', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '1', exact: true }).press('Insert');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-5', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Add a new task via insert key
    await page.getByRole('gridcell', { name: '1', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '1', exact: true }).press('Insert');
    await page.waitForTimeout(300);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-6', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Add a new task via insert key
    await page.getByRole('gridcell', { name: '1', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '1', exact: true }).press('Insert');
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-7', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Select the AddRecord from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'AddRecord' }).click();
    await page.waitForTimeout(800);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-8', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Select the AddRecord from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'AddRecord' }).click();
    await page.waitForTimeout(800);
    //Select record
    await page.locator('(//span[text()="Site Analyze"])[1]').click();
    await page.waitForTimeout(800);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    await page.waitForTimeout(1000);
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
});

// test('UET-9', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Select the AddRecord from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(1000);
//     await page.getByRole('option', { name: 'AddRecord' }).click();
//     await page.waitForTimeout(1000);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     await expect(page.locator('#Gantt_redo')).toBeEnabled();
//     await page.waitForTimeout(1000);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     await expect(page.locator('#Gantt_undo')).toBeEnabled();
// });

test('UET-10', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Select the DeleteRecord from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'DeleteRecord' }).click();
    await page.waitForTimeout(1200);
    // Perform Undo via public method
    await page.locator('(//button[text()="Undo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    // Perform Redo via public method
    await page.waitForTimeout(1000);
    await page.locator('(//button[text()="Redo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
});

test('UET-11', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Select the DeleteRecord from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'DeleteRecord' }).click();
    await page.waitForTimeout(800);
    //Click the any record to perform keyboard action
    await page.locator('(//span[text()="Soil test approval"])[1]').click();
    await page.waitForTimeout(600);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1200);
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    // Redo using Ctrl + y
    await page.waitForTimeout(800);
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1200);
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
});

// test('UET-12', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Select the DeleteRecord from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(1000);
//     await page.getByRole('option', { name: 'DeleteRecord' }).click();
//     await page.waitForTimeout(1000);
//     // Perform Undo via toolbar
//     await page.locator('(//span[text()="Undo"])').click();
//     await page.waitForTimeout(1200);
//     //Screenshot validation
//     await expect(page.locator('#Gantt_redo')).toBeEnabled();
//     // Perform Undo via toolbar
//     await page.waitForTimeout(1000);
//     await page.locator('(//span[text()="Redo"])').click();
//     await page.waitForTimeout(1200);
//     //Screenshot validation
//     await expect(page.locator('#Gantt_undo')).toBeEnabled();
// });

test('UET-13', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Press the Delete key
    await page.locator('(//td[text()="3"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[text()="3"])').press('Delete');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('(//span[text()="Undo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Redo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
});

test('UET-14', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Press the Delete key.
    await page.locator('(//td[text()="3"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[text()="3"])').press('Delete');
    await page.waitForTimeout(300);
    //Perform Undo via Undo button
    await page.locator('(//button[text()="Undo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    // Perform Redo via Redo button
    await page.waitForTimeout(800);
    await page.locator('(//button[text()="Redo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
});

test('UET-15', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Press the Delete key
    await page.locator('(//td[text()="3"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[text()="3"])').press('Delete');
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    // Redo using Ctrl + y
    await page.waitForTimeout(300);
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
});

// test('UET-16', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Delete a task via Toolbar Delete
//     await page.locator('(//td[text()="3"])').click();
//     await page.waitForTimeout(500);
//     await page.locator('#Gantt_delete').click();
//     await page.waitForTimeout(1000);
//     // Perform Undo via toolbar
//     await page.locator('(//span[text()="Undo"])').click();
//     await page.waitForTimeout(1200);
//     //Screenshot validation
//     await expect(page.locator('#Gantt_redo')).toBeEnabled();
//     // Perform Redo via toolbar
//     await page.waitForTimeout(1000);
//     await page.locator('(//span[text()="Redo"])').click();
//     await page.waitForTimeout(1200);
//     //Screenshot validation
//     await expect(page.locator('#Gantt_undo')).toBeEnabled();
// });

test('UET-17', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Delete a task via Toolbar Delete
    await page.locator('(//td[text()="3"])').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    //Perform Undo via Undo button
    await page.locator('(//button[text()="Undo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    // Perform Redo via Redo button
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Redo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
});

test('UET-18', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Delete a task via Toolbar Delete
    await page.locator('(//td[text()="3"])').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(500);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1200);
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    // Redo using Ctrl + y
    await page.waitForTimeout(800);
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1200);
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
});

test('UET-19', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Press the Delete key
    await page.locator('(//td[text()="1"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[text()="1"])').press('Delete');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('(//span[text()="Undo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Redo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-20', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Press the Delete key
    await page.locator('(//td[text()="1"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[text()="1"])').press('Delete');
    await page.waitForTimeout(300);
    //Perform Undo via Undo button
    await page.locator('(//button[text()="Undo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via Redo button
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Redo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-21', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Press the Delete key
    await page.locator('(//td[text()="1"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[text()="1"])').press('Delete');
    await page.waitForTimeout(800);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.waitForTimeout(800);
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-22', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Delete a task via Toolbar Delete
//     await page.getByRole('gridcell', { name: '1', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-23', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Delete a task via Toolbar Delete
//     await page.getByRole('gridcell', { name: '1', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.waitForTimeout(300);
//     //Perform Undo via Undo button
//     await page.getByRole('button', { name: 'Undo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via Redo button
//     await page.getByRole('button', { name: 'Redo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-24', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Delete a task via Toolbar Delete
//     await page.getByRole('gridcell', { name: '1', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.waitForTimeout(300);
//     // Undo using Ctrl + Z
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyZ');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Redo using Ctrl + y
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyY');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-25', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.locator('(//td[text()="3"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[text()="3"])').click({
        button: 'right'
    });
    // Select Above from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Above' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('(//span[text()="Undo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Redo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-26', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.locator('(//td[text()="3"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[text()="3"])').click({
        button: 'right'
    });
    // Select Below from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Below' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-27', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.getByRole('gridcell', { name: '3', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '3', exact: true }).click({
        button: 'right'
    });
    // Select Child from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Child' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-28', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.getByRole('gridcell', { name: '3', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '3', exact: true }).click({
        button: 'right'
    });
    // Select Milestone from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Milestone' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-29', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.getByRole('gridcell', { name: '3', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '3', exact: true }).click({
        button: 'right'
    });
    // Select Above from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Above' }).click();
    await page.waitForTimeout(500);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-30', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.getByRole('gridcell', { name: '3', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '3', exact: true }).click({
        button: 'right'
    });
    // Select Below from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Below' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-31', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.getByRole('gridcell', { name: '3', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '3', exact: true }).click({
        button: 'right'
    });
    // Select Child from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Child' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-32', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.getByRole('gridcell', { name: '3', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '3', exact: true }).click({
        button: 'right'
    });
    // Select Milestone from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Milestone' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-33', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.getByRole('gridcell', { name: '3', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '3', exact: true }).click({
        button: 'right'
    });
    // Select Below from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Below' }).click();
    await page.waitForTimeout(300);
    //Perform Undo via Undo button
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via Redo button
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-34', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.getByRole('gridcell', { name: '3', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '3', exact: true }).click({
        button: 'right'
    });
    // Select Child from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Child' }).click();
    await page.waitForTimeout(300);
    //Perform Undo via Undo button
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via Redo button
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-35', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.getByRole('gridcell', { name: '3', exact: true }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: '3', exact: true }).click({
        button: 'right'
    });
    // Select Milestone from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Milestone' }).click();
    await page.waitForTimeout(300);
    //Perform Undo via Undo button
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via Redo button
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });;
});


// test('UET-36', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Right-click on the 3rd record
//     await page.getByRole('gridcell', { name: '3', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('gridcell', { name: '3', exact: true }).click({
//         button: 'right'
//     });
//     // Select Delete from the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Task' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-37', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Right-click on the 3rd record
//     await page.getByRole('gridcell', { name: '3', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('gridcell', { name: '3', exact: true }).click({
//         button: 'right'
//     });
//     // Select Delete from the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Task' }).click();
//     await page.waitForTimeout(300);
//     // Undo using Ctrl + Z
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyZ');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Redo using Ctrl + y
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyY');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-38', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Right-click on the 3rd record
//     await page.getByRole('gridcell', { name: '3', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('gridcell', { name: '3', exact: true }).click({
//         button: 'right'
//     });
//     // Select Delete from the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Task' }).click();
//     await page.waitForTimeout(300);
//     //Perform Undo via Undo button
//     await page.getByRole('button', { name: 'Undo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via Redo button
//     await page.getByRole('button', { name: 'Redo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-39', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Right-click on the 2rd record
//     await page.getByRole('gridcell', { name: '2', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('gridcell', { name: '2', exact: true }).click({
//         button: 'right'
//     });
//     // Select Delete from the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Task' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-40', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Right-click on the 2rd record
//     await page.getByRole('gridcell', { name: '2', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('gridcell', { name: '2', exact: true }).click({
//         button: 'right'
//     });
//     // Select Delete from the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Task' }).click();
//     await page.waitForTimeout(300);
//     // Undo using Ctrl + Z
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyZ');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Redo using Ctrl + y
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyY');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-41', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Right-click on the 3rd record
//     await page.getByRole('gridcell', { name: '3', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('gridcell', { name: '3', exact: true }).click({
//         button: 'right'
//     });
//     // Select Delete from the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Task' }).click();
//     await page.waitForTimeout(300);
//     //Perform Undo via Undo button
//     await page.getByRole('button', { name: 'Undo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via Redo button
//     await page.getByRole('button', { name: 'Redo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-42', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Right-click on the 4rd record
//     await page.getByRole('gridcell', { name: '4', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('gridcell', { name: '4', exact: true }).click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select "Delete Dependency" from the context menu
//     await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: '- Identify Site location' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-43', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     // Right - click on the 4rd record
//     await page.getByRole('gridcell', { name: '4', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('gridcell', { name: '4', exact: true }).click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select "Delete Dependency" from the context menu
//     await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: '- Identify Site location' }).click();
//     await page.waitForTimeout(300);
//     // Undo using Ctrl + Z
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyZ');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Redo using Ctrl + y
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyY');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-44', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Right-click on the 4rd record
//     await page.getByRole('gridcell', { name: '4', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('gridcell', { name: '4', exact: true }).click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select "Delete Dependency" from the context menu
//     await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: '- Identify Site location' }).click();
//     await page.waitForTimeout(300);
//     //Perform Undo via Undo button
//     await page.getByRole('button', { name: 'Undo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via Redo button
//     await page.getByRole('button', { name: 'Redo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-45', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Change the task name in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[3]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___TaskName').fill('Updated Job');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-46', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Change the Start date in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[16]').dblclick();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).fill('4/4/2022');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-47', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Enable Baseline
    await page.getByRole('button', { name: 'Enable Baseline' }).click();
    //Change the Baseline end date in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[20]').dblclick();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).fill('3/30/2022');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-48', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Change the Duration in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[14]').dblclick();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: 'days' }).getByLabel('textbox').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: 'days' }).getByLabel('textbox').fill('5 days');
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: 'days' }).getByLabel('textbox').press('Enter');
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-49', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Change the dependency  in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[15]').dblclick();
    await page.waitForTimeout(300);
    await page.getByRole('row', { name: ' 3 Site Analyze Column' }).getByLabel('textbox').fill('2ss');
    await page.waitForTimeout(300);
    await page.getByRole('row', { name: '3 Site Analyze Column' }).getByLabel('textbox').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('UET-50', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Change the work in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[16]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Work').fill('20');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Work').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-51', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Change the Tasktype in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[17]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-control-container e-control-wrapper e-valid-input")])').click();
    await page.getByRole('option', { name: 'FixedUnit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('row', { name: '3 Site Analyze Column' }).getByRole('combobox').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-52', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Enable Baseline
    await page.getByRole('button', { name: 'Enable Baseline' }).click();
    //Change the Baseline Start date in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[19]').dblclick();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).fill('3/30/2022');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-53', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Enable Baseline
    await page.getByRole('button', { name: 'Enable Baseline' }).click();
    //Change the Baseline end date in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[20]').dblclick();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).fill('3/30/2022');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'datepicker' }).press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('UET-54', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Change the Note in cell by pressing Enter,
    await page.locator('(//span[contains(@class,"e-icons e-notes-info")])[3]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Notes').fill('New Notes Added');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Notes').press('Enter');
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class,"e-icons e-notes-info")])[3]').hover();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class,"e-icons e-notes-info")])[3]').hover();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class,"e-icons e-notes-info")])[3]').hover();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

});

test('UET-55', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Change the Progress in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[18]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Progress').fill('80');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Progress').press('Enter');
    await page.waitForTimeout(300);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-56', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Change the Resource in cell by pressing Enter,
//     await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[13]').dblclick();
//     await page.waitForTimeout(300);
//     await page.getByText('Martin Tamer', { exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.locator('.e-frame').first().click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Rose Fuller' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Update', exact: true }).click();
//     await page.waitForTimeout(1000);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     await expect(page.locator('#Gantt_redo')).toBeEnabled();
//     await page.waitForTimeout(800);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     await expect(page.locator('#Gantt_undo')).toBeEnabled();
// });
test('UET-57', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    // Change the Task Name value
    await page.getByRole('textbox', { name: 'Job Name' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Job Name' }).press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Job Name' }).fill('Job Name Updated');
    await page.waitForTimeout(300);
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-58', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    // Change the Start Date value
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('4/4/2022');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-59', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    // Change the End Date value
    await page.getByRole('combobox', { name: 'End Date' }).click();
    await page.getByRole('combobox', { name: 'End Date' }).press('ControlOrMeta+a');
    await page.getByRole('combobox', { name: 'End Date' }).fill('4/21/2022');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(200);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-60', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    // Change the duration value
    await page.getByRole('textbox', { name: 'Duration' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).fill('22 days');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-61', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    // Change the Progress value
    await page.getByRole('spinbutton', { name: 'Progress' }).click();
    await page.getByRole('spinbutton', { name: 'Progress' }).fill('90');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(200);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-62', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    // Change the work value
    await page.getByRole('spinbutton', { name: 'Work' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Work' }).fill('99');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(200);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-63', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    // Change the TaskType value
    await page.getByRole('combobox').filter({ hasText: 'TaskType' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'FixedUnit' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(200);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-64', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Enable Baseline
//     await page.getByRole('button', { name: 'Enable Baseline' }).click();
//     // Select the 4th record
//     await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
//     await page.waitForTimeout(300);
//     // Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     // Change the BaselineStartDate value
//     await page.getByRole('combobox', { name: 'BaselineStartDate' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('combobox', { name: 'BaselineStartDate' }).press('ControlOrMeta+a');
//     await page.waitForTimeout(300);
//     await page.getByRole('combobox', { name: 'BaselineStartDate' }).fill('3/31/2022');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Save the record by clicking Save
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(200);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-65', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Enable Baseline
//     await page.getByRole('button', { name: 'Enable Baseline' }).click();
//     // Select the 4th record
//     await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
//     await page.waitForTimeout(300);
//     // Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     // Change the BaselineEndDate value
//     await page.getByRole('combobox', { name: 'BaselineEndDate' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('combobox', { name: 'BaselineEndDate' }).press('ControlOrMeta+a');
//     await page.waitForTimeout(300);
//     await page.getByRole('combobox', { name: 'BaselineEndDate' }).fill('3/31/2022');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Save the record by clicking Save
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(200);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-66', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    // Navigate to dependency tab
    await page.getByRole('tab', { name: 'Dependency' }).click();
    await page.waitForTimeout(500);
    //Add/Remove predecessor value
    await page.getByRole('gridcell', { name: '-Identify Site location' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'combobox' }).click();
    await page.waitForTimeout(800);
    await page.locator('.e-ddl.e-lib.valid > .e-input-group-icon').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '-Site Analyze' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(600);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-67', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    // Navigate to Resources tab
    await page.getByRole('tab', { name: 'Resources' }).click();
    await page.waitForTimeout(500);
    //Add/Remove resource
    await page.locator('.e-frame.e-icons.e-check').click();
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'checkbox 1 Martin Tamer 100' }).getByLabel('checkbox').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(800);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-68', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(500);
    // Navigate to Notes tab
    await page.getByRole('tab', { name: 'Notes' }).click();
    await page.waitForTimeout(500);
    //Add the notes in the notes tab
    await page.getByRole('paragraph').click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Rich Text Editor' }).fill('Added a new notes');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(800);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(200);
    await page.locator('(//span[contains(@class,"e-icons e-notes-info")])[4]').hover();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(200);
    await page.locator('(//span[contains(@class,"e-icons e-notes-info")])[4]').hover();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-69', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //  Change the TaskMode value
    await page.getByRole('combobox').filter({ hasText: 'Task Mode' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Manual' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-70', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    // Navigate to Resources tab
    await page.getByRole('tab', { name: 'Resources' }).click();
    await page.waitForTimeout(500);
    //Add/Remove resource
    await page.locator('.e-frame.e-icons.e-check').click();
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'checkbox 2 Rose Fuller 100' }).getByLabel('checkbox').click();
    await page.waitForTimeout(500);
    // Save the record by clicking Save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(800);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('UET-71', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    // Navigate to Resources tab
    await page.getByRole('tab', { name: 'Resources' }).click();
    await page.waitForTimeout(500);
    //Add/Remove resource
    await page.locator('.e-frame.e-icons.e-check').click();
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'checkbox 2 Rose Fuller 100' }).getByLabel('checkbox').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //  Cancel the changes by clicking Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-72', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(500);
    // Navigate to dependency tab
    await page.getByRole('tab', { name: 'Dependency' }).click();
    await page.waitForTimeout(500);
    //Add/Remove predecessor value
    await page.getByRole('gridcell', { name: '-Identify Site location' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'combobox' }).click();
    await page.waitForTimeout(500);
    await page.locator('.e-ddl.e-lib.valid > .e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Site Analyze' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //  Cancel the changes by clicking Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(300);
    // Perform view Undo and Redo via toolbar
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-73', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(500);
    // Navigate to Notes tab
    await page.getByRole('tab', { name: 'Notes' }).click();
    await page.waitForTimeout(500);
    //Add the notes in the notes tab
    await page.getByRole('paragraph').click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Rich Text Editor' }).fill('Added a new notes');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(800);
    //  Cancel the changes by clicking Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(500);
    // Perform view Undo and Redo via toolbar
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('UET-74', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select the 4th record
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(300);
    // Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Job Name' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Job Name' }).press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Job Name' }).fill('New Task');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('4/1/2022');
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).fill('20 days');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'End Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' }).fill('80');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //  Cancel the changes by clicking Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(500);
    // Perform view Undo and Redo via toolbar
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-75', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Double-click on the Task Name field
    await page.getByRole('gridcell', { name: 'Site Analyze Column Header' }).dblclick();
    await page.waitForTimeout(500);
    //Cancel the edit by pressing Esc
    await page.getByRole('row', { name: '3 Site Analyze Column' }).getByLabel('textbox').press('Escape');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-76', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    //Change the Start date in cell
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[16]').dblclick();
    await page.waitForTimeout(300);
    //Cancel the edit 
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[16]').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-77', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select "AddPredecessor" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'AddPredecessor' }).click();
    await page.waitForTimeout(500);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-78', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select "UpdatePredecessor" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
    await page.waitForTimeout(500);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-79', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select "RemovePredecessor" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'RemovePredecessor' }).click();
    await page.waitForTimeout(500);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-80', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Perform Taskbar Progress Right Resize action for the 2nd record
    await page.locator(' (//div[contains(@class,"e-child-progress-resizer")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1082, 240);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-81', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Perform Taskbar Progress Left Resize action for the 2nd record
    await page.locator(' (//div[contains(@class,"e-child-progress-resizer")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1000, 240);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-82', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Perform Taskbar Right Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1293, 250);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-83', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Perform Taskbar Left Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(950, 240);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-84', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Perform Taskbar Drag action for the 2nd record(Child task)
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1300, 247);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-85', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Drag the 2nd record (Child task) and drop it back to its original position without using variables
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-86', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Perform Taskbar Resize Towards Left to make Milestone task for 2nd record
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1000, 240);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-87', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Perform Taskbar Resize Towards Left to make Milestone task for 2nd record
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1000, 240);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Drag the milestone
    await page.locator('(//div[contains(@class,"e-gantt-milestone")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1220, 440);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-88', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 3 to Task 4 with FS (Finish-to-Start) dependency type
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[4]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-89', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 3 to Task 4 with SS dependency type
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[4]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-90', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    // Draw a connector line from Task 2 to Task 3 with SF dependency type
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-91', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    // Draw a connector line from Task 2 to Task 3 with FF dependency type
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
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
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-92', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click ZoomIn toolbar options
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-93', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select "ZoomIn" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-94', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click Zoomout toolbar options
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-95', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select "ZoomOut" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-96', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click Zoom to fit toolbar options
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})

test('UET-97', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select "Zoom to fit" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-98', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click Previous timespan toolbar options
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-99', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select "PreviousTimeSpan" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'PreviousTimeSpan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-100', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click Next timespan toolbar options
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-101', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select "NextTimeSpan" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'NextTimeSpan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-102', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Resize the splitter towards the Left
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(933, 436);
    await page.mouse.move(409, 407);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-103', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Resize the splitter towards the Right
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(930, 410);
    await page.mouse.move(1430, 430);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-104', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(800);
//     // Select "SplitterPosition" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.getByRole('option', { name: 'SplitterPosition' }).click();
//     await page.waitForTimeout(800);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//    //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-105', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click "Dynamic Update Splitter" button.
    await page.getByRole('button', { name: 'Dynamic Splitter Update' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-106', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select the 4th record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[22]').click();
    await page.waitForTimeout(200);
    await page.getByRole('button', { name: 'Indent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-107', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Right click 
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[22]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    await page.getByRole('menuitem', { name: 'Indent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via the toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-108', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select the 4th record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[22]').click();
    await page.waitForTimeout(200);
    //Select "Indent" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'Indent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-109', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select the 4th record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[22]').click();
    await page.waitForTimeout(200);
    //Click the Outdent option in the toolbar
    await page.getByRole('button', { name: 'Outdent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-110', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Right click for outdent
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[22]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    await page.getByRole('menuitem', { name: 'Outdent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-111', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select the 4th record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[22]').click();
    await page.waitForTimeout(200);
    //Select "Indent" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'Outdent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-112', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select the 5th record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[29]').click();
    await page.waitForTimeout(200);
    // Click the Indent option in the toolbar
    await page.getByRole('button', { name: 'Indent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-113', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Right Click the 5th record & Click the Indent option in the context menu
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[29]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    await page.getByRole('menuitem', { name: 'Indent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-114', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select the 5th record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[29]').click();
    await page.waitForTimeout(200);
    //Select "Indent" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'Indent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-115', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select the 11th record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[64]').click();
    await page.waitForTimeout(200);
    // Click the Outdent option in the toolbar
    await page.getByRole('button', { name: 'Outdent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-116', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Right Click the 11th record & Click the Outdent option in the context menu
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[64]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    await page.getByRole('menuitem', { name: 'Outdent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-117', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select the 11th record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[64]').click();
    await page.waitForTimeout(200);
    //Select "Outdent" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'Outdent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-118', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Perform the Search action via the toolbar
    await page.getByRole('textbox', { name: 'textbox' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'textbox' }).fill('soil test');
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'textbox' }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-119', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Select "SearchAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'SearchAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-120', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Perform the Collapse All action via the toolbar.
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-121', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Select "CollapseAllAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'CollapseAllAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-122', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Perform the Collapse All action via the toolbar.
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(200);
    // Perform the Expand All action via the toolbar
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-123', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Select "CollapseAllAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'CollapseAllAsync' }).click();
    await page.waitForTimeout(500);
    //Select "ExpandAllAsync" from the methods dropdown
    await page.waitForTimeout(500);
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ExpandAllAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-124', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Collapse the 1st record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-125', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Select "CollapseAllAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'CollapseByKey' }).first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-126', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Collapse the 1st record and Expand
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(500);
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-127', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Select "CollapseByKey" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'CollapseByKey' }).first().click();
    await page.waitForTimeout(500);
    //Select "ExpandByKey" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'ExpandByKey' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-128', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Select "CollapseAllAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'CollapseAtLevel' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-129', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(800);
//     //Select "CollapseAllAsync" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'CollapseAtLevel' }).click();
//     // Select "ExpandAtLevel" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'ExpandAtLevel' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-130', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the Task Name field
//     await page.getByTitle('Column Menu Icon').nth(1).click();
//     await page.waitForTimeout(500);
//     // Select Starts With, enter 'Iden', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Value' }).fill('iden');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-131', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(800);
//     //Filtering
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Filtering', exact: true }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-132', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the  StartDate  field.
//     await page.getByTitle('Column Menu Icon').nth(2).click();
//     await page.waitForTimeout(500);
//     // Select Equal, enter '4/1/2022', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'datepicker' }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-133', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the Progress field
//     await page.getByTitle('Column Menu Icon').nth(5).click();
//     await page.waitForTimeout(500);
//     //  Select Greater than, enter '50', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Operator' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('spinbutton', { name: 'Filter Value' }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('spinbutton', { name: 'Filter Value' }).fill('50');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-134', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the Task Name field
//     await page.getByTitle('Column Menu Icon').nth(1).click();
//     await page.waitForTimeout(500);
//     // Select Starts With, enter 'Iden', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Value' }).fill('iden');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(200);
//     //Select "ClearFilteringAsync" from the methods dropdown.
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(200);
//     await page.getByRole('option', { name: 'ClearFilteringAsync' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-135', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(800);
//     //Filtering
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Filtering', exact: true }).click();
//     //Select "ClearFilteringAsync" from the methods dropdown.
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(200);
//     await page.getByRole('option', { name: 'ClearFilteringAsync' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-136', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click the Task Name column header to perform a Sort action
    await page.getByText('Job Name').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-137', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click the StartDate column header to perform a Sort action
    await page.getByText('Start Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-138', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click the StartDate column header to perform a Sort action
    await page.getByText('End Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-139', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click the Duration column header to perform a Sort action
    await page.getByText('Duration', { exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-140', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Click the Dependency column header to perform a Sort action
    await page.getByText('Dependency').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-141', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Open the Column Menu for the Task Name column 
    await page.getByTitle('Column Menu Icon').nth(1).click();
    await page.waitForTimeout(300);
    //Select Sort Ascending
    await page.getByRole('menuitem', { name: 'Sort Ascending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-142', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Open the Column Menu for the Task Name column 
    await page.getByTitle('Column Menu Icon').nth(1).click();
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-143', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Open the Column Menu for the Task Id colum 
    await page.getByTitle('Column Menu Icon').first().click();
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    //Open the Column Menu for the Task Name column 
    await page.getByTitle('Column Menu Icon').nth(1).click();
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-144', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Select "Sorting" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'Sorting', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-145', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Select "Sorting" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'Sorting', exact: true }).click();
    await page.waitForTimeout(500);
    //Select "ClearSortingAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ClearFilteringAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-146', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    // Open the Column Menu for the Task Name column
    await page.getByTitle('Column Menu Icon').first().click();
    //navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Job Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-147', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Select "HideColumnAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'HideColumnAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-148', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Open the Column Menu for the Task Name column
    await page.getByTitle('Column Menu Icon').first().click();
    await page.waitForTimeout(300);
    //navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    await page.waitForTimeout(300);
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Job Name' }).click();
    await page.waitForTimeout(300);
    //Check Task Name column
    await page.getByRole('menuitem', { name: 'Job Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-149', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Select "HideColumnAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'HideColumnAsync' }).click();
    await page.waitForTimeout(500);
    // Select "ShowColumnAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ShowColumnAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-150', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //  Resize TaskName column
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(514, 180);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-151', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    //Resize TaskId column
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(350, 180);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-152', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    //Drag the ID column and place it next to the Job Name column
    const src = page.locator('(//th[contains(@class,"e-headercell")])[1]');
    const dst = page.locator('(//th[contains(@class,"e-headercell")])[3]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-153', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    // Drag the Task Name column and place it in front of the ID column
    const src = page.locator('(//th[contains(@class,"e-headercell")])[2]');
    const dst = page.locator('(//th[contains(@class,"e-headercell")])[1]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-154', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    await page.locator(".e-content.e-yscroll").click();
    await page.mouse.wheel(500, 0);
    // Drag the Progress column and place it next to the StartDate column
    const src = page.locator('(//th[contains(@class,"e-headercell")])[7]');
    const dst = page.locator('(//th[contains(@class,"e-headercell")])[5]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-155', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    await page.locator(".e-content.e-yscroll").click();
    await page.mouse.wheel(600, 0);
    await page.waitForTimeout(500);
    //   Drag the Depedency column and place it in front of the ID column
    const src = page.locator('(//th[contains(@class,"e-headercell")])[8]');
    const dst = page.locator('(//th[contains(@class,"e-headercell")])[6]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 100 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-156', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(300);
    //Click the Start Date header to enable sorting
    await page.locator('(//th[contains(@class,"e-headercell")])[4]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Drag the Start Date column and place it next to the ID column
    const src = page.locator('(//th[contains(@class,"e-headercell")])[4]');
    const dst = page.locator('(//th[contains(@class,"e-headercell")])[1]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 100 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('UET-157', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(300);
    //Click the ID column header to enable sorting
    await page.locator('(//th[contains(@class,"e-headercell")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Drag the ID column and place it next to the TaskName column
    const src = page.locator('(//th[contains(@class,"e-headercell")])[1]');
    const dst = page.locator('(//th[contains(@class,"e-headercell")])[3]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 100 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-158', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(300);
    //Click the Dependency column header to enable sorting
    await page.locator('(//th[contains(@class,"e-headercell")])[8]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Drag the Dependency column and place it next to the TaskType column
    const src = page.locator('(//th[contains(@class,"e-headercell")])[8]');
    const dst = page.locator('(//th[contains(@class,"e-headercell")])[10]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 100 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-159', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    // Select "ReoderColumn" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ReorderColumn' }).click();
    await page.waitForTimeout(500);
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-160', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    // Drag Task-7 and drop it below Task-2
    await page.locator('(//div[contains(@class,"e-rowcelldrag")])[6]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(48, 385);
    await page.mouse.move(47, 225);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-161', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(800);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Progress Right Resize action for the 3nd record
//     await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1082, 282);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Drag Task-3 and drop it below Task-4
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.waitForTimeout(1000);
//     await page.mouse.move(48, 281);
//     await page.waitForTimeout(1000);
//     await page.mouse.move(51, 335);
//     await page.waitForTimeout(1000);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-162', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(800);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Progress Right Resize action for the 3nd record
//     await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1003, 244);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Drag Task-3 and drop it below Task-4
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.waitForTimeout(700);
//     await page.mouse.move(48, 247);
//     await page.mouse.move(56, 338);
//     await page.waitForTimeout(700);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-163', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Left Resize action for the 3nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(970,244);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Drag Task-3 and drop it below Task-4
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(50, 379);
//     await page.mouse.move(42, 324);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-164', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Right Resize action for the 5nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[3]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1298, 252);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Drag Task-3 and drop it below Task-4
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(50, 379);
//     await page.mouse.move(42, 324);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-165', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Drag Task-9 and drop it above Task-1
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[8]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(47, 426);
//     await page.mouse.move(45, 194);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-166', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Drag Task-8 and drop it below Task-3
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]');
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(47, 424);
//     await page.mouse.move(42, 305);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-167', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Drag Task-8 and drop it above Task-3
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]');
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(47, 424);
//     await page.mouse.move(42, 305);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-168', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Drag Task-9 and drop it as a child of  Task-3
    const src = page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]');
    const dst = page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-169', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     //  Drag Task-5 and drop it below Task-1
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[5]');
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(47, 424);
//     await page.mouse.move(42, 305);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });



// test('UET-170', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     //  Drag Task-5 and drop it above Task-1
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[5]');
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(47, 424);
//     await page.mouse.move(42, 305);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-171', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo');
    await page.waitForTimeout(1000);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    //Drag Task-5 and drop it as a child of  Task-1
    const src = page.locator('(//div[contains(@class,"e-rowcelldrag")])[5]');
    const dst = page.locator('(//div[contains(@class,"e-rowcelldrag")])[1]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-172', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     //Drag Task-7 & 8 and drop it above Task-1
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[5]');
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(47, 424);
//     await page.mouse.move(42, 305);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-173', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     //Drag Task-7 & 8 and drop it below Task-1
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[5]');
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(47, 424);
//     await page.mouse.move(42, 305);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-174', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     //Drag Task-7 & 8 and drop it below Task-1
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[5]');
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(47, 424);
//     await page.mouse.move(42, 305);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-175', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Select "RowReorder" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'RowReorder' }).click();
//     await page.waitForTimeout(300);
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//................................................... Resource View .................................................................

test('UET-176', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Add a new task via toolbar
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-177', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Add a new task via toolbar
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-178', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Add a new task via toolbar
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.waitForTimeout(500);
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-179', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Add a new task via insert key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').press('Insert');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-180', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Add a new task via insert key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').press('Insert');
    await page.waitForTimeout(300);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-181', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Add a new task via insert key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').press('Insert');
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-182', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Add a new task under the Martin Tamer resource via toolbar Add.
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(500);
    //Resource tab
    await page.getByText('Resources').click();
    await page.waitForTimeout(500);
    //Click the Martin Tamer resource
    await page.locator('(//span[contains(@class,"e-frame e-icons")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    // After save the undo button should be enabled
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // After undo the redo button should be enabled
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // After redo the undo button should be enabled
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
});

test('UET-183', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Add a new task under the Martin Tamer resource via toolbar Add.
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(500);
    //Resource tab
    await page.getByText('Resources').click();
    await page.waitForTimeout(500);
    //Click the Martin Tamer resource
    await page.locator('(//span[contains(@class,"e-frame e-icons")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    // After save the undo button should be enabled
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(500);
    // After undo the redo button should be enabled
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    // Perform Redo via public method
    await page.waitForTimeout(800);
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(500);
    // After redo the undo button should be enabled
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
});

test('UET-184', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Add a new task under the Martin Tamer resource via toolbar Add.
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    //Resource tab
    await page.getByText('Resources').click();
    await page.waitForTimeout(300);
    //Click the Martin Tamer resource
    await page.locator('(//span[contains(@class,"e-frame e-icons")])[1]').click();
    await page.waitForTimeout(200);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(800);
    // After save the undo button should be enabled
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(600);
    // After undo the redo button should be enabled
    await expect(page.locator('#Gantt_redo')).toBeEnabled();
    // Redo using Ctrl + y
    await page.waitForTimeout(800);
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(600);
    // After redo the undo button should be enabled
    await expect(page.locator('#Gantt_undo')).toBeEnabled();
});

test('UET-185', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Delete using key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').press('Delete');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-186', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Delete using key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').press('Delete');
    await page.waitForTimeout(300);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-187', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Delete using key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').press('Delete');
    await page.waitForTimeout(300);
    //Select the any record to perform undoRedo
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-188', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    // Delete a task via Toolbar Delete
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-189', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    // Delete a task via Toolbar Delete
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    //Perform Undo via Undo button
    await page.locator('(//button[text()="Undo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via Redo button
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Redo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-190', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Delete a task via Toolbar Delete
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    //Select the any record to perform undoRedo
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-191', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    // Select Above from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Above' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-192', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    // Select below from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Below' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-193', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     //Right-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(200);
//     // Select Milestone from the Add item in the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Milestone' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-194', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    // Select Above from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Above' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-195', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     //Right-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select below from the Add item in the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('menuitem', { name: 'Below' }).click();
//     await page.waitForTimeout(500);
//     // Undo using Ctrl + Z
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyZ');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Redo using Ctrl + y
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyY');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-196', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     //Right-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(200);
//     // Select Milestone from the Add item in the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Milestone' }).click();
//     await page.waitForTimeout(300);
//     // Undo using Ctrl + Z
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyZ');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Redo using Ctrl + y
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyY');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-197', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    // Select below from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Below' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-198', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     //Right-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(200);
//     // Select Milestone from the Add item in the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Milestone' }).click();
//     await page.waitForTimeout(300);
//      // Perform Undo via public method
//     await page.getByRole('button', { name: 'Undo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via public method
//     await page.getByRole('button', { name: 'Redo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-199', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    // Select "Delete Task" from the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-200', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    // Select "Delete Task" from the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-201', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    // Select "Delete Task" from the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    //Perform Undo via Undo button
    await page.locator('(//button[text()="Undo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via Redo button
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Redo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('UET-202', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Right-click on the 2nd record(Identify Site location)
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[5]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    // Select "Delete Task" from the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-203', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Right-click on the 2nd record(Identify Site location)
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[5]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    // Select "Delete Task" from the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-204', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Right-click on the 2nd record(Identify Site location)
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[5]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    // Select "Delete Task" from the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via public method
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-205', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     // Right-click on the 8nd record(Identify Site location)
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[29]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(200);
//     // Select "Delete Dependency" from the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Identify Site location' }).click();
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-206', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     // Right-click on the 8nd record(Identify Site location)
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[29]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(200);
//     // Select "Delete Dependency" from the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Identify Site location' }).click();
//     // Undo using Ctrl + Z
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyZ');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Redo using Ctrl + y
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyY');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-207', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     // Right-click on the 8nd record(Identify Site location)
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[29]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(200);
//     // Select "Delete Dependency" from the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Identify Site location' }).click();
//     // Perform Undo via public method
//     await page.getByRole('button', { name: 'Undo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via public method
//     await page.getByRole('button', { name: 'Redo' }).first().click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-208', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Double the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Name').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    //Change the task name value.
    await page.locator('#DataItem___Name').fill('Updated Name');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Name').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-209', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Change the Start date in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___StartDate').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___StartDate').fill('4/4/2022');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___StartDate').press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-210', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Change the Baseline end date of 3rd in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___EndDate').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___EndDate').fill('4/4/2022');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___EndDate').press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-211', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Change the duration value of the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[7]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Duration').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Duration').fill('7 days');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Duration').press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-212', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Change the work value of the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[8]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Work').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Work').fill('40');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Work').press('Enter');
    await page.waitForTimeout(500);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-213', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Change the work value of the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[9]').dblclick();
    await page.waitForTimeout(300);
    await page.getByRole('row', { name: 'Site Analyze Column Header' }).getByRole('combobox').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'FixedUnit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('row', { name: ' Site Analyze Column Header' }).getByRole('combobox').press('Enter');
    await page.waitForTimeout(300);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-214', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Change the Progress value of the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[10]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Progress').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Progress').fill('80');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Progress').press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-215', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the Task Name value
    await page.locator('#Name').fill('Updated Name');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#Name').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-216', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the Start Date value
    await page.locator('#StartDate').fill('4/4/2022');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#StartDate').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-217', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the End Date value
    await page.locator('#EndDate').fill('4/4/2022');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#EndDate').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-218', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     //Select the 3rd record("Site Analyze")
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
//     await page.waitForTimeout(300);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Change the Duration value
//     await page.locator('#Duration').fill('7 days');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.locator('#Duration').press('Enter');
//     await page.waitForTimeout(300);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-219', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the Progress value
    await page.locator('#Progress').fill('80');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#Progress').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-220', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the Work value
    await page.locator('#Work').click();
    await page.waitForTimeout(300);
    await page.locator('#Work').press('ControlOrMeta+a');
    await page.waitForTimeout(200);
    await page.locator('#Work').fill('20');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    await page.locator('#Work').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-221', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the TaskType value
    await page.getByRole('combobox').filter({ hasText: 'TaskType' }).click();
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'FixedUnit' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(200);
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[9]').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(200);
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[9]').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-222', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    //Navigate to dependency tab
    await page.getByText('Dependency').click();
    await page.waitForTimeout(500);
    //Add/Remove predecessor value
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.locator(' (//span[contains(@class,"e-input-group-icon e-ddl")])[3]').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Identify Site location' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-223', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(500);
    //Navigate to Resource tab
    await page.getByText('Resources').click();
    await page.waitForTimeout(500);
    //Remove resource  
    await page.locator('.e-frame').first().click();
    await page.waitForTimeout(500);
    //Cancel the changes by clicking Cancel 
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(2000);
    // Screenshot validation-UndoRedo disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-224', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    //Navigate to dependency tab
    await page.getByText('Dependency').click();
    await page.waitForTimeout(500);
    //Add/Remove predecessor value
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.locator(' (//span[contains(@class,"e-input-group-icon e-ddl")])[3]').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Identify Site location' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Cancel the changes by clicking Cancel 
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(2000);
    // Screenshot validation-UndoRedo enable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-225', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    //Navigate to dependency tab
    await page.getByText('Dependency').click();
    await page.waitForTimeout(500);
    //Navigate to General tab
    await page.getByText('General').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Cancel the changes by clicking Cancel 
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(2000);
    // Screenshot validation-UndoRedo Disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-226', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').dblclick();
    await page.waitForTimeout(300);
    //Cancel the edit by pressing Esc
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').press('Escape');
    await page.waitForTimeout(1000);
    //Screenshot validation-undoRedo Disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-227', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').dblclick();
    await page.waitForTimeout(300);
    // Double-click on the StartDate field
    await page.locator('#DataItem___StartDate').click();
    await page.waitForTimeout(300);
    //Cancel the edit by pressing Esc
    await page.locator('#DataItem___StartDate').press('Escape');
    await page.waitForTimeout(1000);
    //Screenshot validation-undoRedo Disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-228', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    //Select the 3rd record("Site Analyze")
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(800);
    //Navigate to Resource tab
    await page.getByText('Resources').click();
    await page.waitForTimeout(500);
    //Add resource  
    await page.locator('(//span[contains(@class,"e-frame e-icons e-uncheck ")])[1]').click();
    //Click Save
    await page.waitForTimeout(800);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1200);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('(//span[text()="Undo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Redo"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-229', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     //Select the 3rd record("Site Analyze")
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click();
//     await page.waitForTimeout(300);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Navigate to Resource tab
//     await page.getByText('Resources').click();
//     await page.waitForTimeout(200);
//     //Add  remove resource  
//     await page.locator('(//span[contains(@class,"e-frame e-icons e-check ")])').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Click Save
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(500);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-230', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Select "AddPredecessor" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'AddPredecessor' }).click();
    await page.waitForTimeout(500);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via public method
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-231', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Select "UpdatePredecessor" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
    await page.waitForTimeout(500);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via public method
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-232', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Select "RemovePredecessor" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'RemovePredecessor' }).click();
    await page.waitForTimeout(500);
    // Perform Undo via public method
    await page.getByRole('button', { name: 'Undo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via public method
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Redo' }).first().click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-233', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Perform Taskbar Progress Right Resize action for the 5nd record
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[3]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[3]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1240, 460);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-234', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Perform Taskbar Progress Left Resize action for the 3nd record
    await page.locator(' (//div[contains(@class,"e-child-progress-resizer")])[3]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[3]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(995, 455);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-235', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Perform Taskbar Right Resize action for the 5nd record
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[3]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[3]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1575, 450);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-236', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    // Perform Taskbar Left Resize action for the 5nd record
    await page.locator('(//div[contains(@class,"e-taskbar-left-resizer e-icon")])[3]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-taskbar-left-resizer e-icon")])[3]').hover();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(985, 460);
    await page.mouse.move(927, 453);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-237', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Drag the 5nd record (Child task) and drop it back to its original position without using variables
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[3]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[3]').hover();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1500, 350);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-238', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Drag the 5nd record (Child task) and drop it back to its original position without using variables
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[3]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[3]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(1000);
    //Screenshot validation-undoRedo disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-239', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Perform Taskbar Resize Towards Left to make Milestone task for 5nd record
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[3]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(970, 452);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-240', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Perform Taskbar Resize Towards Left to make Milestone task for 5nd record
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[3]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(970, 452);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Drag the milestone
    await page.locator('(//div[contains(@class,"e-gantt-milestone")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1300, 550);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-241', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    //Draw a connector line from Task 3 to task 5 with FS
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[5]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-242', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    // Draw a connector line from Task 3 to Task 5 with SS dependency type
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[5]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-243', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//      await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(800);
//     // Draw a connector line from Task 3 to Task 5 with SF dependency type
//     const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
//     const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[5]");
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//             await page.mouse.up();
//             await page.waitForTimeout(1000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-244', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//      await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(800);
//     // Draw a connector line from Task 3 to Task 5 with FF dependency type
//     const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
//     const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[5]");
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//             await page.mouse.up();
//             await page.waitForTimeout(1000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-245', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Click ZoomIn toolbar options
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-246', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Select "ZoomIn" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-247', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Click Zoomout toolbar options
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-248', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Select "ZoomOut" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-249', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Click Zoom to fit toolbar options
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})

test('UET-250', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Select "Zoom to fit" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-251', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Click Previous timespan toolbar options
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-252', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Select "PreviousTimeSpan" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'PreviousTimeSpan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-253', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Click Next timespan toolbar options
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-254', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Select "NextTimeSpan" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'NextTimeSpan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-255', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Resize the splitter towards the Left
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(933, 436);
    await page.mouse.move(409, 407);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-256', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Resize the splitter towards the Right
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(930, 410);
    await page.mouse.move(1430, 430);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-257', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//      await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     // Select "SplitterPosition" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.getByRole('option', { name: 'SplitterPosition' }).click();
//     await page.waitForTimeout(800);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//    //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-258', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Click "Dynamic Update Splitter" button.
    await page.getByRole('button', { name: 'Dynamic Splitter Update' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-259', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Perform the Search action via the toolbar
    await page.getByRole('textbox', { name: 'textbox' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'textbox' }).fill('soil test');
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'textbox' }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-260', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Select "SearchAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'SearchAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-261', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Perform the Collapse All action via the toolbar.
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-262', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Select "CollapseAllAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'CollapseAllAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-263', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Perform the Collapse All action via the toolbar.
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(200);
    // Perform the Expand All action via the toolbar
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-264', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Select "CollapseAllAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'CollapseAllAsync' }).click();
    await page.waitForTimeout(500);
    //Select "ExpandAllAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ExpandAllAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-265', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Collapse the 1st record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-266', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Select "CollapseByKey" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'CollapseByKey' }).first().click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-267', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Collapse the 1st record and Expand
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(500);
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-268', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Select "CollapseAllAsync" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'CollapseByKey' }).first().click();
//     await page.waitForTimeout(300);
//     //Select "ExpandAllAsync" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'ExpandByKey' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-269', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Select "CollapseAllAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'CollapseAtLevel' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-270', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Select "CollapseAtLevel" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'CollapseAtLevel' }).click();
//     await page.waitForTimeout(300);
//     //Select "ExpandAtLevel" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'ExpandAtLevel' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-271', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//      await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the Task Name field
//     await page.getByTitle('Column Menu Icon').nth(1).click();
//     await page.waitForTimeout(500);
//     // Select Starts With, enter 'Iden', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Value' }).fill('iden');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-272', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Select"Filtering" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Filtering', exact: true }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-273', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the StartDate  field.
//     await page.getByTitle('Column Menu Icon').nth(2).click();
//     await page.waitForTimeout(500);
//     // Select Equal, enter '4/1/2022', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'datepicker' }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-274', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//      await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the Progress field
//     await page.getByTitle('Column Menu Icon').nth(5).click();
//     await page.waitForTimeout(500);
//     //  Select Greater than, enter '50', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Operator' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('spinbutton', { name: 'Filter Value' }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('spinbutton', { name: 'Filter Value' }).fill('50');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-275', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the Task Name field
//     await page.getByTitle('Column Menu Icon').nth(1).click();
//     await page.waitForTimeout(500);
//     // Select Starts With, enter 'Iden', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Value' }).fill('iden');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(200);
//     //Select "ClearFilteringAsync" from the methods dropdown.
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(200);
//     await page.getByRole('option', { name: 'ClearFilteringAsync' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-276', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Filtering
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Filtering', exact: true }).click();
//     //Select "ClearFilteringAsync" from the methods dropdown.
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(200);
//     await page.getByRole('option', { name: 'ClearFilteringAsync' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-277', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Click the Task Name column header to perform a Sort action
    await page.getByText('Name').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-278', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Click the StartDate column header to perform a Sort action
    await page.getByText('Start Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-279', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Click the End Date column header to perform a Sort action
    await page.getByText('End Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-280', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Click the Duration column header to perform a Sort action
    await page.getByText('Duration', { exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-281', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Open the Column Menu for the Task Name column 
    await page.getByTitle('Column Menu Icon').nth(1).click();
    await page.waitForTimeout(300);
    //Select Sort Ascending
    await page.getByRole('menuitem', { name: 'Sort Ascending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-282', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Open the Column Menu for the Task Name column 
    await page.getByTitle('Column Menu Icon').nth(1).click();
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-283', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Open the Column Menu for the Progress
    await page.getByTitle('Column Menu Icon').nth(2).click();
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    //Open the Column Menu for the Task Name column 
    await page.getByTitle('Column Menu Icon').nth(1).click();
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-284', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Select "Sorting" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'Sorting', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-285', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Select "Sorting" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'Sorting', exact: true }).click();
    await page.waitForTimeout(500);
    //Select "ClearSortingAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ClearFilteringAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-286', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu")])[2]').click();
    //navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-287', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Select "HideColumnAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'HideColumnAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-288', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu")])[2]').click();
    await page.waitForTimeout(300);
    //navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    await page.waitForTimeout(300);
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Name' }).click();
    await page.waitForTimeout(300);
    //Check Task Name column
    await page.getByRole('menuitem', { name: 'Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-289', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //Select "HideColumnAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'HideColumnAsync' }).click();
    await page.waitForTimeout(500);
    // Select "ShowColumnAsync" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ShowColumnAsync' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-290', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    // Resize TaskName column
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(514, 270);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-291', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    //  Resize Progress column
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(614, 286);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-292', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    //Drag the Task Name column and place it next to the Progress column
    const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer")])[1]');
    const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer")])[2]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-293', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    //Drag the Progress column and place it next to the StartDate column
    const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer")])[2]');
    const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer")])[3]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-294', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(800);
    await page.locator('//button[text()="Disable"]').click();
    await page.waitForTimeout(500);
    //Click the Start Date column header to enable sorting
    await page.getByText('StartDate').click
    await page.waitForTimeout(300);
    //Start Date column and place it next to the Duration column
    const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer")])[3]');
    const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer")])[5]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-295', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/resource');
    await page.waitForTimeout(1000);
    // Select "ReoderColumn" from the methods dropdown
    await page.getByRole('combobox').click();
    await page.waitForTimeout(800);
    await page.getByRole('option', { name: 'ReorderColumn' }).click();
    await page.waitForTimeout(600);
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-296', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     // Drag Task-5("Project estimation") and drop it below Task-1("Martin Tamer")
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[5]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(44, 454);
//     await page.mouse.move(41, 326);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-297', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     // Perform Taskbar Progress Right Resize action for the 5nd record
//     await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[3]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1240, 460);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Drag Task-3("Site Analyze") and drop it above Task-2("Identify Site location")
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(50, 379);
//     await page.mouse.move(42, 324);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-298', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//      // Perform Taskbar Left Resize action for the 5nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[3]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1575, 450);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Drag Task-3("Site Analyze") and drop it above Task-2("Identify Site location")
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(50, 379);
//     await page.mouse.move(42, 324);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-299', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     // Perform Taskbar Right Resize action for the 5nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[3]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1575, 450);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Drag Task-3("Site Analyze") and drop it above Task-2("Identify Site location")
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(50, 379);
//     await page.mouse.move(42, 324);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('UET-300', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     // Drag Task-3("Site Analyze") and drop it above Task-2("Identify Site location")
//     await page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(50, 379);
//     await page.mouse.move(42, 324);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-301', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Drag the task5 and drop it on task1
//     const src = page.locator('(//div[contains(@class,"e-rowcelldrag")])[5]');
//     const dst = page.locator('(//div[contains(@class,"e-rowcelldrag")])[1]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-302', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     //Select "RowReorder" from the methods dropdown
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'RowReorder' }).click();
//     await page.waitForTimeout(300);
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-303', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Enable the “Allow Taskbar Drag and Drop” toggle
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[2]').click();
//     // Drag the task “Ground Floor Initiation” and drop it below the child task “Site Analyze
//     const src = page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[4]');
//     const dst = page.locator('(//div[contains(@class,"e-gantt-parent-taskbar-inner-div")])[1]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-304', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Enable the “Allow Taskbar Drag and Drop” toggle
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[2]').click();
//     // Drag the task “Perform soil test” and drop it as a child of the “Rose Fuller”
//     const src = page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[5]');
//     const dst = page.locator('(//div[contains(@class,"e-gantt-parent-taskbar-inner-div")])[2]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-305', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Enable the “Allow Taskbar Drag and Drop” toggle
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[2]').click();
//     //scroll drown
//     await page.locator(".e-chart-scroll-container.e-content").click();
//     await page.mouse.wheel(0, 2261)
//     await page.waitForTimeout(2000);
//     // Drag the task “Building approval” and drop it as a child of the “Construction supervisor”
//     const src = page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[16]');
//     const dst = page.locator('(//div[contains(@class,"e-gantt-parent-taskbar-inner-div")])[11]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-306', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Enable the “Allow Taskbar Drag and Drop” toggle
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[2]').click();
//     //scroll drown
//     await page.locator(".e-chart-scroll-container.e-content").click();
//     await page.mouse.wheel(0, 2261)
//     await page.waitForTimeout(2000);
//     // Drag the task “Estimation approval” and drop it as a child of the “Unassigned tasks"
//     const src = page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[15]');
//     const dst = page.locator('(//div[contains(@class,"e-gantt-parent-taskbar-inner-div")])[12]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-307', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     // Enable the “Allow Taskbar Drag and Drop” toggle
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[2]').click();
//     await page.waitForTimeout(500);
//     //Perform Taskbar Progress Right Resize action for the 5nd record
//     await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[3]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1240, 460);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('UET-308', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     // Enable the “Allow Taskbar Drag and Drop” toggle
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[2]').click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Progress Left Resize action for the 3nd record
//     await page.locator(' (//div[contains(@class,"e-child-progress-resizer")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[3]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(995, 455);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-309', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     // Enable the “Allow Taskbar Drag and Drop” toggle
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[2]').click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Right Resize action for the 5nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[3]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1575, 450);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-310', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//     // Enable the “Allow Taskbar Drag and Drop” toggle
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Left Resize action for the 5nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer e-icon")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer e-icon")])[3]').hover();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(985, 460);
//     await page.mouse.move(927, 453);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-311', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//      Enable the “Allow Taskbar Drag and Drop” toggle
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Drag the 5nd record (Child task) and drop it back to its original position without using variables
//     await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[3]').hover();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1500, 350);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-312', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(1000);
//      Enable the “Allow Taskbar Drag and Drop” toggle
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.locator('//button[text()="Disable"]').click();
//     await page.waitForTimeout(500);
//     // Drag the 5nd record (Child task) and drop it back to its original position without using variables
//     await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[3]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(1000);
//     //Screenshot validation-undoRedo disable
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//.................................................UndoRedo_DataBinding.........................................................


test('UET-313', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Perform Taskbar Progress Right Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1400, 201);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-314', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Perform Taskbar Progress Left Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1160, 197);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-315', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Perform Taskbar Drag action for the 2nd record(Child task)
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer e-icon")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer e-icon")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1628, 192);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-316', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     // Perform Taskbar Left Resize action for the 2nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer e-icon")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer e-icon")])[2]').click();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1115, 196);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


test('UET-317', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Perform Taskbar Drag action for the 2nd record(Child task)
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[2]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1627, 194);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-318', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    // Drag the 2nd record (Child task) and drop it back to its original position without using variables
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-319', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(800);
    //Drag the milestone of 7th record
    await page.locator('(//div[contains(@class,"e-gantt-milestone")])[1]').click();
    await page.waitForTimeout(1500);
    await page.mouse.down();
    await page.waitForTimeout(500);
    await page.mouse.move(1848, 370);
    await page.waitForTimeout(500);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // //Perform Undo via the toolbar
    //await page.locator('#Gantt_undo').click();
    // await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // //Perform Redo via the toolbar
    // await page.locator('#Gantt_redo').click();
    // await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-320', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1500);
    // Draw a connector line from Task 3 to Task 5 with FS (Finish-to-Start) dependency type
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[6]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-321', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1500);
    // Draw a connector line from Task 3 to Task 5 with FS (Finish-to-Start) dependency type
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[8]");
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
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-322', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Change the Start date in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell e-unfreeze")])[5]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___StartDate').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___StartDate').fill('4/4/2025');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___StartDate').press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-323', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Change the End date in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell e-unfreeze")])[6]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___EndDate').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___EndDate').fill('4/4/2025');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___EndDate').press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-324', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Change the Duration in cell by pressing Enter,
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell")])[6]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Duration').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Duration').fill('15 days');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Duration').press('Enter');
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-326', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    // Select the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell e-leftfreeze e-freeze")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.locator('//span[text()="Edit"]').click();
    await page.waitForTimeout(300);
    //Change the Task Name value
    await page.locator('#TaskName').fill('Updated Name');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#TaskName').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-327', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    // Select the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell e-leftfreeze e-freeze")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.locator('//span[text()="Edit"]').click();
    await page.waitForTimeout(300);
    //Change the Start Date value
    await page.locator('#StartDate').fill('4/4/2025');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('#StartDate').press('Enter');
    await page.waitForTimeout(500);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-328', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    // Select the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell e-leftfreeze e-freeze")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.locator('//span[text()="Edit"]').click();
    await page.waitForTimeout(500);
    //Change the End Date value
    await page.locator('#EndDate').fill('4/4/2025');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('#EndDate').press('Enter');
    await page.waitForTimeout(500);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-329', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     // Select the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell e-leftfreeze e-freeze")])[3]').click();
//     await page.waitForTimeout(300);
//     //Click the Edit option in the toolbar
//     await page.locator('//span[text()="Edit"]').click();
//     await page.waitForTimeout(300);
//     //Change the Duration value
//     await page.locator('#Duration').fill('15 days');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.locator('#Duration').press('Enter');
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-331', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select the 3rd record
//      await page.locator('(//td[contains(@class,"e-rowcell e-leftfreeze e-freeze")])[3]').click();
//     await page.waitForTimeout(300);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Navigate to dependency tab
//     await page.getByText('Dependency').click();
//     await page.waitForTimeout(200);
//     //Add/Remove predecessor value
//     await page.getByRole('button', { name: 'Add' }).click();
//     await page.waitForTimeout(200);
//     await page.locator(' (//span[contains(@class,"e-input-group-icon e-ddl")])[3]').click();
//     await page.waitForTimeout(200);
//     await page.getByRole('option', { name: 'Identify Site location' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-332', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select the 3rd record
//      await page.locator('(//td[contains(@class,"e-rowcell e-leftfreeze e-freeze")])[3]').click();
//     await page.waitForTimeout(300);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Navigate to dependency tab
//     await page.getByText('Segment').click();
//     await page.waitForTimeout(200);
//     //Add/Remove predecessor value
//     await page.getByRole('button', { name: 'Add' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-333', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select the 3rd record
//      await page.locator('(//td[contains(@class,"e-rowcell e-leftfreeze e-freeze")])[3]').click();
//     await page.waitForTimeout(300);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Navigate to dependency tab
//     await page.getByText('Segment').click();
//     await page.waitForTimeout(200);
//     //Add/Remove predecessor value
//     await page.getByRole('button', { name: 'Add' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('UET-334', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select the 3rd record
//      await page.locator('(//td[contains(@class,"e-rowcell e-leftfreeze e-freeze")])[3]').click();
//     await page.waitForTimeout(300);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Navigate to dependency tab
//     await page.getByText('Segment').click();
//     await page.waitForTimeout(200);
//     //Add/Remove predecessor value
//     await page.getByRole('button', { name: 'Add' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-335', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     // Select the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell e-leftfreeze e-freeze")])[3]').click();
//     await page.waitForTimeout(300);
//     //Click the Delete option in the toolbar
//     await page.locator('//span[text()="Delete"]').click();
//     await page.waitForTimeout(300);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-336', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Drag the TaskName frozen column and drop it on TaskId
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
//             await page.waitForTimeout(1000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-337', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     // Drag the TaskName frozen column and drop it on StartDate
//     const src = page.locator("(//th[contains(@class,'e-headercell')])[2]");
//     const dst = page.locator("(//th[contains(@class,'e-headercell')])[5]");
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//             await page.mouse.up();
//             await page.waitForTimeout(1000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-338', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(300);
//     //Select the 3rd record.
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[13]').click();
//     await page.waitForTimeout(300);
//     //Change the Start date in cell by pressing Enter
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[13]').dblclick();
//     await page.waitForTimeout(300);
//     await page.getByRole('combobox', { name: 'datepicker' }).press('ControlOrMeta+a');
//     await page.waitForTimeout(300);
//     await page.getByRole('combobox', { name: 'datepicker' }).fill('4/10/2025');
//     await page.waitForTimeout(300);
//     await page.getByRole('combobox', { name: 'datepicker' }).press('Enter');
//     await page.waitForTimeout(300);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-339', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(300);
//     //Select the 17rd record
//     await page.locator('(//td[text()="Roofing"])[1]').click();
//     await page.waitForTimeout(300);
//     //Change the Start date in cell by pressing Enter
//     await page.locator('(//td[text()="5/9/2025"])[1]').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('combobox', { name: 'datepicker' }).press('ControlOrMeta+a');
//     await page.waitForTimeout(300);
//     await page.getByRole('combobox', { name: 'datepicker' }).fill('1/15/1015');
//     await page.waitForTimeout(300);
//     await page.getByRole('combobox', { name: 'datepicker' }).press('Enter');
//     await page.waitForTimeout(300);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-340', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Select the 3rd record.
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[13]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.locator('//span[text()="Edit"]').click();
    await page.waitForTimeout(500);
    //Change the Start Date value
    await page.locator('#StartDate').fill('4/10/2025');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('#StartDate').press('Enter');
    await page.waitForTimeout(300);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-341', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Select the 19th record.
    await page.locator('//td[text()="HVAC Installation"]').click();
    await page.waitForTimeout(300);
    //Click the Edit option in the toolbar
    await page.locator('//span[text()="Edit"]').click();
    await page.waitForTimeout(500);
    //Change the Start Date value
    await page.locator('#StartDate').fill('5/20/2025');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.locator('#StartDate').press('Enter');
    await page.waitForTimeout(300);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-342', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('//td[text()="Obtain Permits"]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Above from the Add item in the context menu
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Above' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-343', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('//td[text()="Obtain Permits"]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Below from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Below' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-344', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('//td[text()="Obtain Permits"]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Child from the Add item in the context menu
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Child' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-345', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('//td[text()="Obtain Permits"]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Milestone from the Add item in the context menu
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Milestone' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-346', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 17th record
//     await page.locator('//td[text()="Roofing"]').click
//     await page.waitForTimeout(300);
//     await page.locator('//td[text()="Roofing"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Above from the Add item in the context menu
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Above' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-347', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 17th record
//     await page.locator('//td[text()="Roofing"]').click
//     await page.waitForTimeout(300);
//     await page.locator('//td[text()="Roofing"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Below from the Add item in the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Below' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-348', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 17th record
//     await page.locator('//td[text()="Roofing"]').click
//     await page.waitForTimeout(300);
//     await page.locator('//td[text()="Roofing"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Child from the Add item in the context menu
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Child' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-349', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 17th record
//     await page.locator('//td[text()="Roofing"]').click
//     await page.waitForTimeout(300);
//     await page.locator('//td[text()="Roofing"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Milestone from the Add item in the context menu
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Milestone' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-350', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 8rd record
    await page.locator('//td[text()="Foundation Work"]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Delete Task in the context menu
    await page.getByRole('menuitem', { name: 'Delete Task' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-351', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 24rd record
//     await page.locator('//td[text()="Interior Painting"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Delete Task in the context menu
//     await page.getByRole('menuitem', { name: 'Delete Task' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


test('UET-352', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 5rd Parent record
    await page.locator('//td[text()="Site Preparation"]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Above from the Add item in the context menu
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Above' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-353', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 5rd Parent record
//     await page.locator('//td[text()="Site Preparation"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Below from the Add item in the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Below' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-354', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 5rd Parent record
    await page.locator('//td[text()="Site Preparation"]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Child from the Add item in the context menu
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Child' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-355', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 5rd Parent record
//     await page.locator('//td[text()="Site Preparation"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Milestone from the Add item in the context menu
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Milestone' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('UET-356', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 22nd Parent record
//     await page.locator('//td[text()="Interior Finishing"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Above from the Add item in the context menu
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Above' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-357', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 22nd Parent record
//     await page.locator('//td[text()="Interior Finishing"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Below from the Add item in the context menu
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Below' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-358', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 22nd Parent record
//     await page.locator('//td[text()="Interior Finishing"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Child from the Add item in the context menu
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Child' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-359', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 22nd Parent record
//     await page.locator('//td[text()="Interior Finishing"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Select Milestone from the Add item in the context menu
//     await page.getByRole('menuitem', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Milestone' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-360', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 1st Parent record
//     await page.locator('//td[text()="Planning and Permits"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Delete Task in the context menu
//     await page.getByRole('menuitem', { name: 'Delete Task' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-361', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 22nd Parent record
//     await page.locator('//td[text()="Interior Finishing"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Delete Task in the context menu
//     await page.getByRole('menuitem', { name: 'Delete Task' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-362', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 3rd Parent record
//     await page.locator('//td[text()="Obtain Permits"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Delete Dependency in the context menu
//     await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
//     await page.waitForTimeout(300);
//     await page.locator('//li[text()="2 - Site Evaluation"]').click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-363', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 24nd Parent record
//     await page.locator('//td[text()="Interior Painting"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Delete Dependency in the context menu
//     await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
//     await page.waitForTimeout(300);
//     await page.locator('//li[text()="23 - Insulation and Drywall"]').click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-364', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 4th record
    await page.locator('//td[text()="Finalize Planning"]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Indent in the context menu
    await page.getByRole('menuitem', { name: 'Indent' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-365', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 4th record
    await page.locator('//td[text()="Finalize Planning"]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Outdent in the context menu
    await page.getByRole('menuitem', { name: 'Outdent' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-366', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 24th record
//     await page.locator('//td[text()="Interior Painting"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Indent in the context menu
//     await page.getByRole('menuitem', { name: 'Indent' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-367', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 24th record
//     await page.locator('//td[text()="Interior Painting"]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     // Outdent in the context menu
//     await page.getByRole('menuitem', { name: 'Outdent' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-368', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Click ZoomIn toolbar options
    await page.locator('//span[text()="Zoom in"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-369', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //scroll down
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(0, 2261)
    await page.waitForTimeout(3000);
    //Click ZoomIn toolbar options
    await page.locator('//span[text()="Zoom in"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-370', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Click Zoomout toolbar options
    await page.locator('//span[text()="Zoom out"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-371', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //scroll down
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(0, 2261)
    await page.waitForTimeout(3000);
    //Click Zoomout toolbar options
    await page.locator('//span[text()="Zoom out"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-372', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Click Zoom to fit toolbar options
    await page.locator('//span[text()="Zoom to fit"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-373', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //scroll down
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(0, 2261)
    await page.waitForTimeout(3000);
    //Click Zoom to fit toolbar options
    await page.locator('//span[text()="Zoom to fit"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-374', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Click Previous timespan toolbar options
    await page.locator('//span[text()="Previous timespan"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-375', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //scroll down
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(0, 2261)
    await page.waitForTimeout(3000);
    //Click Previous timespan toolbar options
    await page.locator('//span[text()="Previous timespan"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-376', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Click Next timespan toolbar options
    await page.locator('//span[text()="Next timespan"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-377', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //scroll down
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(0, 2261)
    await page.waitForTimeout(3000);
    //Click Next timespan toolbar options
    await page.locator('//span[text()="Next timespan"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-378', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Resize the splitter towards the Left
//     await page.locator('.e-split-bar').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(1060, 291);
//     await page.mouse.move(460, 268);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-379', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //scroll down
//     await page.locator(".e-chart-scroll-container.e-content").click();
//     await page.mouse.wheel(0, 2261)
//     await page.waitForTimeout(3000);
//     //Resize the splitter towards the Left
//     await page.locator('.e-split-bar').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(1060, 291);
//     await page.mouse.move(460, 268);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-380', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Perform the Search action via the toolbar
//     await page.getByRole('textbox', { name: 'textbox' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('textbox', { name: 'textbox' }).fill('Obtain Permits');
//     await page.waitForTimeout(500);
//     await page.getByRole('textbox', { name: 'textbox' }).press('Enter');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-381', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/resource');
//     await page.waitForTimeout(800);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //scroll down
//     await page.locator(".e-chart-scroll-container.e-content").click();
//     await page.mouse.wheel(0, 2261)
//     await page.waitForTimeout(3000);
//     //Perform the Search action via the toolbar
//     await page.getByRole('textbox', { name: 'textbox' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('textbox', { name: 'textbox' }).fill('Obtain Permits');
//     await page.waitForTimeout(500);
//     await page.getByRole('textbox', { name: 'textbox' }).press('Enter');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-382', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Click Collapse all toolbar options
//     await page.locator('//span[text()="Collapse all"]').click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-383', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Click Collapse All toolbar options
//     await page.locator('//span[text()="Collapse all"]').click();
//     await page.waitForTimeout(300);
//     //Click Expand All toolbar options
//     await page.locator('//span[text()="Expand all"]').click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-384', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Collapse the 1st record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-385', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(0, 700)
    await page.waitForTimeout(2000);
    //Collapse the 22nd record
    await page.locator('.e-rowcell.e-leftalign.e-gridrowindex5Level0 > .e-treecolumn-container > .e-icons.e-treegridexpand').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-386', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Collapse the 1st record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    //Expand the 1st record
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-387', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //scroll to 22nd record
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(0, 700)
    await page.waitForTimeout(2000);
    //Collapse the 22nd record
    await page.locator('.e-rowcell.e-leftalign.e-gridrowindex5Level0 > .e-treecolumn-container > .e-icons.e-treegridexpand').click();
    await page.waitForTimeout(300);
    //Expand the 22nd record
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-388', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Click the Filter icon in the Task Name field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
//     await page.waitForTimeout(500);
//     // Select Starts With, enter 'Obtain Permits', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Value' }).fill('Obtain Permits');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-389', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Scroll to bottom
//     await page.locator(".e-chart-scroll-container.e-content").click();
//     await page.mouse.wheel(0, 2000)
//     await page.waitForTimeout(2000);
//     //Click the Filter icon in the Task Name field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
//     await page.waitForTimeout(500);
//     // Select Starts With, enter 'Client handover', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Value' }).fill('Client handover');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-390', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Click the Filter icon in the start date field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[3]').click();
//     await page.waitForTimeout(500);
//     //Select Equal, enter '4/2/2025', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Choose a Date' }).fill('4/25/2025');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-391', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Scroll to bottom
//     await page.locator(".e-chart-scroll-container.e-content").click();
//     await page.mouse.wheel(0, 2000)
//     await page.waitForTimeout(2000);
//     //Click the Filter icon in the start date field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[3]').click();
//     await page.waitForTimeout(500);
//     //Select Equal, enter '8/25/2025', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Choose a Date' }).fill('8/25/2025');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-392', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Click the Filter icon in the Progress field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[5]').click();
//     await page.waitForTimeout(500);
//     //Select Greater than, enter '50', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Operator' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('combobox', { name: 'Enter the value' }).fill('50');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-393', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Scroll to bottom
//     await page.locator(".e-chart-scroll-container.e-content").click();
//     await page.mouse.wheel(0, 2000)
//     await page.waitForTimeout(2000);
//     //Click the Filter icon in the Progress field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[5]').click();
//     await page.waitForTimeout(500);
//     //Select Greater than, enter '50', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Operator' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('combobox', { name: 'Enter the value' }).fill('50');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-394', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Click the Event Name column header to perform a Sort action
    await page.getByText('Event Name').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-395', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Click the startDate column header to perform a Sort action
    await page.getByText('Start Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-396', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Click the EndDate column header to perform a Sort action
    await page.getByText('End Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-397', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Click the Duration column header to perform a Sort action
    await page.getByText('Duration').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-398', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Open the Column Menu for the Event name
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(500);
    //Select Sort Ascending
    await page.getByRole('menuitem', { name: 'Sort Ascending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-399', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    // Open the Column Menu for the Event name
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(500);
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-400', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    //Navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Event Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-401', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    //Navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    await page.waitForTimeout(300);
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Event Name' }).click();
    await page.waitForTimeout(300);
    // Check Task Name column 
    await page.getByRole('menuitem', { name: 'Event Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-402', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Resize Event Name column
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(556,127);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-403', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Resize ID column
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(556,127);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-404', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Drag the Task Name column and place it next to the Progress column
//     const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[2]');
//     const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[5]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-405', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//     //Drag the progress column and place it next to startdate column
//     const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[5]');
//     const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[3]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-406', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "Virtual" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Virtual' }).click();
//     await page.waitForTimeout(500);
//      //Click the startDate column header to perform a Sort action
//     await page.getByText('Start Date').click();
//     await page.waitForTimeout(300);
//     //rag the Start Date column and place it next to the Duration column
//     const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[3]');
//     const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[6]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-407', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    // Drag Task-7 and drop it below Task-2
    await page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(62, 450);
    await page.mouse.move(47, 217);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-408', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    // Drag Task-9 and drop it above Task-3
    await page.locator('(//div[contains(@class,"e-rowcelldrag")])[9]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(62, 450);
    await page.mouse.move(47, 217);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('UET-409', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Virtual" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(500);
    //Drag the Progress column and place it next to the StartDate column
    const src = page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]');
    const dst = page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
//.....................................Custom Adaptor......................

test('UET-424', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Click ZoomIn toolbar options
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-425', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Click Zoom out toolbar options
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-426', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Click Zoom to fit toolbar options
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-427', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Click Previous timespan toolbar options
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-428', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Click Next timespan toolbar options
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-429', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "custom adaptor" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'custom adaptor' }).click();
//     await page.waitForTimeout(800);
//     //Resize the splitter towards the Left
//     await page.locator('.e-split-bar').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(966,293);
//     await page.mouse.move(496, 287);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#CustomAdaptor_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#CustomAdaptor_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-430', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Perform the Search action via the toolbar
    await page.getByRole('textbox', { name: 'textbox' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'textbox' }).fill('Child Task 2');
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'textbox' }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-431', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Click Collapse all toolbar options
    await page.locator('//span[text()="Collapse all"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-432', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Click Collapse All toolbar options
    await page.locator('//span[text()="Collapse all"]').click();
    await page.waitForTimeout(300);
    //Click Expand All toolbar options
    await page.locator('//span[text()="Expand all"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-433', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Collapse the 1st record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-434', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Collapse the 1st record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    //Expand the 1st record
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-435', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "custom adaptor" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'custom adaptor' }).click();
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the Task Name field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
//     await page.waitForTimeout(500);
//     // Select Starts With, enter 'Child Task3', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Value' }).fill('Child Task3');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#CustomAdaptor_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#CustomAdaptor_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-436', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "custom adaptor" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'custom adaptor' }).click();
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the start date field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[4]').click();
//     await page.waitForTimeout(500);
//     //Select Equal, enter '4/2/2025', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Choose a Date' }).fill('6/11/2025');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#CustomAdaptor_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#CustomAdaptor_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-437', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "custom adaptor" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'custom adaptor' }).click();
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the Progress field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu")])[5]').click();
//     await page.waitForTimeout(500);
//     //Select Greater than, enter '50', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Operator' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('combobox', { name: 'Enter the value' }).fill('50');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#CustomAdaptor_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#CustomAdaptor_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-438', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Click the Event Name column header to perform a Sort action
    await page.getByText('Event Name').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-439', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Click the startDate column header to perform a Sort action
    await page.getByText('Start Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-440', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Click the EndDate column header to perform a Sort action
    await page.getByText('End Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-441', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    //Open the Column Menu for the Event name
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(500);
    //Select Sort Ascending
    await page.getByRole('menuitem', { name: 'Sort Ascending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-442', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    // Open the Column Menu for the Event name
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(500);
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-443', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    //Navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Event Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-444', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "custom adaptor" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(800);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    //Navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    await page.waitForTimeout(300);
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Event Name' }).click();
    await page.waitForTimeout(300);
    // Check Task Name column 
    await page.getByRole('menuitem', { name: 'Event Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#CustomAdaptor_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#CustomAdaptor_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-445', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "custom adaptor" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'custom adaptor' }).click();
//     await page.waitForTimeout(800);
//     //Resize Event Name column
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(557, 116);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-446', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "custom adaptor" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'custom adaptor' }).click();
//     await page.waitForTimeout(800);
//     //Resize ID column
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(434, 127);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-447', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     // Select "custom adaptor" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'custom adaptor' }).click();
//     await page.waitForTimeout(800);
//     //Drag the Task Name column and place it next to the Progress column
//     const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[2]');
//     const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[6]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-448', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     // Select "custom adaptor" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'custom adaptor' }).click();
//     await page.waitForTimeout(800);
//     //Progress column and place it next to the StartDate column
//     const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[6]');
//     const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[5]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


//.........................................Expando............................		

test('UET-449', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Above from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Above' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-450', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Below from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Below' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-451', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Milestone from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Milestone' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-452', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Milestone from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Milestone' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-453', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(800);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //  Select "Delete Task" from the context menu.
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete Task' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-454', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(800);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //  Select "Delete Task" from the context menu.
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete Task' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


// test('UET-455', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     //  Select "Delete Task" from the context menu.
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: '2 - Child Task 1' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-456', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    //Change the task name value.
    await page.locator('#DataItem___TaskName').fill('Updated Name');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('UET-457', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[13]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    //Change the task name value.
    await page.locator('#DataItem___StartDate').fill('4/4/2025');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___StartDate').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-458', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(15000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(600);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(600);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[14]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___EndDate').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    //Change the task name value.
    await page.locator('#DataItem___EndDate').fill('4/10/2025');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___EndDate').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-459', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell  e-leftalign")])[5]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    //Change the Duration value.
    await page.locator('#DataItem___Duration').fill('10 days');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Duration').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-460', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell  e-leftalign")])[6]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Predecessor').press('ControlOrMeta+a');
    await page.waitForTimeout(300);
    //Change the Duration value.
    await page.locator('#DataItem___Predecessor').fill('2SS');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Predecessor').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-461', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(600);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[15]').dblclick();
    await page.waitForTimeout(500);
    //Change the Progress value
    await page.locator('#DataItem___Progress').fill('20');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Progress').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-462', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
    await page.waitForTimeout(500);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the Task Name value
    await page.locator('#TaskName').fill('Updated Name');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#TaskName').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-463', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
    await page.waitForTimeout(500);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the startDate value
    await page.locator('#StartDate').fill('4/4/2025');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#StartDate').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-464', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(600);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
    await page.waitForTimeout(500);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(500);
    //Change the EndDate value
    await page.locator('#EndDate').fill('4/28/2025');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('#EndDate').press('Enter');
    await page.waitForTimeout(500);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-465', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
//     await page.waitForTimeout(500);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Change the Duration value
//     await page.locator('#Duration').fill('10 days');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.locator('#Duration').press('Enter');
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-466', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
    await page.waitForTimeout(500);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the Progress value
    await page.locator('#Progress').fill('20');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#Progress').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-467', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
    await page.waitForTimeout(500);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(500);
    //Navigate to dependency tab
    await page.getByLabel('Task Information').getByText('Dependency').click();
    await page.waitForTimeout(500);
    //Remove predecessor value
    await page.getByRole('gridcell', { name: '-Child Task 1' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-468', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //dblclick on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').dblclick();
    await page.waitForTimeout(500);
    //Cancel the edit by pressing Esc
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').press('Escape');
    await page.waitForTimeout(1000);
    //Screenshot validation-undoRedo Disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-469', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Double-click on the StartDate field of 3ed record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[13]').click();
    await page.waitForTimeout(300);
    //Cancel the edit by pressing Esc
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[13]').press('Escape');
    await page.waitForTimeout(1000);
    //Screenshot validation-undoRedo Disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-470', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Add a new task via toolbar
    await page.locator('(//span[text()="Add"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//button[text()="Save"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-471', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Add a new task via insert key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').press('Insert');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-472', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Select the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click();
    await page.waitForTimeout(300);
    // Press the Delete key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').press('Insert');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-473', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Select the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click();
    await page.waitForTimeout(300);
    //Delete a task via Toolbar Delete
    await page.locator('(//span[text()="Delete"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-474', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(600);
    // Perform Taskbar Progress Right Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1480, 202);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-475', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Perform Taskbar Progress Right Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1201, 197);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-476', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Right Resize action for the 2nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1714, 205);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-477', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Left Resize action for the 2nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);  
//     await page.mouse.move(1155, 197);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-478', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Perform Taskbar Progress Right Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-gantt-child-progressbar-inner-div")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-gantt-child-progressbar-inner-div")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1377, 198);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-479', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(800);
    // Draw a connector line from Task 2 to Task 7 with FS (Finish-to-Start) dependency type
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[7]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-480', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Click ZoomIn toolbar options
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-481', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Click Zoom out toolbar options
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-482', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Click Zoom to fit toolbar options
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-483', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Click Previous timespan toolbar options
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-484', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Click Next timespan toolbar options
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


// test('UET-491', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     //Click the Filter icon in the Task Name field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
//     await page.waitForTimeout(500);
//     // Select Starts With, enter 'Obtain Permits', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Value' }).fill('Child Task 4');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-492', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     //Click the Filter icon in the start date field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[3]').click();
//     await page.waitForTimeout(500);
//     //Select Equal, enter '4/2/2025', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Choose a Date' }).fill('4/2/2025');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-493', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     //Click the Filter icon in the Progress field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[5]').click();
//     await page.waitForTimeout(500);
//     //Select Greater than, enter '50', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Operator' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('combobox', { name: 'Enter the value' }).fill('50');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-494', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Click the Event Name column header to perform a Sort action
    await page.getByText('Name').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-495', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Click the startDate column header to perform a Sort action
    await page.getByText('Start Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-496', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Click the EndDate column header to perform a Sort action
    await page.getByText('End Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-497', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Open the Column Menu for the Event name
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(500);
    //Select Sort Ascending
    await page.getByRole('menuitem', { name: 'Sort Ascending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-498', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Open the Column Menu for the Event name
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(500);
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-499', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    //Navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    await page.waitForTimeout(300);
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(300);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-500', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    //Navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    await page.waitForTimeout(300);
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Name' }).click();
    await page.waitForTimeout(300);
    // Check Task Name column 
    await page.getByRole('menuitem', { name: 'Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-501', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     //Resize Event Name column
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(556, 127);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-502', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     //Resize ID column
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(556, 127);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-503', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     //Drag the Task Name column and place it next to the Progress column
//     const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[2]');
//     const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[5]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-504', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     //Drag the progress column and place it next to startdate column
//     const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[5]');
//     const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[3]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-505', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Drag Task-7 and drop it below Task-2
    await page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(60, 374);
    await page.mouse.move(45, 218);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-506', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Drag Task-7 and drop it above Task-3
    await page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(60, 374);
    await page.mouse.move(45, 218);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-507', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Drag Task-7 and drop it as a child of  Task-3
    const src = page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]');
    const dst = page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-508', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Perform Taskbar Progress Right Resize action for the 3rd record
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[2]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1518, 236);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-509', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Perform Taskbar Progress Left Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[2]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[2]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1359, 233);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-510', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Right Resize action for the 2nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[5]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[5]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1644,235);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-511', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "expando" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'expando' }).click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Left Resize action for the 2nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[3]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[3]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);  
//     await page.mouse.move(1292,232);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-512', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Perform Taskbar Drag action for the 3rd record
    await page.locator('(//div[contains(@class,"e-gantt-child-progressbar-inner-div")])[3]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-gantt-child-progressbar-inner-div")])[3]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1377, 198);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-513', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(800);
    //Edit the start date on 7th record [4/7/2025]
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[33]').dblclick();
    await page.waitForTimeout(300);
    await page.locator('#DataItem___StartDate').fill('4/7/2025');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___StartDate').press('Enter');
    await page.waitForTimeout(800);
    // Draw a connector line from Task 3 to Task 7 with FF dependency type
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[7]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(0, 2261)
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//...............................................Dynamic Object.............

test('UET-514', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Above from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Above' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-515', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Below from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Below' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-516', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Milestone from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Milestone' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-517', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    // Select Milestone from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Milestone' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-518', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(800);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //  Select "Delete Task" from the context menu.
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete Task' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-519', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(800);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //  Select "Delete Task" from the context menu.
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete Task' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


// test('UET-520', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Right-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click({
//         button: 'right'
//     });
//     await page.waitForTimeout(300);
//     //  Select "Delete Task" from the context menu.
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('menuitem', { name: '2 - Child Task 1' }).click();
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Undo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-521', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').dblclick();
//     await page.waitForTimeout(500);
//     //Change the task name value.
//     await page.locator('#DataItem___TaskName').fill('Updated Name');
//     await page.waitForTimeout(300);
//     await page.locator('#DataItem___TaskName').press('Enter');
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('UET-522', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[13]').dblclick();
//     await page.waitForTimeout(500);
//     //Change the task name value.
//     await page.locator('#DataItem___StartDate').fill('4/4/2025');
//     await page.waitForTimeout(300);
//     await page.locator('#DataItem___StartDate').press('Enter');
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-523', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[14]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___EndDate').press('ControlOrMeta+a');
//     await page.waitForTimeout(300);
//     //Change the task name value.
//     await page.locator('#DataItem___EndDate').fill('4/10/2025');
//     await page.waitForTimeout(300);
//     await page.locator('#DataItem___EndDate').press('Enter');
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-524', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell e-templatecell  e-leftalign")])[5]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___Duration').press('ControlOrMeta+a');
//     await page.waitForTimeout(300);
//     //Change the Duration value.
//     await page.locator('#DataItem___Duration').fill('10 days');
//     await page.waitForTimeout(300);
//     await page.locator('#DataItem___Duration').press('Enter');
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-525', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell e-templatecell  e-leftalign")])[6]').dblclick();
//     await page.waitForTimeout(500);
//     await page.locator('#DataItem___Predecessor').press('ControlOrMeta+a');
//     await page.waitForTimeout(300);
//     //Change the Duration value.
//     await page.locator('#DataItem___Predecessor').fill('2SS');
//     await page.waitForTimeout(300);
//     await page.locator('#DataItem___Predecessor').press('Enter');
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-526', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[15]').dblclick();
//     await page.waitForTimeout(500);
//     //Change the Progress value
//     await page.locator('#DataItem___Progress').fill('20');
//     await page.waitForTimeout(300);
//     await page.locator('#DataItem___Progress').press('Enter');
//     await page.waitForTimeout(300);
//     // Perform Undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-527', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
//     await page.waitForTimeout(500);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Change the Task Name value
//     await page.locator('#TaskName').fill('Updated Name');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.locator('#TaskName').press('Enter');
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-528', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
//     await page.waitForTimeout(500);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Change the startDate value
//     await page.locator('#StartDate').fill('4/4/2025');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.locator('#StartDate').press('Enter');
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-529', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
//     await page.waitForTimeout(500);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Change the EndDate value
//     await page.locator('#EndDate').fill('4/28/2025');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.locator('#EndDate').press('Enter');
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// // test('UET-530', async ({ page }) => {
// //     await page.setViewportSize({ width: 1920, height: 1080 });
// //     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
// //     await page.waitForTimeout(800);
// //     //Select "dynamic object" from the dropdown
// //     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
// //     await page.waitForTimeout(300);
// //     await page.getByRole('option', { name: 'dynamic object' }).click();
// //      await page.waitForTimeout(500);
// //     //Double-click on the 3rd record
// //     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
// //     await page.waitForTimeout(500);
// //     //Click the Edit option in the toolbar
// //     await page.getByRole('button', { name: 'Edit' }).click();
// //     await page.waitForTimeout(300);
// //     //Change the Duration value
// //     await page.locator('#Duration').fill('10 days');
// //     await page.waitForTimeout(1000);
// //     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// //     await page.locator('#Duration').press('Enter');
// //     await page.waitForTimeout(200);
// //     // Perform undo via toolbar
// //    await page.locator('#Gantt_undo').click();
// //     await page.waitForTimeout(1000);
// //     // Screenshot validation
// //     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// //     // Perform Redo via toolbar
// //     await page.locator('#Gantt_redo').click();
// //     await page.waitForTimeout(1000);
// //     // Screenshot validation
// //     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// // });

// test('UET-531', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Double-click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
//     await page.waitForTimeout(500);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Change the Progress value
//     await page.locator('#Progress').fill('20');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.locator('#Progress').press('Enter');
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-532', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //click on the 3rd record
//     await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
//     await page.waitForTimeout(500);
//     //Click the Edit option in the toolbar
//     await page.getByRole('button', { name: 'Edit' }).click();
//     await page.waitForTimeout(300);
//     //Navigate to dependency tab
//     await page.getByLabel('Task Information').getByText('Dependency').click();
//     await page.waitForTimeout(500);
//     //Remove predecessor value
//     await page.getByRole('gridcell', { name: '-Child Task 1' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(200);
//     // Perform undo via toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.waitForTimeout(200);
//     // Perform Redo via toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-533', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(600);
    //dblclick on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').dblclick();
    await page.waitForTimeout(500);
    //Cancel the edit by pressing Esc
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').press('Escape');
    await page.waitForTimeout(1200);
    //Screenshot validation-undoRedo Disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-534', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    // Double-click on the StartDate field of 3ed record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[13]').click();
    await page.waitForTimeout(300);
    //Cancel the edit by pressing Esc
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[13]').press('Escape');
    await page.waitForTimeout(1000);
    //Screenshot validation-undoRedo Disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-535', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Add a new task via toolbar
    await page.locator('(//span[text()="Add"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//button[text()="Save"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-536', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Add a new task via insert key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').press('Insert');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-537', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Select the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click();
    await page.waitForTimeout(300);
    // Press the Delete key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').press('Delete');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-538', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Select the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click();
    await page.waitForTimeout(300);
    //Delete a task via Toolbar Delete
    await page.locator('(//span[text()="Delete"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-539', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(600);
    // Perform Taskbar Progress Right Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1480, 202);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-540', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    // Perform Taskbar Progress Left Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1201, 197);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-541', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Right Resize action for the 2nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-right-resizer") and contains(@class,"e-icon")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1714, 205);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-542', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     // Perform Taskbar Left Resize action for the 2nd record
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-taskbar-left-resizer") and contains(@class,"e-icon")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(1155, 197);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-543', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    // Perform Taskbar Progress Right Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-gantt-child-progressbar-inner-div")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-gantt-child-progressbar-inner-div")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1377, 198);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-544', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    // Draw a connector line from Task 2 to Task 7 with FS (Finish-to-Start) dependency type
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[7]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-545', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Click ZoomIn toolbar options
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-546', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Click Zoom out toolbar options
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-547', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Click Zoom to fit toolbar options
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-548', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Click Previous timespan toolbar options
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-549', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(600);
    //Click Next timespan toolbar options
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-550', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Resize the splitter towards the Left
//     await page.locator('.e-split-bar').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(1060, 291);
//     await page.mouse.move(460, 268);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-551', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(600);
    //Perform the Search action via the toolbar
    await page.getByRole('textbox', { name: 'textbox' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'textbox' }).fill('Child Task 2');
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'textbox' }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.waitForTimeout(500);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-552', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Click Collapse all toolbar options
    await page.locator('//span[text()="Collapse all"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-553', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Click Collapse All toolbar options
    await page.locator('//span[text()="Collapse all"]').click();
    await page.waitForTimeout(300);
    //Click Expand All toolbar options
    await page.locator('//span[text()="Expand all"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-554', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Collapse the 1st record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-555', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Collapse the 1st record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    //Expand the 1st record
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-556', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Click the Filter icon in the Task Name field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
//     await page.waitForTimeout(500);
//     // Select Starts With, enter 'Obtain Permits', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Value' }).fill('Child Task 4');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-557', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Click the Filter icon in the start date field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[3]').click();
//     await page.waitForTimeout(500);
//     //Select Equal, enter '4/2/2025', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Choose a Date' }).fill('4/2/2025');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-558', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Click the Filter icon in the Progress field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[5]').click();
//     await page.waitForTimeout(500);
//     //Select Greater than, enter '50', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Operator' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('combobox', { name: 'Enter the value' }).fill('50');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-559', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Click the Event Name column header to perform a Sort action
    await page.getByText('Name').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-560', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "expando" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    //Click the startDate column header to perform a Sort action
    await page.getByText('Start Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-561', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Click the EndDate column header to perform a Sort action
    await page.getByText('End Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-562', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Open the Column Menu for the Event name
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(500);
    //Select Sort Ascending
    await page.getByRole('menuitem', { name: 'Sort Ascending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-563', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    // Open the Column Menu for the Event name
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(500);
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-564', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    //Navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-565', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    //Navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    await page.waitForTimeout(300);
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Name' }).click();
    await page.waitForTimeout(300);
    // Check Task Name column 
    await page.getByRole('menuitem', { name: 'Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-566', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Resize Event Name column
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(556, 127);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-567', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Resize ID column
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(556, 127);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-568', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Drag the Task Name column and place it next to the Progress column
//     const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[2]');
//     const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[5]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-569', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Drag the progress column and place it next to startdate column
//     const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[5]');
//     const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[3]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-570', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    // Drag Task-7 and drop it below Task-2
    await page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(59, 378);
    await page.mouse.move(47, 217);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-571', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    // Drag Task-7 and drop it above Task-3
    await page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(59, 378);
    await page.mouse.move(47, 217);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-572', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "dynamic object" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    //Drag Task-7 and drop it as a child of  Task-3
    const src = page.locator('(//div[contains(@class,"e-rowcelldrag")])[7]');
    const dst = page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//.....................................Unscheduled Task............................................................

test('UET-573', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    // Select Above from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Above' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-574', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    // Select Below from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Below' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-575', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    // Select Milestone from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Milestone' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-576', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    // Select Milestone from the Add item in the context menu
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Milestone' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-577', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(800);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(500);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[9]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //  Select "Delete Task" from the context menu.
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Delete Task' }).click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-579', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[10]').dblclick();
    await page.waitForTimeout(300);
    //Change the task name value
    await page.locator('#DataItem___TaskName').fill('Updated Name');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-580', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').dblclick();
    await page.waitForTimeout(300);
    //Change the task name value
    await page.locator('#DataItem___StartDate').fill('12/22/2025');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___StartDate').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-581', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Right-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').dblclick();
    await page.waitForTimeout(300);
    //Change the task name value.
    await page.locator('#DataItem___EndDate').fill('1/1/2026');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___EndDate').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-582', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell e-templatecell  e-leftalign")])[3]').dblclick();
    await page.waitForTimeout(500);
    //Change the Duration value
    await page.locator('#DataItem___Duration').fill('10 days');
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Duration').press('Enter');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-583', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click();
    await page.waitForTimeout(500);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the Task Name value
    await page.locator('#TaskName').fill('Updated Name');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#TaskName').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-584', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click();
    await page.waitForTimeout(500);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the startDate value
    await page.locator('#StartDate').fill('12/22/2025');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#StartDate').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-585', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click();
    await page.waitForTimeout(500);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the EndDate value
    await page.locator('#EndDate').fill('1/1/2026');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#EndDate').press('Enter');
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-586', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(800);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Double-click on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').click();
    await page.waitForTimeout(500);
    //Click the Edit option in the toolbar
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    //Change the Duration value
    await page.locator('#Duration').fill('10 days');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('(//button[text()="Save"])').click();
    await page.waitForTimeout(200);
    // Perform undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Redo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-587', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //dblclick on the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[10]').dblclick();
    await page.waitForTimeout(500);
    //Cancel the edit by pressing Esc
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[10]').press('Escape');
    await page.waitForTimeout(1000);
    //Screenshot validation-undoRedo Disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-588', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    // Double-click on the StartDate field of 3ed record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[11]').dblclick();
    await page.waitForTimeout(300);
    //Cancel the edit by cancel
    await page.locator('(//span[text()="Cancel"])').click();
    await page.waitForTimeout(1000);
    //Screenshot validation-undoRedo Disable
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('UET-589', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Add a new task via toolbar
    await page.locator('(//span[text()="Add"])').click();
    await page.waitForTimeout(300);
    await page.locator('(//button[text()="Save"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-590', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Add a new task via insert key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[1]').press('Insert');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-591', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Select the 2rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[5]').click();
    await page.waitForTimeout(300);
    // Press the Delete key
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[5]').press('Delete');
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-592', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Select the 3rd record
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[5]').click();
    await page.waitForTimeout(300);
    //Delete a task via Toolbar Delete
    await page.locator('(//span[text()="Delete"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-593', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(2000);
    // Perform Taskbar Progress Right Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(700);
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1135, 234);
    await page.mouse.move(1266, 241);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-594', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    // Perform Taskbar Progress Right Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(700);
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1135, 234);
    await page.mouse.move(1266, 241);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Taskbar Progress Left Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(700);
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1266, 241);
    await page.mouse.move(1135, 234);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-595', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    // Perform Taskbar Right Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').hover();
    await page.waitForTimeout(700);
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer e-icon")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1291, 232);
    await page.mouse.move(1528, 238);
    await page.waitForTimeout(700);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-596', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    // Perform Taskbar left Resize action for the 2nd record
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').hover();
    await page.waitForTimeout(700);
    await page.locator('(//div[contains(@class,"e-taskbar-left-resizer e-icon")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1137, 234);
    await page.mouse.move(1003, 226);
    await page.waitForTimeout(700);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-597', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    // Perform Taskbar Drag action for the 2nd record
    await page.locator('(//div[contains(@class,"e-gantt-child-progressbar-inner-div")])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//div[contains(@class,"e-gantt-child-progressbar-inner-div")])[1]').hover();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1380, 202);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-598', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Click ZoomIn toolbar options
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-599', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Click Zoom out toolbar options
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-600', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Click Zoom to fit toolbar options
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-601', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Click Previous timespan toolbar options
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-602', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Click Next timespan toolbar options
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-603', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "Unscheduled" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Unscheduled' }).click();
//     await page.waitForTimeout(800);
//     //Resize the splitter towards the Left
//     await page.locator('.e-split-bar').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(1060, 291);
//     await page.mouse.move(460, 268);
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-604', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Perform the Search action via the toolbar
    await page.getByRole('textbox', { name: 'textbox' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'textbox' }).fill('Feasibility Study');
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'textbox' }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-605', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Click Collapse all toolbar options
    await page.locator('//span[text()="Collapse all"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-606', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Click Collapse All toolbar options
    await page.locator('//span[text()="Collapse all"]').click();
    await page.waitForTimeout(300);
    //Click Expand All toolbar options
    await page.locator('//span[text()="Expand all"]').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-607', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Collapse the 1st record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-608', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Collapse the 1st record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    //Expand the 1st record
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    // Perform Undo via toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-609', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//      //Select "Unscheduled" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Unscheduled' }).click();
//     await page.waitForTimeout(800);
//     //Click the Filter icon in the Task Name field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
//     await page.waitForTimeout(500);
//     // Select Starts With, enter 'Obtain Permits', and click the Filter option.
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Filter Value' }).fill('Feasibility Study');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-610', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(1000);
//     //Select "dynamic object" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'dynamic object' }).click();
//     await page.waitForTimeout(500);
//     //Click the Filter icon in the start date field
//     await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[4]').click();
//     await page.waitForTimeout(500);
//     //Select Equal, enter '4/2/2025', and click the Filter option
//     await page.getByRole('menuitem', { name: 'Filter' }).hover();
//     await page.waitForTimeout(500);
//     await page.getByRole('combobox', { name: 'Choose a Date' }).fill('12/26/2025');
//     await page.waitForTimeout(200);
//     await page.getByRole('button', { name: 'Filter' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-611', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Click the Event Name column header to perform a Sort action
    await page.getByText('Event Name').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-612', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Click the startDate column header to perform a Sort action
    await page.getByText('Start Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-613', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Click the EndDate column header to perform a Sort action
    await page.getByText('End Date').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-614', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Open the Column Menu for the Event name
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(500);
    //Select Sort Ascending
    await page.getByRole('menuitem', { name: 'Sort Ascending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-615', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    // Open the Column Menu for the Event name
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(500);
    //Select Sort Descending
    await page.getByRole('menuitem', { name: 'Sort Descending' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-616', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    //Navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Event Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-617', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    // Open the Column Menu for the Task Name column
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu ")])[2]').click();
    await page.waitForTimeout(300);
    //Navigate to Columns
    await page.getByRole('menuitem', { name: 'Columns', exact: true }).click();
    await page.waitForTimeout(300);
    // UnCheck Task Name column 
    await page.getByRole('menuitem', { name: 'Event Name' }).click();
    await page.waitForTimeout(300);
    // Check Task Name column 
    await page.getByRole('menuitem', { name: 'Event Name' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-618', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "Unscheduled" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Unscheduled' }).click();
//     await page.waitForTimeout(800);
//     //Resize Event Name column
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(557,116);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-619', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "Unscheduled" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Unscheduled' }).click();
//     await page.waitForTimeout(800);
//     //Resize ID column
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').scrollIntoViewIfNeeded();
//     await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').hover();
//     await page.waitForTimeout(200);
//     await page.mouse.down();
//     await page.waitForTimeout(200);
//     await page.mouse.move(434,127);
//     await page.waitForTimeout(300);
//     await page.mouse.up();
//     await page.waitForTimeout(500);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(600);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-620', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo/undo-redo');
//     await page.waitForTimeout(800);
//     //Select "Unscheduled" from the dropdown
//     await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
//     await page.waitForTimeout(300);
//     await page.getByRole('option', { name: 'Unscheduled' }).click();
//     await page.waitForTimeout(800);
//     //Drag the Task Name column and place it next to the Duration column
//     const src = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[2]');
//     const dst = page.locator('(//th[contains(@class,"e-headercell e-leftalign")])[4]');
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Undo via the toolbar
//    await page.locator('#Gantt_undo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Perform Redo via the toolbar
//     await page.locator('#Gantt_redo').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('UET-621', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    // Drag Task-9 and drop it below Task-2
    await page.locator('(//div[contains(@class,"e-rowcelldrag")])[9]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(62, 450);
    await page.mouse.move(47, 217);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-622', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    // Drag Task-9 and drop it above Task-3
    await page.locator('(//div[contains(@class,"e-rowcelldrag")])[9]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(62, 450);
    await page.mouse.move(47, 217);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UET-623', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/UndoRedo/undo-redo');
    await page.waitForTimeout(1000);
    //Select "Unscheduled" from the dropdown
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Unscheduled' }).click();
    await page.waitForTimeout(800);
    //Drag Task-9 and drop it as a child of  Task-3
    const src = page.locator('(//div[contains(@class,"e-rowcelldrag")])[9]');
    const dst = page.locator('(//div[contains(@class,"e-rowcelldrag")])[3]');
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Undo via the toolbar
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Perform Redo via the toolbar
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('UET-634', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Click Update UndoRedo steps count button
//     await page.getByRole('button', { name: 'Update UndoRedo steps count' }).click();
//     await page.waitForTimeout(300);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-635', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Click the Update UndoRedoActions
//     await page.getByRole('button', { name: 'Update UndoRedoActions' }).click();
//     await page.waitForTimeout(300);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('UET-636', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/UndoRedo');
//     await page.waitForTimeout(1000);
//     //Click the Disable Undo Redo
//     await page.getByRole('button', { name: 'Disable Undo Redo' }).click();
//     await page.waitForTimeout(300);
//     //Screenshot validation
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });