import { test as ScriptErrorFinder, expect, ConsoleMessage } from '@playwright/test';
 
export const test = ScriptErrorFinder.extend<{ page: void }>({
page: async ({ page}, use) => {
const ErrorHandler: string[]=['TypeError','ReferenceError','RangeError','EvalError','(in promise)','Promise rejection','System.NullReferenceException','System.InvalidCastException','System.ArgumentOutOfRangeException', 'System.InvalidOperationException', 'System.Collections.Generic.KeyNotFoundException', 'System.OverflowException', 'System.AggregateException', 'System.Text.Json.JsonException'];
    const errors: string[] = [];

    // Binding playwright "pageerror" event ( For finding JS script errors)
    page.on("pageerror", (error: Error) => {
        // Condition to push only the errors defined above in the ErrorHandler in Ln 5
        if(ErrorHandler.indexOf(error.name) !== -1){
            errors.push(error.stack as string);
        }
    })

    // Binding playwright "Console" event ( For finding Server side Script Errors)
    page.on("console", (error: ConsoleMessage) => {
        // Condition to push only the errors defined above in the ErrorHandler in Ln 5
            for (let i: number = 0; i < ErrorHandler.length; i++) {
                if (error.text().includes(ErrorHandler[i])) {
                    errors.push(error.text());
                }
            }
    })
 
    await use(page);

    // The empty array indicates that the console should not have any failure logs
    expect(errors).toStrictEqual([]);
},
 
})
 
export{ expect } from "@playwright/test"