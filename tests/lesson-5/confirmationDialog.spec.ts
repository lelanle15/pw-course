import { test } from "@playwright/test";
 
test ("dialog", async ({page}) => {
    await test.step("Navigate to Register page", async() =>{
        await page.goto("https://material.playwrightvn.com/03-xpath-todo-list.html");
    })
    await test.step("Enter a new task", async () =>{
        await page.locator("//input[@id='new-task']").fill("Add new 1");
    })
     await test.step("Click button Add task", async () =>{
        await page.locator("//button[@id='add-task']").click();
    })
    await test.step("Delete a task", async() => {
        page.on('dialog', async (dialog) => dialog.accept());
        await page.locator("//button[@id='add-new-1-delete']").click();
    })
})