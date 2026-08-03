
import{test,expect} from '@playwright/test';

test('verify add button works' , async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await page.getByText("Add Element").click();
    
    // const deleteText = await page.getByText("Delete");
    // await expect(deleteText).toBeVisible();

    await expect(await page.getByText("Delete")).toBeVisible();
})