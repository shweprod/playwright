import { test, expect } from '@playwright/test'

test("form filling", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    await page.getByPlaceholder("Full Name").fill("shwetha, pop");
    await page.getByPlaceholder("name@example.com").fill("flatwork6@gmail.com");
    await page.getByPlaceholder("Current Address").fill("Ambattur, Chennai");
    await page.locator('textarea[id="permanentAddress"]').fill("Anakaputhur , Chennai");
    await page.getByRole('button', { name: "Submit" }).click();


    // //way 1

    // await expect(page.getByText("shwetha")).toBeVisible();
    // await expect(page.getByText("flatwork6@gmail.com")).toBeVisible();

    // await expect(page.getByText("Ambattur, Chennai")).toBeVisible();

    // await expect(page.getByText("Anakaputhur , Chennai")).toBeVisible();


    //way 2
    //#->id
    await expect(page.locator("#name"))
        .toContainText("shwetha");

    await expect(page.locator("#email"))
        .toContainText("flatwork6@gmail.com");

        const output= page.locator("#output");

    await expect(output.locator("#currentAddress"))
        .toContainText("Ambattur");

    await expect(output.locator("#permanentAddress"))
        .toContainText("Anakaputhur");


    //way 3
    // await expect(page.locator("#output"))
    //     .toContainText("shwetha");

    // await expect(page.locator("#output"))
    //     .toContainText("flatwork6@gmail.com");
})