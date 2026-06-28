import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-UndoRedo initial load', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add task and undo', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the add button 
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(800);
    //Click the save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Add task and redo', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the add button 
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(800);
    //Click the save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Add 5 new tasks and undo all 5 tasks', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Add' }).click();
        await page.waitForTimeout(800);
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(800);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo all 5 tasks
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Undo', exact: true }).click();
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Add 5 new task and redo all 5 task', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Add' }).click();
        await page.waitForTimeout(800);
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(800);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo all 5 tasks
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Undo', exact: true }).click();
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo all 5 tasks
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Redo', exact: true }).click();
        await page.waitForTimeout(200);
    }

    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Add task and undo using Ctrl + Z', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the add button 
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(800);
    //Click the save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Add task and redo using Ctrl + Y', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the add button 
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(800);
    //Click the save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
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

test('8-Edit Parent task name and verify undo/redo', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    // Edit task by double-clicking on a cell
    await page.getByLabel('Sprint development Column').getByText('Sprint development').dblclick();
    await page.getByRole('textbox', { name: 'textbox' }).fill('Modified Task Name');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo the edit
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo the edit
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Edit Parent task name and verify undo/redo using keys', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    // Edit task by double-clicking on a cell
    await page.getByLabel('Sprint development Column').getByText('Sprint development').dblclick();
    await page.getByRole('textbox', { name: 'textbox' }).fill('Modified Task Name');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
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


test('10-Edit child task name and verify undo/redo', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    // Edit task by double-clicking on a cell
    await page.getByLabel('Stakeholder interviews Column').getByText('Stakeholder interviews').dblclick();
    await page.getByRole('textbox', { name: 'textbox' }).fill('Modified Task Name');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo the edit
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo the edit
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Edit child task name and verify undo/redo using keys', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    // Edit task by double-clicking on a cell
    await page.getByLabel('Stakeholder interviews Column').getByText('Stakeholder interviews').dblclick();
    await page.getByRole('textbox', { name: 'textbox' }).fill('Modified Task Name');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
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


test('12-Move splitter to the right', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Dragging the parent task.
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(678, 464);
    await page.mouse.move(1001, 476);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Move splitter to the right and verify', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Dragging the parent task.
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(678, 464);
    await page.mouse.move(1001, 476);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo the edit
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Edit Parent start date and verify undo/redo', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Dragging the parent task.
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(678, 464);
    await page.mouse.move(1001, 476);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Edit task by double-clicking on a cell
    await page.getByRole('gridcell', { name: '/3/2025' }).first().dblclick();
    await page.waitForTimeout(200);
    await page.getByRole('combobox', { name: 'datepicker' }).fill('11/28/2025');
    await page.waitForTimeout(200);
    await page.getByRole('combobox', { name: 'datepicker' }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo the edit
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo the edit
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Edit Parent start date and verify undo/redo using keys', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Dragging the parent task.
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(678, 464);
    await page.mouse.move(1001, 476);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Edit task by double-clicking on a cell
    await page.getByRole('gridcell', { name: '/3/2025' }).first().dblclick();
    await page.waitForTimeout(200);
    await page.getByRole('combobox', { name: 'datepicker' }).fill('11/28/2025');
    await page.waitForTimeout(200);
    await page.getByRole('combobox', { name: 'datepicker' }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
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

test('16-Edit child start date and verify undo/redo', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Dragging the parent task.
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(678, 464);
    await page.mouse.move(1001, 476);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Edit task by double-clicking on a cell
    await page.getByRole('gridcell', { name: '/28/2025' }).nth(1).dblclick();
    await page.waitForTimeout(200);
    await page.getByRole('combobox', { name: 'datepicker' }).fill('11/28/2025');
    await page.waitForTimeout(200);
    await page.getByRole('combobox', { name: 'datepicker' }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo the edit
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo the edit
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Edit child start date and verify undo/redo using keys', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Dragging the parent task.
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(678, 464);
    await page.mouse.move(1001, 476);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Edit task by double-clicking on a cell
    await page.getByRole('gridcell', { name: '/3/2025' }).nth(1).dblclick();
    await page.waitForTimeout(200);
    await page.getByRole('combobox', { name: 'datepicker' }).fill('11/28/2025');
    await page.waitForTimeout(200);
    await page.getByRole('combobox', { name: 'datepicker' }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
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


test('18-Edit end date and verify undo redo', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Dragging the parent task.
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(678, 464);
    await page.mouse.move(1001, 476);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.sb-demo-section').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Edit task by double-clicking on a cell
    await page.locator('(//td[text()="11/4/2025"])[3]').dblclick();
    await page.waitForTimeout(200);
    await page.locator('#DataItem___EndDate').fill('11/17/2025');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.sb-demo-section').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo the edit
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.sb-demo-section').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo the edit
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.sb-demo-section').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Edit  end date and verify undo redo using keys', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Dragging the parent task.
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(678, 464);
    await page.mouse.move(1001, 476);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Edit task by double-clicking on a cell
    await page.locator('(//td[text()="11/4/2025"])[3]').dblclick();
    await page.waitForTimeout(200);
    await page.locator('#DataItem___EndDate').fill('11/17/2025');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
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

test('20-Move splitter to the right and verify UndoRedo', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'undo-redo?theme=fluent2');
    await page.waitForTimeout(2000);
    //Dragging the parent task.
    await page.locator('.e-split-bar').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(678, 464);
    await page.mouse.move(1001, 476);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo the edit
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo the edit
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.sb-demo-section').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


