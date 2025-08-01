import {test,expect } from '@playwright/test'
test("Login with valid cred",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[type="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})