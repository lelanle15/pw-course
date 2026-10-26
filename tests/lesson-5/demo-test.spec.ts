import { test } from "@playwright/test";
let isChecked;

test("Test case name", async ({ page }) => {
  await test.step("Navigate to Register page", async () => {
    await page.goto(
      "https://material.playwrightvn.com/01-xpath-register-page.html",
    );
  });
  await test.step("Fill information", async () => {
    await page.locator("//input[@id='username']").fill("Playwright");
    isChecked = await page.locator("//input[@id='reading']").isChecked();
    console.log(isChecked); //false

    await page.locator("//input[@id='reading']").check();
    isChecked = await page.locator("//input[@id='reading']").isChecked();
    console.log(isChecked); //true

    await page.locator("//input[@id='reading']").setChecked(false);
    isChecked = await page.locator("//input[@id='reading']").isChecked();
    console.log(isChecked); //false

    await page.locator("//select[@id='country']").selectOption({value: "canada"});
    await page.locator("//input[@id='profile']").setInputFiles("data-test/images.jpg");
    page.on
  });
//   await test.step("Fill information", async () => {
//     await page
//       .locator("//input[@id='email']")
//       .pressSequentially("Playwright@gmail.com", {
//         delay: 100,
//       });
//   });
  await test.step("Click button Register", async () => {});
});

test("Test case click", async ({ page }) => {
  await test.step("Navigate to Mouse page", async () => {
    await page.goto("https://material.playwrightvn.com/018-mouse.html");
  });
  await test.step("Single click", async () => {
    await page.locator("//div[@id='clickArea']").click();
  });

  await test.step("Double click", async () => {
    await page.locator("//div[@id='clickArea']").dblclick();
  });
  await test.step("Click right mouse", async () => {
    await page.locator("//div[@id='clickArea']").click({
      button: "right",
    });
  });
  await test.step("Click right mouse", async () => {
    await page.locator("//div[@id='clickArea']").click({
      modifiers: ["Shift"],
    });
  });
});

