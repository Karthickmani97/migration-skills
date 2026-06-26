import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

// test('1-Undo Redo intitial load in customadaptor', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/customadaptor');
//     await page.waitForTimeout(600);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('2-Undo Redo intitial load in dynamic-data', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
//     await page.waitForTimeout(600);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('3-Undo Redo intitial load in default', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/default');
//     await page.waitForTimeout(600);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('4-Undo Redo intitial load in resource', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/resource');
//     await page.waitForTimeout(600);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('5-Undo Redo intitial load in rtl', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/rtl');
//     await page.waitForTimeout(600);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('6-Undo Redo intitial load in virtual-scroll', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/virtual-scroll');
//     await page.waitForTimeout(600);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('7-Add task and undo', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/customadaptor');
//     await page.waitForTimeout(1000);
//     //Click the add button 
//     await page.getByRole('button', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     //Click the save
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Click the undo
//     await page.getByRole('button', { name: 'Undo' }).nth(1).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('8-Add task and redo', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/customadaptor');
//     await page.waitForTimeout(1000);
//     //Click the add button 
//     await page.getByRole('button', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     //Click the save
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Click the undo
//     await page.getByRole('button', { name: 'Undo' }).nth(1).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Click the Redo
//     await page.getByRole('button', { name: 'Redo'}).nth(1).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('9-Add 5 new tasks and undo all 5 tasks', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/customadaptor');
//     await page.waitForTimeout(1000);
//     // Add 5 tasks in sequence
//     for (let i = 0; i < 5; i++) {
//         await page.getByRole('button', { name: 'Add' }).click();
//         await page.waitForTimeout(300);
//         await page.getByRole('button', { name: 'Save' }).click();
//         await page.waitForTimeout(300);
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Undo all 5 tasks
//     for (let i = 0; i < 5; i++) {
//         await page.getByRole('button', { name: 'Undo' }).nth(1).click();
//         await page.waitForTimeout(200);
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('10-Add 5 new task and redo all 5 task', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/customadaptor');
//     await page.waitForTimeout(1000);
//     // Add 5 tasks in sequence
//     for (let i = 0; i < 5; i++) {
//         await page.getByRole('button', { name: 'Add' }).click();
//         await page.waitForTimeout(300);
//         await page.getByRole('button', { name: 'Save' }).click();
//         await page.waitForTimeout(300);
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Undo all 5 tasks
//     for (let i = 0; i < 5; i++) {
//         await page.getByRole('button', { name: 'Undo' }).nth(1).click();
//         await page.waitForTimeout(200);
//     }
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Redo all 5 tasks
//     for (let i = 0; i < 5; i++) {
//        await page.getByRole('button', { name: 'Redo'}).nth(1).click();
//         await page.waitForTimeout(200);
//     }

//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('11-Add task and undo using Ctrl + Z', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/customadaptor');
//     await page.waitForTimeout(1000);
//     //Click the add button 
//     await page.getByRole('button', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     //Click the save
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Undo using Ctrl + Z
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyZ');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('12-Add task and redo using Ctrl + Y', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/customadaptor');
//     await page.waitForTimeout(1000);
//     //Click the add 
//     await page.getByRole('button', { name: 'Add' }).click();
//     await page.waitForTimeout(300);
//     //Click the save
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
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


