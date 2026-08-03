import {test,expect} from "@playwright/test";
test('text is visible' ,async({page})=>{
await page.goto("https://playwright.dev/java/docs/test-runners");

const title=await page.title();
console.log(title);
await expect(title).toMatch(/playwright java/i);
await expect(title).toContain("Playwright Java");

})