import { test } from "@playwright/test";

test(" Product page", async ({ page }) => {
    await test.step("Go to page Tài liệu học automation test", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Go to Product Page", async () => {
        await page.locator("//a[contains(@href,'02-xpath-product-page.html')]").click();
    });
    await test.step("Add 2 product for product 1", async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    });
    await test.step("Add 3 product for product 1", async () => {
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    });
    await test.step("Add 1 product for product 3", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
});
