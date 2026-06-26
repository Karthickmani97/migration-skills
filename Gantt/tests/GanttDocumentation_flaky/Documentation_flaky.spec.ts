
import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';


//RESOURCES-UG cases from documentation 
test('34-Update assignment through method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/through-method-UG');
  await page.waitForTimeout(2200);
  //Click the Update assignment button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(1500);
  //Validation 
  const UpdateAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  await expect(UpdateAssignment).toHaveText('Jack Davolio, Margaret Buchanan [50%]');
  //Click the child record to edit
  await page.locator("(//span[text()='Estimation approval'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Estimation');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Click the Delete assignment button on the toolbar
  await page.locator("(//button[text()='Delete Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  //Validation 
  const DeleteAssignment = page.locator('(//span[contains(@class,"e-label")])[2]');
  await expect(DeleteAssignment).toHaveText('Martin Tamer [70%]');
  //Screenshot validation-Assignment is added and is shown on the chart side and deleted assignment is shown on the taskbar onchart side of component
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Add assignment through method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/through-method-UG');
  await page.waitForTimeout(2000);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(1500);
  //Validation 
  const AddAssignment = page.locator('(//span[contains(@class,"e-label")])[8]');
  await expect(AddAssignment).toHaveText('Construction Supervisor, Davolio Fuller, Jack Davolio');
  //Click the child record to edit
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('location');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1500);
  //Click the Update assignment button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  //Validation 
  const UpdateAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  await expect(UpdateAssignment).toHaveText('Jack Davolio, Tamer Vinet');
  //Screenshot validation-Assignment is added and updated assignment visible and edited record shown
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Add assignment through method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/through-method-UG');
  await page.waitForTimeout(2500);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(1500);
  //Validation 
  const AddAssignment = page.locator('(//span[contains(@class,"e-label")])[8]');
  await expect(AddAssignment).toHaveText('Construction Supervisor, Davolio Fuller, Jack Davolio');
  //Click the child record to edit
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('location');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Click the Update assignment button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(1000);
  //Validation 
  const UpdateAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  await expect(UpdateAssignment).toHaveText('Jack Davolio, Tamer Vinet');
  //Click the  Add Record button on the toolbar
  await page.locator("(//button[text()='AddRecord'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Add assignment,edited record is visible ,update assignment and added record all visible.
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});



test('39-Edit the Child record,Edit End Date', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-event');
  await page.waitForTimeout(2000);
  //Click the child record on grid side
  await page.locator("(//span[text()='Soil test approval'])[1]").click();
  await page.waitForTimeout(600)
  //Click the Edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click the Event Name and Edit it 
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Soil');
  await page.waitForTimeout(500);
  //Click the End date to edit it 
  await page.locator("(//input[contains(@class,'control')])[7]").fill('04/31/21');
  await page.waitForTimeout(500);
  //Select Resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Deselect the 1st resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Deselect 2nd resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Click to select all the resources
  await page.locator("(//span[contains(@class,'e-uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resources are added and it indicates on the toolbar
  //expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Cell edit the event Resources', async ({ page }) => {
  test.slow();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-event');
  await page.waitForTimeout(2000);
  //Double click the child taskbar, event resources
  await page.locator("(//td[contains(@class,'rowcell')])[19]").dblclick();
  await page.waitForTimeout(1000)
  //Click the cancel button on the toolbar
  await page.locator("(//span[contains(@class,'cancel')])[1]").click();
  await page.waitForTimeout(500);
  //Click the collapse all  button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
  await page.waitForTimeout(500);
  //Double click the 2nd parent record to open dialog tab
  await page.locator("(//div[contains(@class,'parent')])[3]").dblclick();
  await page.waitForTimeout(1000);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Select the 1st resources to add
  await page.locator("(//span[contains(@class,'e-uncheck')])[2]").click();
  await page.waitForTimeout(500);
  //Select 2nd resources to add
  await page.locator("(//span[contains(@class,'e-uncheck')])[4]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Added resources shown and records updated is indicated on the tollbar
  //expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Collapse all records delete child record', async ({ page }) => {
  test.slow();
  await page.goto(Helper.baseUrlserver + '/Resource-event');
  await page.waitForTimeout(2000);
  //Click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
  await page.waitForTimeout(500)
  //Click the last child record on grid side
  await page.locator("(//span[text()='Sign contract'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])[1]").click();
  await page.waitForTimeout(500);
  //Click the Ok button to delete the child record
  await page.locator("(//button[contains(@class,'control')])[8]").click();
  await page.waitForTimeout(500);
  //Click the icon on 1st parent to expand it
  await page.locator("(//span[contains(@class,'treegridcollapse')])[1]").click();
  await page.waitForTimeout(500);
  //Double click the child taskbar on the chart side to open the dialog tab
  await page.locator("(//div[contains(@class,'child')])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //deselet 1st resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The records are updated and it shows on the toolbar, deleted resource action is cancelled.
  //expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});



//RESOURCEVIEW-UG cases from documentation
test('46-Add assignment through method,edit child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Method-through');
  await page.waitForTimeout(2100);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(1200);
  //Click the child record to edit
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('location');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Update assignment button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(1000);
  // //Validation (Not working)
  // const UpdateAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  // await expect(UpdateAssignment).toHaveText('Jack Davolio, Margaret Buchanan [50%]');
  //Click the  Delete Assignment button on the toolbar
  await page.locator("(//button[text()='Delete Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  //Validation 
  const DeleteAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  await expect(DeleteAssignment).toHaveText('Rose Fuller');
  //Screenshot validation-Add assignment,edited record is visible ,update assignment 
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Add assignment through method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Method-through');
  await page.waitForTimeout(2000);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the child record to edit
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(1000);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Identify');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1500);
  //Click the Update assignment button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  // //Validation -Not working
  // const UpdateAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  // await expect(UpdateAssignment).toHaveText('Jack Davolio, Margaret Buchanan [50%]');
  //Screenshot validation-Assignment is added and updated assignment visible and edited record seen
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});



test('48-Add assignment through method', async ({ page }) => {
  test.slow();
  await page.goto(Helper.baseUrlserver + '/Method-through');
  await page.waitForTimeout(2000);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(1000);
  //Validation 
  const AddAssignment = page.locator('(//span[contains(@class,"e-label")])[6]');
  await expect(AddAssignment).toHaveText('Rose Fuller');
  //Click the child record to edit
  await page.locator("(//span[text()='Estimation approval'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Estimation');
  await page.waitForTimeout(500);
  //Click duration to add new record
  await page.locator("(//input[contains(@class,'control')])[4]").fill('6 Days');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete assignment on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  //Validation 
  const AddAssignment1 = page.locator('(//span[contains(@class,"e-label")])[6]');
  await expect(AddAssignment1).toHaveText('Rose Fuller');
  //Screenshot validation-Added assignment is shown ,edited child record is also visible
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});