const{test,expect} = require("@playwright/test");
test("Login should work" , async({page}) =>{
    await page.goto("https://www.facebook.com/");
    await page.locator('input[name="email"]').fill("shwetha");
    await page.locator('input[name="pass"]').fill("shwetha06");
    //await page.locator('div[aria-label="Login"]').count();
    await page.getByRole('button' , { name: "Login"}).click();

   
    
}
) 