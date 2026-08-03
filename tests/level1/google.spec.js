const { test, expect } = require('@playwright/test');

test('Open Amazon.in', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  console.log(await page.title());

  await expect(page).toHaveTitle(/Amazon/);
});