test('13-Add task and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    ////Click the add and save
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Add task and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Click the add and save
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Add task and undo using Ctrl + Z', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Click the add button 
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
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

test('16-Add task and redo using Ctrl + Y', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Click the add 
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
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

test('17-Add 5 new tasks and undo all 5 tasks', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Add' }).click();
        await page.waitForTimeout(300);
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(300);
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

test('18-Add 5 new task and redo all 5 task', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Add' }).click();
        await page.waitForTimeout(300);
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(300);
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

test('19-Add 5 new tasks and undo all 5 tasks', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Add' }).click();
        await page.waitForTimeout(300);
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(300);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo all 5 tasks
    for (let i = 0; i < 5; i++) {
        // Undo using Ctrl + Z
        await page.keyboard.down('Control');
        await page.keyboard.press('KeyZ');
        await page.keyboard.up('Control');
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Add 5 new task and redo all 5 task', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Add' }).click();
        await page.waitForTimeout(300);
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(300);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo all 5 tasks
    for (let i = 0; i < 5; i++) {
        // Undo using Ctrl + Z
        await page.keyboard.down('Control');
        await page.keyboard.press('KeyZ');
        await page.keyboard.up('Control');
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo all 5 tasks
    for (let i = 0; i < 5; i++) {
        // Redo using Ctrl + y
        await page.keyboard.down('Control');
        await page.keyboard.press('KeyY');
        await page.keyboard.up('Control');
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Edit task name and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().dblclick();
    await page.waitForTimeout(300);
    await page.locator('input[type="text"]').first().fill('Updated Child Task 1');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Edit task name and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().dblclick();
    await page.waitForTimeout(300);
    await page.locator('input[type="text"]').first().fill('Updated Child Task 1');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Edit task name and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().dblclick();
    await page.waitForTimeout(300);
    await page.locator('input[type="text"]').first().fill('Updated Child Task 1');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Edit task name and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().dblclick();
    await page.waitForTimeout(300);
    await page.locator('input[type="text"]').first().fill('Updated Child Task 1');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
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

test('25-Edit task name and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Parent task 1")').first().dblclick();
    await page.waitForTimeout(300);
    await page.locator('input[type="text"]').first().fill('Updated Parent Task 1');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Edit task name and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Parent task 1")').first().dblclick();
    await page.waitForTimeout(300);
    await page.locator('input[type="text"]').first().fill('Updated Parent Task 1');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Edit task name and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Parent task 1")').first().dblclick();
    await page.waitForTimeout(300);
    await page.locator('input[type="text"]').first().fill('Updated Parent Task 1');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Edit task name and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Parent task 1")').first().dblclick();
    await page.waitForTimeout(300);
    await page.locator('input[type="text"]').first().fill('Updated Parent Task 1');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
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

test('29-Edit task in dialog and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Task Name' }).fill('Updated Child Task 1');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('1/15/2021');
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).fill('10 days');
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' })
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' }).fill('80');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Edit task in dialog and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Task Name' }).fill('Updated Child Task 1');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('1/15/2021');
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).fill('10 days');
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' })
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' }).fill('80');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo 
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Edit task name and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Task Name' }).fill('Updated Child Task 1');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('1/15/2021');
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).fill('10 days');
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' })
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' }).fill('80');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Edit task name and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Task Name' }).fill('Updated Child Task 1');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('1/15/2021');
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).fill('10 days');
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' })
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' }).fill('80');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Edit task in dialog and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Task Name' }).fill('Parent Child Task 1');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('1/15/2021');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Edit task in dialog and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Task Name' }).fill('Updated Child Task 1');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('1/15/2021');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo 
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Edit task name and Undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Task Name' }).fill('Updated Child Task 1');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('1/15/2021');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Edit task name and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Task Name' }).fill('Updated Child Task 1');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('1/15/2021');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-click cancel in dialog', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-click delete and undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-click delete and undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ok' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('40-click delete and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ok' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo 
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('41-click delete and undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ok' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('42-click delete and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ok' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo 
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-click delete and undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ok' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('44-click delete and Redo undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.locator('td:has-text("Parent task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ok' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-click delete and undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ok' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('46-click delete and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ok' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo 
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-click delete and undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ok' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-click delete and Redo undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.locator('td:has-text("Child task 1")').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ok' }).click();
    await page.waitForTimeout(200);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-click collapse all and undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('50-click collapse all and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo 
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-click collapse all and undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-click collapse all and Redo undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('53-click collapse and Expand all and undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('54-click collapse and Expand all', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo 
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('55-click collapse and Expand all undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('56-click collapse and Expand all Redo undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('57-click collapse of the first parent,undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('58-click collapse of the first parent,Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo 
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('59-click collapse of the first parent, Redo undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('60-click collapse of the first parent, Redo undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('61-click collapse and Expand of the first parent,undo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('62-click collapse and Expand  of the first parent,Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo 
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('63-click collapse and Expand  of the first parent, Redo undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('64-click collapse and Expand  of the first parent, Redo undo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(300);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('65-click collapse all task and undo all 5 task', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.locator('.e-icons.e-treegridexpand').first().click();
        await page.waitForTimeout(300);
    }
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo all 5 tasks
    for (let i = 0; i < 5; i++) {
        await page.locator('#Gantt_undo').click();
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('66-click collapse all task and Redo all 5 task', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.locator('.e-icons.e-treegridexpand').first().click();
        await page.waitForTimeout(300);
    }
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo all 5 tasks
    for (let i = 0; i < 5; i++) {
        await page.locator('#Gantt_undo').click();
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo all 5 tasks
    for (let i = 0; i < 5; i++) {
        await page.locator('#Gantt_redo').click();
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('67-click collapse expand all task and undo all 5 task using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    // Add 5 tasks in sequence
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridexpand').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-icons.e-treegridcollapse').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridcollapse').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridcollapse').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridcollapse').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+z');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+z');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+z');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+z');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+z');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('68-click collapse expand all task and redo all 5 task using key', async ({ page }) => {
    // Add 5 tasks in sequence
    await page.goto('http://localhost:5004/undo-redo/dynamic-data');
    await page.waitForTimeout(500);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridexpand').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-icons.e-treegridcollapse').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridcollapse').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridcollapse').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridcollapse').first().click();
    await page.waitForTimeout(300);
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+z');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+z');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+z');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+z');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+z');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+y');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+y');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+y');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+y');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Parent task 1 Column Header' }).press('ControlOrMeta+y');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('69- Perform Sort operation and undo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('columnheader', { name: 'Task ID' }).click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-sortfilterdiv').first().click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('70- Perform Sort operation and Redo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('columnheader', { name: 'Task ID' }).click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-sortfilterdiv').first().click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('71- Perform mulit Sort operation and Redo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    await page.getByRole('columnheader', { name: 'Task ID' }).click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('columnheader', { name: 'Task Name' }).click({
        modifiers: ['ControlOrMeta']
    });
    await page.getByRole('columnheader', { name: 'Task ID ' }).click({
        modifiers: ['ControlOrMeta']
    });
    await page.getByRole('columnheader', { name: 'Task Name ' }).click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(300);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(300);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('72-mixed case of Undo & Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/dynamic-data');
    await page.waitForTimeout(1000);
    //Click the add and save
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(300);
    ///Click the add and save
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('gridcell', { name: 'New Task 22 Column Header' }).click();
    //Click the Undo
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //xpect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Edit the task in dialog
    await page.getByRole('gridcell', { name: 'New Task 21 Column Header' }).click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Task Name' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Task Name' }).fill('New Task all');
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('combobox', { name: 'Start Date' }).fill('1/15/2021');
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('textbox', { name: 'Duration' }).fill('5 day');
    await page.getByRole('spinbutton', { name: 'Progress' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('spinbutton', { name: 'Progress' }).fill('10');
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the undo and redo
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(300);
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(300);
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    //expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('73-Add task and Undo and Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the add and save
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.locator('#Gantt_undo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.locator('#Gantt_redo').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('74-Add task undo & redo using Ctrl + Y', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the add 
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
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

test('75-Add task and Undo and Redo using button', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the add and save
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('76-Add 5 new task Undo & redo all 5 task', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Add' }).click();
        await page.waitForTimeout(300);
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(300);
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

test('77-Add 5 new task Undo & redo all 5 task using button', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Add' }).click();
        await page.waitForTimeout(300);
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(300);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo all 5 tasks
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'UndoMethod' }).click();
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo all 5 tasks
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'RedoMethod' }).click();
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('78-Add 5 new task Undo & redo all 5 task using Key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    // Add 5 tasks in sequence
    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Add' }).click();
        await page.waitForTimeout(300);
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(300);
    }
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo all 5 tasks
    for (let i = 0; i < 5; i++) {
        // Undo using Ctrl + Z
        await page.keyboard.down('Control');
        await page.keyboard.press('KeyZ');
        await page.keyboard.up('Control');
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo all 5 tasks
    for (let i = 0; i < 5; i++) {
        // Undo using Ctrl + Y
        await page.keyboard.down('Control');
        await page.keyboard.press('KeyY');
        await page.keyboard.up('Control');
        await page.waitForTimeout(200);
    }
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('79-Edit task name Undo & Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).dblclick();
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).getByLabel('textbox').press('ControlOrMeta+a');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).getByLabel('textbox').fill('Updated');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('80-Edit task name Undo & Redo using button', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).dblclick();
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).getByLabel('textbox').press('ControlOrMeta+a');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).getByLabel('textbox').fill('Updated');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('81-Edit task name Undo & Redo using key', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Edit the Parent first task
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).dblclick();
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).getByLabel('textbox').press('ControlOrMeta+a');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).getByLabel('textbox').fill('Updated');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('82-Edit task name Undo & Redo', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.getByRole('gridcell', { name: 'Identify Site location Column Header Job Name' }).dblclick();
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Identify Site location Column Header Job Name' }).getByLabel('textbox').press('ControlOrMeta+a');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Identify Site location Column Header Job Name' }).getByLabel('textbox').fill('Updated child');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('83-Edit task name Undo & Redo using button', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.getByRole('gridcell', { name: 'Identify Site location Column Header Job Name' }).dblclick();
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Identify Site location Column Header Job Name' }).getByLabel('textbox').press('ControlOrMeta+a');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Identify Site location Column Header Job Name' }).getByLabel('textbox').fill('Updated child');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('84-Edit task name Undo & Redo using button', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Edit the chid first task
    await page.getByRole('gridcell', { name: 'Identify Site location Column Header Job Name' }).dblclick();
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Identify Site location Column Header Job Name' }).getByLabel('textbox').press('ControlOrMeta+a');
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Identify Site location Column Header Job Name' }).getByLabel('textbox').fill('Updated child');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo using Ctrl + Y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('85-Edit task name Undo & Redo and click Disable', async ({ page }) => {
    // Navigate to the undo-redo page
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1200);
    const parentTaskLocator = page.locator('(//span[text()="Project initiation"])[1]');
    const childTaskLocator = page.locator('(//span[text()="Identify Site location"])[1]');
    const taskNameInput = page.locator('#DataItem___TaskName');
    const undoBtn = page.locator('(//span[text()="Undo"])[1]');
    const redoBtn = page.locator('(//button[text()="RedoMethod"])[1]');
    const disableBtn = page.locator('(//button[text()="Disable Undo Redo"])[1]');
    const updateBtn = page.locator('(//span[text()="Update"])[1]');
    // Step 1: Verify initial state - Parent task exists
    await expect(parentTaskLocator).toBeVisible();
    await page.waitForTimeout(500);
    // Step 2: Edit parent task name
    await parentTaskLocator.dblclick();
    await page.waitForTimeout(1000);
    await expect(taskNameInput).toBeVisible();
    await taskNameInput.fill('Updated Parent');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Step 3: Assertion - Parent task name updated
    await expect(page.locator('(//span[text()="Updated Parent"])[1]')).toBeVisible();
    await expect(parentTaskLocator).not.toBeVisible();
    await page.waitForTimeout(500);
    // Step 4: Edit child task name
    await childTaskLocator.dblclick();
    await page.waitForTimeout(600);
    await expect(taskNameInput).toBeVisible();
    await taskNameInput.fill('Updated Child');
    await updateBtn.click();
    await page.waitForTimeout(1000);
    // Step 5: Assertion - Child task name updated
    await expect(page.locator('(//span[text()="Updated Child"])[1]')).toBeVisible();
    await expect(childTaskLocator).not.toBeVisible();
    await page.waitForTimeout(500);
    // Step 6: Assertion - Both updates are reflected
    await expect(page.locator('(//span[text()="Updated Parent"])[1]')).toBeVisible();
    await expect(page.locator('(//span[text()="Updated Child"])[1]')).toBeVisible();
    await expect(undoBtn).toBeEnabled();
    await page.waitForTimeout(500);
    // Step 7: Undo the child edit
    await undoBtn.click();
    await page.waitForTimeout(1000);
    // Step 8: Assertion - Child edit reverted, parent still updated
    await expect(childTaskLocator).toBeVisible();
    await expect(page.locator('(//span[text()="Updated Child"])[1]')).not.toBeVisible();
    await expect(page.locator('(//span[text()="Updated Parent"])[1]')).toBeVisible();
    await expect(redoBtn).toBeEnabled();
    await page.waitForTimeout(500);
    // Step 9: Redo the child edit
    await redoBtn.click();
    await page.waitForTimeout(1000);
    // Step 10: Assertion - Child edit restored
    await expect(page.locator('(//span[text()="Updated Child"])[1]')).toBeVisible();
    await expect(childTaskLocator).not.toBeVisible();
    await expect(page.locator('(//span[text()="Updated Parent"])[1]')).toBeVisible();
    await page.waitForTimeout(500);
    // Step 11: Undo again (child edit)
    await undoBtn.click();
    await page.waitForTimeout(1000);
    // Step 12: Assertion - Child edit reverted again
    await expect(childTaskLocator).toBeVisible();
    await expect(page.locator('(//span[text()="Updated Child"])[1]')).not.toBeVisible();
    await expect(page.locator('(//span[text()="Updated Parent"])[1]')).toBeVisible();
    await page.waitForTimeout(500);
    // Step 13: Assertion - Disable button is available
    await expect(disableBtn).toBeVisible();
    await expect(disableBtn).toBeEnabled();
    await page.waitForTimeout(500);
    // Step 14: Click Disable Undo Redo
    await disableBtn.click();
    await page.waitForTimeout(1000);
    // Step 15: Assertion - Undo/Redo buttons are disabled
    await expect(undoBtn).toBeDisabled();
    await expect(page.locator('(//span[text()="Redo"])[1]')).toBeDisabled();
});


