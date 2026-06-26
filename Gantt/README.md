# Playwright Test Project Structure for Blazor

## Repository name

- Repository name should be below format.

  `blazor-{{controlname}}-playwright-tests`

- `{{controlname}}` should be same like component name in blazor source.


## Project Structure

* Follow this template - [Blazor Playwright Project Template](https://github.com/essential-studio/blazor-controlname-playwright-tests/)

* Add the sample blazor project either server/wasm in `server/` or `wasm/` folder.

* Add the different category samples in the `pages` folder either in `server/<<yourproject>>/pages` or `wasm/<<your project>>/pages`

* Add testcases in `tests/` folder.

# How to run

## Prerequisites
- [Node 12](https://nodejs.org/en/) or high
- NET 7 or above SDK

## Install Playwright

For initial method, `npm init playwright@latest` command is used to install Playwright browsers necessary for running and moreover we could configure the required  browsers in the **playwright.config.ts** file.

## Run the application

Then run your sample and launch it web browser, follow the below command

`dotnet run --project <<sample/server/yourproject.csproj (or) sample/wasm/yourproject.csproj>>`

## Run the Test cases

After launching sample in web browser, we need to run the test case automation, so please run the below command.

### Run the all test cases

To run the all test cases in your controls, run the below command.
`npx playwright test`

### Run Specific file

To run the specific file test cases in your control, run the below command.
`npx playwright test filename.spec.ts`

## Test report

After running the test cases, playwright report is generated. To show the report, run the below command
`npx playwright show-report`

## Auto Generate code

The test cases can be auto-generated using the command but for few click events we should write code manually.

`npx playwright codegen http://localhost:4000/`