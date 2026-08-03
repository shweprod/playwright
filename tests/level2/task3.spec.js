import{test,expect} from'@playwright/test'
test("textboxes", async({page})=>{
    await page.goto("https://www.wikipedia.org/");
    await page.getByText("Search Wikipedia").fill("Playwright");

    await expect(page).
    // const searchText=await page.getByText("Search");
    // await searchText.click();

    // await expect(page).toHaveTitle(/Playwright/);
})