test('86 -Click delete and validate task removal', async ({ page }) => {
    // Step 1: Navigate to page
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForLoadState('networkidle');
    const rows = page.locator('.e-row');
    const deleteButton = page.locator('(//span[text()="Delete"])[1]');
    const gantt = page.locator('.e-gantt');
    // Step 2: Capture initial count
    const initialCount = await rows.count();
    // Step 3: Select parent task
    await page.locator('(//td[text()="1"])[1]').click();
    // Validation: ensure task selected UI is visible
    await expect(gantt).toBeVisible();
    // Step 4: Perform delete 3 times
    let previousCount = initialCount;
    for (let i = 1; i <= 3; i++) {
        await deleteButton.click();
        await page.waitForLoadState('networkidle');
        // Validation 1: Gantt still visible (UI check)
        await expect(gantt).toBeVisible();
        // Validation 2: Row count decreases
        const currentCount = await rows.count();
        expect(currentCount).toBeLessThan(previousCount);
        // Update for next iteration
        previousCount = currentCount;
    }
    // Final validation: Rows reduced from original
    const finalCount = await rows.count();
    expect(finalCount).toBeLessThan(initialCount);

});

// test('87-click delete and undo', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/default');
//     await page.waitForTimeout(1000);
//     //Edit the Parent first task
//     await page.getByRole('gridcell', { name: '1', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Click Undo 
//      await page.getByRole('button', { name: 'Undo', exact: true }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Click Undo 
//      await page.getByRole('button', { name: 'Undo', exact: true }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Click Undo 
//      await page.getByRole('button', { name: 'Undo', exact: true }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('88-click delete undo and Redo', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/undo-redo/default');
//     await page.waitForTimeout(1000);
//     //Edit the Parent first task
//     await page.getByRole('gridcell', { name: '1', exact: true }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.waitForTimeout(300);
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Click Undo 
//     await page.getByRole('button', { name: 'Undo', exact: true }).click();
//     await page.waitForTimeout(800);
//     // Click Undo 
//     await page.getByRole('button', { name: 'Undo', exact: true }).click();
//     await page.waitForTimeout(800);
//     // Click Undo 
//     await page.getByRole('button', { name: 'Undo', exact: true }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     // Click Redo
//     await page.getByRole('button', { name: 'Redo', exact: true }).click();
//     await page.waitForTimeout(800);
//     // Click Redo
//     await page.getByRole('button', { name: 'Redo', exact: true }).click();
//     await page.waitForTimeout(800);
//     // Click Redo
//     await page.getByRole('button', { name: 'Redo', exact: true }).click();
//     await page.waitForTimeout(3000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('89-click delete the child record ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Delete the Parent first task
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(600);
    await page.getByRole('gridcell', { name: 'Site Analyze Column Header' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(600);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('90 - Delete child records and validate undo functionality', async ({ page }) => {
    // Navigate
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(500);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    // Setup locators
    const rows = page.locator('.e-row');
    const deleteBtn = page.getByRole('button', { name: 'Delete' });
    const undoBtn = page.getByRole('button', { name: 'Undo', exact: true });
    const gantt = page.locator('.e-gantt');
    const identifyTaskCell = page.getByRole('gridcell', { name: 'Identify Site location Column' });
    const analyzeTaskCell = page.getByRole('gridcell', { name: 'Site Analyze Column Header' });
    const testTaskCell = page.getByRole('gridcell', { name: 'Perform soil test Column' });
    // Step 1: Assertion - Verify page loaded with Gantt visible
    await expect(gantt).toBeVisible();
    // Step 2: Assertion - Capture and validate initial row count
    const initialCount = await rows.count();
    expect(initialCount).toBeGreaterThan(0);
    // Step 3: Assertion - Verify all three tasks exist before deletion
    await expect(identifyTaskCell).toBeVisible();
    await expect(analyzeTaskCell).toBeVisible();
    await expect(testTaskCell).toBeVisible();
    // Step 4: Delete 'Identify Site location' task
    await identifyTaskCell.click();
    await page.waitForTimeout(300);
    await deleteBtn.click();
    await page.waitForTimeout(500);
    await page.waitForLoadState('networkidle');
    // Assertion: Gantt still visible, row count decreased
    await expect(gantt).toBeVisible();
    let currentCount = await rows.count();
    expect(currentCount).toBe(initialCount - 1);
    await expect(identifyTaskCell).not.toBeVisible();9
    // Step 5: Delete 'Site Analyze' task
    await analyzeTaskCell.click();
    await page.waitForTimeout(300);
    await deleteBtn.click();
    await page.waitForTimeout(500);
    await page.waitForLoadState('networkidle');
    // Assertion: Gantt visible, row count decreased further
    await expect(gantt).toBeVisible();
    currentCount = await rows.count();
    expect(currentCount).toBe(initialCount - 2);
    await expect(analyzeTaskCell).not.toBeVisible();
    // Step 6: Delete 'Perform soil test' task
    await testTaskCell.click();
    await page.waitForTimeout(300);
    await deleteBtn.click();
    await page.waitForTimeout(500);
    await page.waitForLoadState('networkidle');
    // Assertion: Gantt visible, all 3 tasks deleted
    await expect(gantt).toBeVisible();
    const finalDeleteCount = await rows.count();
    expect(finalDeleteCount).toBe(initialCount - 3);
    await expect(testTaskCell).not.toBeVisible();
    // Assertion: Verify all three tasks are now hidden
    await expect(identifyTaskCell).not.toBeVisible();
    await expect(analyzeTaskCell).not.toBeVisible();
    await expect(testTaskCell).not.toBeVisible();
    // Step 7: Undo first deletion (restores 'Perform soil test')
    await undoBtn.click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(300);
    // Assertion: Row count increased by 1
    currentCount = await rows.count();
    expect(currentCount).toBe(finalDeleteCount + 1);
    await expect(testTaskCell).toBeVisible();
    await expect(gantt).toBeVisible();
    // Step 8: Undo second deletion (restores 'Site Analyze')
    await undoBtn.click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(300);
    // Assertion: Row count increased by 1 more
    currentCount = await rows.count();
    expect(currentCount).toBe(initialCount - 1);
    await expect(analyzeTaskCell).toBeVisible();
    await expect(testTaskCell).toBeVisible();
    await expect(gantt).toBeVisible();
    // Step 9: Undo third deletion (restores 'Identify Site location')
    await undoBtn.click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(300);
    // Assertion: All tasks restored - row count back to initial
    currentCount = await rows.count();
    expect(currentCount).toBe(initialCount);
    // Final assertion: All three tasks are visible again
    await expect(identifyTaskCell).toBeVisible();
    await expect(analyzeTaskCell).toBeVisible();
    await expect(testTaskCell).toBeVisible();
    await expect(gantt).toBeVisible();
});

test('91-click delete the child record and Redo', async ({ page }) => {
    // Navigate
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(800);

    // Setup locators
    const identifyTaskCell = page.getByRole('gridcell', { name: 'Identify Site location Column' });
    const analyzeTaskCell = page.getByRole('gridcell', { name: 'Site Analyze Column Header' });
    const testTaskCell = page.getByRole('gridcell', { name: 'Perform soil test Column' });
    const deleteBtn = page.getByRole('button', { name: 'Delete' });
    const undoBtn = page.getByRole('button', { name: 'Undo', exact: true });
    const redoBtn = page.getByRole('button', { name: 'Redo', exact: true });
    const gantt = page.locator('.e-gantt');
    // Step 1: Delete 'Identify Site location' task
    await identifyTaskCell.click();
    await deleteBtn.click();
    await page.waitForTimeout(500);
    // Step 2: Delete 'Site Analyze' task
    await analyzeTaskCell.click();
    await deleteBtn.click();
    await page.waitForTimeout(500);
    // Step 3: Delete 'Perform soil test' task
    await testTaskCell.click();
    await deleteBtn.click();
    await page.waitForTimeout(800);
    // Assertion: Gantt visible after all deletions
    await expect(gantt).toBeVisible();
    // Step 4: Undo first deletion (restores 'Perform soil test')
    await undoBtn.click();
    await page.waitForTimeout(800);
    // Assertion: Gantt visible and UI state verified
    await expect(gantt).toBeVisible();
    // Step 5: Undo second deletion (restores 'Site Analyze')
    await undoBtn.click();
    await page.waitForTimeout(800);
    // Assertion: Gantt visible
    await expect(gantt).toBeVisible();
    // Step 6: Undo third deletion (restores 'Identify Site location')
    await undoBtn.click();
    await page.waitForTimeout(800);
    // Assertion: All tasks restored - Gantt visible and task cells reappear
    await expect(gantt).toBeVisible();
    await expect(identifyTaskCell).toBeVisible();
    await expect(analyzeTaskCell).toBeVisible();
    await expect(testTaskCell).toBeVisible();
    // Step 7: Redo first undo (deletes 'Perform soil test' again)
    await redoBtn.click();
    await page.waitForTimeout(800);
    // Assertion: Gantt visible
    await expect(gantt).toBeVisible();
    // Step 8: Redo second undo (deletes 'Site Analyze')
    await redoBtn.click();
    await page.waitForTimeout(800);
    // Assertion: Gantt visible
    await expect(gantt).toBeVisible();
    // Step 9: Redo third undo (deletes 'Identify Site location')
    await redoBtn.click();
    await page.waitForTimeout(800);
    // Assertion: All tasks deleted again - verify they're hidden
    await expect(gantt).toBeVisible();
    await expect(identifyTaskCell).not.toBeVisible();
    await expect(analyzeTaskCell).not.toBeVisible();
    await expect(testTaskCell).not.toBeVisible();
});

test('92-click delete the child record and undo using button ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(1000);
    //Delete the Parent first task
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Site Analyze Column Header' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('gridcell', { name: 'Perform soil test Column' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('93 -click delete the child record and Redo using button', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/undo-redo/default');
    await page.waitForTimeout(800);
    const identifySite = page.locator('//span[text()="Identify Site location"]');
    const siteAnalyze = page.locator('//span[text()="Site Analyze"]');
    const soilTest = page.locator('//span[text()="Perform soil test"]');
    const deleteBtn = page.locator('//span[text()="Delete"]');
    const undoBtn = page.locator('//span[text()="Undo"]');
    const redoBtn = page.locator('//span[text()="Redo"]');
    /* ---------- DELETE ACTIONS ---------- */
    await identifySite.first().click();
    await deleteBtn.click();
    await expect(identifySite).toHaveCount(0);
    await siteAnalyze.first().click();
    await deleteBtn.click();
    await expect(siteAnalyze).toHaveCount(0);
    await soilTest.first().click();
    await deleteBtn.click();
    await expect(soilTest).toHaveCount(0);
    /* ---------- UNDO ACTIONS ---------- */
    await undoBtn.click();
    await expect(soilTest.first()).toBeVisible();
    await undoBtn.click();
    await expect(siteAnalyze.first()).toBeVisible();
    await undoBtn.click();
    await expect(identifySite.first()).toBeVisible();
    /* ---------- REDO ACTIONS ---------- */
    await redoBtn.click();
    await expect(identifySite).toHaveCount(0);
    await redoBtn.click();
    await expect(siteAnalyze).toHaveCount(0);
    await redoBtn.click();
    await expect(soilTest).toHaveCount(0);
});


