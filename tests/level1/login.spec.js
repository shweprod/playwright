const{test,expect} = require("@playwright/test");
test("Login should work" , async({page}) =>{
    await page.goto("https://www.facebook.com/");
    await page.locator('input[name="email"]');
    await page.locator('input[name="pass"]');
    //await page.locator('div[aria-label="Login"]').count();
    await page.getByText("Login").click();

   
    
}
) 