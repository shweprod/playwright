import {test,expect} from '@playwright/test';
import { text } from 'node:stream/consumers';

test('click link', async({page})=>
{
    await page.goto("https://playwright.dev");
    
    await expect(page).toHaveTitle(/Playwright/);
});

test('click get started', async({page})=>{

    await page.goto("https://playwright.dev/python/");
    await page.getByText("Get Started").click();
    
    await expect(page).toHaveTitle(/Installation/);
});