test('94 -Add Task fill the Dialog', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(500);
    const addBtn = page.locator('//span[text()="Add"]');
    const saveBtn = page.getByRole('button', { name: 'Save' });
    /* ---------- OPEN ADD DIALOG ---------- */
    await addBtn.click();
    await expect(page.locator('#TaskName')).toBeVisible();
    /* ---------- GENERAL TAB ---------- */
    await page.locator('#TaskName').fill('New Dialog');
    await page.locator('#StartDate').fill('4/28/2022');
    await page.locator('#Duration').fill('7 days');
    await page.locator('#Progress').fill('10');
    await expect(page.locator('#TaskName')).toHaveValue('New Dialog');
    await expect(page.locator('#Duration')).toHaveValue('7 days');
    await expect(page.locator('#Progress')).toHaveValue('10');
    /* ---------- DEPENDENCY TAB ---------- */
    await page.locator('//div[text()="Dependency"]').click();
    await page.locator('(//span[text()="Add"])[2]').click();
    await page.locator('.e-ddl.e-lib.valid > .e-input-group-icon').first().click();
    await page.getByRole('option', { name: '-Identify Site location' }).click();
    await expect(
        page.getByText('-Identify Site location')
    ).toBeVisible();
    /* ---------- RESOURCES TAB ---------- */
    await page.locator('//div[text()="Resources"]').click();
    await page.locator('.e-rowcell .e-checkbox-wrapper').first().click();
    await expect(
        page.locator('.e-rowcell .e-frame.e-check')
    ).toBeVisible();
    /* ---------- SEGMENTS TAB ---------- */
    await page.getByText('Segments').click();
    await page.locator('(//span[text()="Add"])[3]').click();

    await expect(
        page.locator('.e-segmented-taskbar')
    ).toHaveCount(16);

    /* ---------- NOTES TAB ---------- */
    await page.getByLabel('New Task').getByText('Notes').click();
    await page.getByRole('textbox', { name: 'Rich Text Editor' }).fill('New Added');

    await expect(
        page.getByRole('textbox', { name: 'Rich Text Editor' })
    ).toHaveText('New Added');

    /* ---------- CUSTOM COLUMNS TAB ---------- */
    await page.locator('//div[text()="Custom Columns"]').click();
    await page.getByRole('textbox', { name: 'Task Mode' }).fill('Auto');

    await expect(
        page.getByRole('textbox', { name: 'Task Mode' })
    ).toHaveValue('Auto');

    /* ---------- SAVE & FINAL ASSERTION ---------- */
    await saveBtn.click();
    // Verify task added in Gantt
    await expect(
        page.locator('//span[text()="New Dialog"]')
    ).toBeVisible();
});



