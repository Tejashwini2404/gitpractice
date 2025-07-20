import { test, expect } from '@playwright/test';

//import logindata from "../testData/login.json"

test("Add job title", async ({page})=>{
  // const username = "Admin"
   //const password = "admin123"
    //Actions 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator(`input[name='username']`).fill("Admin")

    await page.locator("input[type='password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    // Assertions
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator("//a[@class='oxd-main-menu-item active']").click()
    //await page.locator("//span[normalize-space(text())='Job']").click()
    await page.locator("//span[normalize-space(text())='Job']").click()
    await page.locator("//a[normalize-space(text())='Job Titles']").click()
    await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
   // let randomtext = (Math.random() + 1).toString(36).substring(7);  // generate random 5 chars 
    await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill("software")
    //await page.locator("//textarea[@placeholder='Type description here']").fill(data.jobDescription)
    await page.locator('button[type="submit"]').click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

});