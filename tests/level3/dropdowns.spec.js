import { test, expect } from '@playwright/test'
test("verifying dropdowns", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    const dropdownclass = page.locator('.example');
    const dropdown = await dropdownclass.locator('#dropdown');

    await dropdown.selectOption("1");

    await expect(dropdown).toHaveValue("1");
})