test('94 - Add Task fill the Dialog and Undo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(500);
    const taskName = 'New Dialog';
    /* ---------- OPEN ADD DIALOG ---------- */
    await page.locator('//span[text()="Add"]').click();
    await expect(page.locator('#TaskName')).toBeVisible();
    /* ---------- GENERAL ---------- */
    await page.locator('#TaskName').fill(taskName);
    await page.locator('#StartDate').fill('4/28/2022');
    await page.locator('#Duration').fill('7 days');
    await page.locator('#Progress').fill('10');
    await expect(page.locator('#TaskName')).toHaveValue(taskName);
    /* ---------- DEPENDENCY ---------- */
    await page.locator('//div[text()="Dependency"]').click();
    await page.locator('(//span[text()="Add"])[2]').click();
    await page.locator('.e-ddl.e-lib.valid > .e-input-group-icon').first().click();
    await page.getByRole('option', { name: '-Identify Site location' }).click();
    await expect(
        page.getByText('-Identify Site location')
    ).toBeVisible();
    /* ---------- RESOURCES ---------- */
    await page.locator('//div[text()="Resources"]').click();
    await page.locator('.e-rowcell .e-checkbox-wrapper').first().click();
    await expect(
        page.locator('.e-rowcell .e-frame.e-check')
    ).toBeVisible();
    /* ---------- SEGMENTS ---------- */
    await page.getByText('Segments').click();
    await page.locator('(//span[text()="Add"])[3]').click();
    await expect(
        page.locator('.e-segmented-taskbar')
    ).toHaveCount(16);
    /* ---------- NOTES ---------- */
    await page.getByLabel('New Task').getByText('Notes').click();
    await page.getByRole('textbox', { name: 'Rich Text Editor' }).fill('New Added');
    await expect(
        page.getByRole('textbox', { name: 'Rich Text Editor' })
    ).toHaveText('New Added');
    /* ---------- CUSTOM COLUMNS ---------- */
    await page.locator('//div[text()="Custom Columns"]').click();
    await page.getByRole('textbox', { name: 'Task Mode' }).fill('Auto');
    await expect(
        page.getByRole('textbox', { name: 'Task Mode' })
    ).toHaveValue('Auto');
    /* ---------- SAVE ---------- */
    await page.getByRole('button', { name: 'Save' }).click();
    //  Task is added
    await expect(
        page.locator(`//span[text()="${taskName}"]`)
    ).toBeVisible();
    /* ---------- UNDO ---------- */
    await page.locator('//span[text()="Undo"]').click();
});



