import { test, expect } from '@playwright/test'
test("textboxes", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/");
    await page.getByLabel("Search Wikipedia").fill("Playwright");
    await page.getByRole('button', { name: "Search" }).click();
    await expect(page).toHaveTitle(/Playwright/);
})