import { test, expect } from '@playwright/test'
test("verify login", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    const username = await page.locator('#username').fill("tomsmith");
    const password = await page.locator('#password').fill("SuperSecretPassword!");

    //await page.getByText(" Login").click();
    await page.getByRole('button', { name: " Login" }).click();

    await expect(page.getByText("Welcome to the Secure Area. When you are done click logout below.")).toBeVisible();

    await page.getByRole('link', { name: " Logout" }).click();

    await expect(page.getByText("Login Page")).toBeVisible();
})