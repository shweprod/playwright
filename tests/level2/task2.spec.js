import {test,expect } from '@playwright/test'
import { asyncWrapProviders } from 'node:async_hooks'
test('Verify delete button diappears', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await page.getByText("Add Element").click();

    const deleteText=await page.getByText("Delete");
    await deleteText.click();
    await expect(deleteText).toBeHidden();
})