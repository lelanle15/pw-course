import { test } from "@playwright/test";

test("Exercise 3", async ({ page }) => {
    await test.step("Go to page playwright", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Go to todo page", async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    })
    await test.step("Add 100 todo item", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    })
    await test.step("Remove todo item with odd-numbered", async () => {
        page.on('dialog', async (dialog) => {
            dialog.accept();
        })
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }

    })
})