test('95 - Add Task fill the Dialog and Redo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(500);
    const taskName = 'New Dialog';
    /* ---------- OPEN ADD DIALOG ---------- */
    await page.locator('//span[text()="Add"]').click();
    await expect(page.locator('#TaskName')).toBeVisible();
    /* ---------- GENERAL ---------- */
    await page.locator('#TaskName').fill(taskName);
    await page.locator('#StartDate').fill('4/28/2022');
    await page.locator('#Duration').fill('7 days');
    await page.locator('#Progress').fill('10');
    await expect(page.locator('#TaskName')).toHaveValue(taskName);
    await expect(page.locator('#Progress')).toHaveValue('10');
    /* ---------- DEPENDENCY ---------- */
    await page.locator('//div[text()="Dependency"]').click();
    await page.locator('(//span[text()="Add"])[2]').click();
    await page.locator('.e-ddl.e-lib.valid > .e-input-group-icon').first().click();
    await page.getByRole('option', { name: '-Identify Site location' }).click();
    await expect(
        page.getByText('-Identify Site location')
    ).toBeVisible();
    /* ---------- RESOURCES ---------- */
    await page.locator('//div[text()="Resources"]').click();
    await page.locator('.e-rowcell .e-checkbox-wrapper').first().click();
    await expect(
        page.locator('.e-rowcell .e-frame.e-check')
    ).toBeVisible();
    /* ---------- SEGMENTS ---------- */
    await page.getByText('Segments').click();
    await page.locator('(//span[text()="Add"])[3]').click();
    await expect(
        page.locator('.e-segmented-taskbar')
    ).toHaveCount(16);
    /* ---------- NOTES ---------- */
    await page.getByLabel('New Task').getByText('Notes').click();
    await page.getByRole('textbox', { name: 'Rich Text Editor' }).fill('New Added');

    await expect(
        page.getByRole('textbox', { name: 'Rich Text Editor' })
    ).toHaveText('New Added');
    /* ---------- CUSTOM COLUMNS ---------- */
    await page.locator('//div[text()="Custom Columns"]').click();
    await page.getByRole('textbox', { name: 'Task Mode' }).fill('Auto');
    await expect(
        page.getByRole('textbox', { name: 'Task Mode' })
    ).toHaveValue('Auto');
    /* ---------- SAVE ---------- */
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(
        page.locator(`//span[text()="${taskName}"]`)
    ).toBeVisible();
    /* ---------- UNDO ---------- */
    await page.locator('//span[text()="Undo"]').click();
    await expect(
        page.locator(`//span[text()="${taskName}"]`)
    ).toHaveCount(0);
    /* ---------- REDO ---------- */
    await page.locator('//span[text()="Redo"]').click();
});
``


