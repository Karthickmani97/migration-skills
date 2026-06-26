import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Autofit columns initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resizing-a-column-to-fit-its-content-using-method');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Edit taskname in column template sample', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resizing-a-column-to-fit-its-content-using-method');
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell e-templatecell")])[3]').dblclick();
  await page.waitForTimeout(600);
  await page.locator('#DataItem___TaskName').fill('Identify site location and project estimation');
  await page.waitForTimeout(50);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

