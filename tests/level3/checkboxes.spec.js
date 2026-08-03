import { test, expect } from '@playwright/test'
test("verify checkboxes", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const check1 = page.locator('input[type="checkbox"]').last();
    const check2 = page.locator('input[type="checkbox"]').first();


    await check1.check();

    console.log(await check1.isChecked());
    console.log(await check2.isChecked());
    await expect(check1).toBeChecked();
    //  await page.waitForTimeout(10000); 


})
