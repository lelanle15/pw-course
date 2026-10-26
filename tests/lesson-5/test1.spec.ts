import { test } from "@playwright/test";
const date = '2026-10-19';
const email = 'username1@gmail.com';
const userName = 'User test 1'
const bio = 'Biography 1'
const rating = '8';
const color = "#4dff00";


test("Go to Register page ", async ({ page }) => {
    await test.step("Go to page Tài liệu học automation test", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click on click Register page ", async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    })

    await test.step("Fill data in register page", async () => {
        await page.locator("//input[@id='username']").fill(userName);
        await page.locator("//input[@id='email']").fill(email);
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//select[@id='interests']").selectOption({ value: "art" });
        await page.locator("//select[@id='country']").selectOption({ value: "canada" });
        await page.locator("//input[@id='dob']").fill(date);
        await page.locator("//input[@id='profile']").setInputFiles("data-test/images.jpg");
        await page.locator("//textarea[@id='bio']").fill(bio);
        await page.locator("//input[@id='rating']").fill(rating);
        await page.locator("//input[@id='favcolor']").fill(color);
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//input[@id='newsletter']").check();
        await page.locator("//span[@class='slider round']").check();
        await page.locator("//div[@id='starRating']").click({
            position:{
                x: 90,
                y: 10
            }
        });


    })
    await test.step("Click Register button", async () => {
        await page.locator("//button[text()='Register']").click();

    })
})