test('96- Click the Collapse and Expand ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('97- Click the Collapse and Expand and undo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Expand all
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('98- Click the Collapse and Expand and undo and Repo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Expand all
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('99- Click the Collapse and Expand undo & Redo using button ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Expand all
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('100- Click the Collapse and Expand and undo and Repo using Key', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all
    await page.getByRole('button', { name: 'Collapse all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Expand all
    await page.getByRole('button', { name: 'Expand all' }).click();
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

test('101- Click the Collapse and Expand ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all parent record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('102- Click the Collapse and Expand ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all parent record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-rowcell.e-ellipsistooltip.e-leftalign.e-gridrowindex4Level0 > .e-treecolumn-container > .e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('103- Click the Collapse and Expand and undo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all parent record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('104- Click the Collapse and Expand & undo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all parent record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-rowcell.e-ellipsistooltip.e-leftalign.e-gridrowindex4Level0 > .e-treecolumn-container > .e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('105- Click the Collapse and Expand & Redo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all parent record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('106- Click the Collapse and Expand & Redo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all parent record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-rowcell.e-ellipsistooltip.e-leftalign.e-gridrowindex4Level0 > .e-treecolumn-container > .e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('107- Click the Collapse and Expand undo & Redo using button ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all parent record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('108- Click the Collapse and Expand undo & Redo using button', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all parent record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-rowcell.e-ellipsistooltip.e-leftalign.e-gridrowindex4Level0 > .e-treecolumn-container > .e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('109- Click the Collapse and Expand & Redo using Key', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all parent record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'Expand all' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Edit the Parent first task
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).click();
    //Click undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('110- Click the Collapse and Expand & Redo using Key', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the collapse all parent record
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridexpand').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator('.e-rowcell.e-ellipsistooltip.e-leftalign.e-gridrowindex4Level0 > .e-treecolumn-container > .e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(200);
    await page.locator('.e-icons.e-treegridcollapse').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Edit the Parent first task
    await page.getByRole('gridcell', { name: 'Project initiation Column' }).click();
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

test('111- Click the "Zoom in" using toolbar ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the zoom in 
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('112- Click the "Zoom out" using toolbar ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Zoom out
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1008901
test('113- Click the "Zoom to Fit " using toolbar ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Zoom to fit
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('114- Click the "Next timespan" using toolbar ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Next timespan
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('115- Click the "Previous timespan" using toolbar ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Previous timespan
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('116- Click the "Zoom in" using Methods ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the zoom in 
    await page.getByRole('option', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('117- Click the "Zoom out" using Methods ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut
    await page.getByRole('option', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('118- Click the "Zoom to Fit" using Methods ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the ZoomToFit
    await page.getByRole('option', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('119- Click the "PreviousTimeSpan" using Methods ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the PreviousTimeSpan
    await page.getByRole('option', { name: 'PreviousTimeSpan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('120- Click the "NextTimeSpan" using Methods ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the NextTimeSpan
    await page.getByRole('option', { name: 'NextTimeSpan' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('121- Click the "AddPredecessor" using Methods ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the AddPredecessor
    await page.getByRole('option', { name: 'AddPredecessor' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('122- Click the "Zoom in" using Methods ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the UpdatePredecessor 
    await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('123- Click "Zoom in" using toolbar Undo & Redo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the zoom in 
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(300);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('124- Click the "Zoom out" using toolbar Undo & Redo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Zoom out
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(300);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('125- Click the "Zoom to Fit " using toolbar Undo & Redo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Zoom to fit 
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(300);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('126- Click the "Next timespan" using toolbar Undo & Redo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Next timespan
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(300);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

});

test('127- Click the "Previous timespan" using toolbar Undo & Redo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Previous timespan
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(300);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('128- Click "Zoom in" Undo & Redo using button', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the zoom in 
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('129- Click the "Zoom out" Undo & Redo using button ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Zoom out
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('130- Click the "Zoom to Fit " Undo & Redo using button', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Zoom to fit 
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('131- Click the "Next timespan" Undo & Redo using button', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Next timespan
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

});

test('132- Click the "Previous timespan" Undo & Redo using button ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Previous timespan
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('133- Click the "Zoom in" undo & Redo using Key ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the zoom in 
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(200);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(200);
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

test('134- Click the "Zoom out"undo & Redo using Key ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Zoom out
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(200);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(200);
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

test('135- Click the "Zoom to Fit " undo & Redo using Key ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Zoom to fit
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(200);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(200);
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

test('136- Click the "Next timespan" undo & Redo using Key ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Next timespan
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(200);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(200);
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

test('137- Click the "Previous timespan" undo & Redo using Key', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Previous timespan
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(200);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(200);
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

test('138- Click the "Zoom in" using Methods undo&Redo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the zoom in 
    await page.getByRole('option', { name: 'ZoomIn' }).click();
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('139- Click the "Zoom out" using Methods undo&Redo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut
    await page.getByRole('option', { name: 'ZoomOut' }).click();
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('140- Click the "Zoom to Fit" using Methods undo&Redo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the ZoomToFit
    await page.getByRole('option', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(300);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('141- Click the "PreviousTimeSpan" using Methods undo&Redo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the PreviousTimeSpan
    await page.getByRole('option', { name: 'PreviousTimeSpan' }).click();
    await page.waitForTimeout(300);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('142- Click the "NextTimeSpan" using Methods undo&Redo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the NextTimeSpan
    await page.getByRole('option', { name: 'NextTimeSpan' }).click();
    await page.waitForTimeout(300);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('143- Click the "AddPredecessor" using Methods undo&Redo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the AddPredecessor
    await page.getByRole('option', { name: 'AddPredecessor' }).click();
    await page.waitForTimeout(300);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('144- Click the "Zoom in" using Methods undo&Redo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the UpdatePredecessor 
    await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
    await page.waitForTimeout(300);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('145- Click the "Zoom in" using Methods undo&Redo button ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the zoom in 
    await page.getByRole('option', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('146- Click the "Zoom out" using Methods undo&Redo button', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut
    await page.getByRole('option', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('147- Click the "Zoom to Fit" using Methods undo&Redo button', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the ZoomToFit
    await page.getByRole('option', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('148- Click the "PreviousTimeSpan" using Methods undo&Redo button', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the PreviousTimeSpan
    await page.getByRole('option', { name: 'PreviousTimeSpan' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('149- Click the "NextTimeSpan" using Methods undo&Redo button', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the NextTimeSpan
    await page.getByRole('option', { name: 'NextTimeSpan' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('150- Click the "AddPredecessor" using Methods undo&Redo button', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the AddPredecessor
    await page.getByRole('option', { name: 'AddPredecessor' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('151- Click the "Zoom in" using Methods undo&Redo button', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the UpdatePredecessor 
    await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
    await page.waitForTimeout(300);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('152- Click the "Zoom in" using Methods undo&Redo key ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the zoom in 
    await page.getByRole('option', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('153- Click the "Zoom out" using Methods undo&Redo Key', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut
    await page.getByRole('option', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('154- Click the "Zoom to Fit" using Methods undo&Redo key', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the ZoomToFit
    await page.getByRole('option', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('155- Click the "PreviousTimeSpan" using Methods undo&Redo key', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the PreviousTimeSpan
    await page.getByRole('option', { name: 'PreviousTimeSpan' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('156- Click the "NextTimeSpan" using Methods undo&Redo key', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the NextTimeSpan
    await page.getByRole('option', { name: 'NextTimeSpan' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('157- Click the "AddPredecessor" using Methods undo&Redo key', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the AddPredecessor
    await page.getByRole('option', { name: 'AddPredecessor' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('158- Click the "Zoom in" using Methods undo&Redo key', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click the Methods box
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Click the UpdatePredecessor 
    await page.getByRole('option', { name: 'UpdatePredecessor' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('gridcell', { name: 'Identify Site location Column' }).click();
    await page.waitForTimeout(300);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('159- Perform Sort operation ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //click the id for ascending
    await page.getByText('IDPress Enter to sort. Press').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the id for decending
    await page.locator('.e-sortfilterdiv').first().click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Job name for ascending
    await page.getByText('Job NamePress Enter to sort.').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Job name for descending 
    await page.locator('.e-sortfilterdiv.e-icons.e-ascending').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})

test('160-Perform Sort operation undo&Redo ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //click the id for ascending
    await page.getByText('IDPress Enter to sort. Press').click();
    await page.waitForTimeout(200);
    //click the id for decending
    await page.locator('.e-sortfilterdiv').first().click();
    await page.waitForTimeout(200);
    //click the Job name for ascending
    await page.getByText('Job NamePress Enter to sort.').click();
    await page.waitForTimeout(200);
    //click the Job name for descending 
    await page.locator('.e-sortfilterdiv.e-icons.e-ascending').click();
    await page.waitForTimeout(200);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})

test('161-Perform Sort operation undo&Redo using key ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //click the id for ascending
    await page.getByText('IDPress Enter to sort. Press').click();
    await page.waitForTimeout(200);
    //click the id for decending
    await page.locator('.e-sortfilterdiv').first().click();
    await page.waitForTimeout(200);
    //click the Job name for ascending
    await page.getByText('Job NamePress Enter to sort.').click();
    await page.waitForTimeout(200);
    //click the Job name for descending 
    await page.locator('.e-sortfilterdiv.e-icons.e-ascending').click();
    await page.waitForTimeout(200);
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
})

test('162-Perform Sort operation undo&Redo using Button ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //click the id for ascending
    await page.getByText('IDPress Enter to sort. Press').click();
    await page.waitForTimeout(200);
    //click the id for decending
    await page.locator('.e-sortfilterdiv').first().click();
    await page.waitForTimeout(200);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Job name for ascending
    await page.getByText('Job NamePress Enter to sort.').click();
    await page.waitForTimeout(200);
    //click the Job name for descending 
    await page.locator('.e-sortfilterdiv.e-icons.e-ascending').click();
    await page.waitForTimeout(200);
    // Click Undo 
    await page.getByRole('button', { name: 'UndoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click Redo
    await page.getByRole('button', { name: 'RedoMethod' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})

test('163- Perform multi Sort operation ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click id ascending
    await page.getByText('IDPress Enter to sort. Press').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Job Name ascending
    await page.getByText('Job NamePress Enter to sort.').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Event Resource ascending
    await page.getByText('Event ResourcesPress Enter to').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click id Decending
    await page.locator('.e-sortfilterdiv').first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Job Name Decending
    await page.locator('.e-sortfilterdiv.e-icons.e-ascending').first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Resource Decending
    await page.locator('.e-sortfilterdiv.e-icons.e-ascending').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})

test('164- Perform multi Sort operation undo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click id ascending
    await page.getByText('IDPress Enter to sort. Press').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click Job Name ascending
    await page.getByText('Job NamePress Enter to sort.').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click Event Resource ascending
    await page.getByText('Event ResourcesPress Enter to').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click id Decending
    await page.locator('.e-sortfilterdiv').first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click Job Name Decending
    await page.locator('.e-sortfilterdiv.e-icons.e-ascending').first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click Resource Decending
    await page.locator('.e-sortfilterdiv.e-icons.e-ascending').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})

test('165- Perform multi Sort operation undo and Redo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //Click id ascending
    await page.getByText('IDPress Enter to sort. Press').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click Job Name ascending
    await page.getByText('Job NamePress Enter to sort.').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click Event Resource ascending
    await page.getByText('Event ResourcesPress Enter to').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click id Decending
    await page.locator('.e-sortfilterdiv').first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click Job Name Decending
    await page.locator('.e-sortfilterdiv.e-icons.e-ascending').first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click Resource Decending
    await page.locator('.e-sortfilterdiv.e-icons.e-ascending').click({
        modifiers: ['ControlOrMeta']
    });
    await page.waitForTimeout(200);
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})

test('166-Click Disable Undo Redo Button ', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    //click the id for ascending
    await page.getByText('IDPress Enter to sort. Press').click();
    await page.waitForTimeout(200);
    //click the id for decending
    await page.locator('.e-sortfilterdiv').first().click();
    await page.waitForTimeout(200);
    //click Disable Undo Redo
    await page.getByRole('button', { name: 'Disable Undo Redo' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})

test('167-Drag and drop child record', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    const src = page.locator("(//div[contains(@class,'e-icons e-rowcelldrag ')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-icons e-rowcelldrag ')])[4]");
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
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('168-Drag and drop Parent record', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    const src = page.locator("(//div[contains(@class,'e-icons e-rowcelldrag ')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-icons e-rowcelldrag ')])[5]");
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
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('169-Drag and drop child record undo & Redo', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/default');
    await page.waitForTimeout(1000);
    const src = page.locator("(//div[contains(@class,'e-icons e-rowcelldrag ')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-icons e-rowcelldrag ')])[4]");
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
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo
    await page.getByRole('button', { name: 'Undo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo
    await page.getByRole('button', { name: 'Redo', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('170-Drag and drop Parent record', async ({ page }) => {
//     await page.goto('http://localhost:5004/undo-redo/default');
//     await page.waitForTimeout(1000);
//     const src = page.locator("(//div[contains(@class,'e-icons e-rowcelldrag ')])[1]");
//     const dst = page.locator("(//div[contains(@class,'e-icons e-rowcelldrag ')])[5]");
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
//     await page.waitForTimeout(1000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//      //Click the Undo
//     await page.getByRole('button', { name: 'Undo', exact: true }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Click the Redo
//     await page.getByRole('button', { name: 'Redo', exact: true }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('171-Project View', async ({ page }) => {
    await page.goto('http://localhost:5004/undo-redo/resource');
    await page.waitForTimeout(1000);
    await page.locator('span').nth(3).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});