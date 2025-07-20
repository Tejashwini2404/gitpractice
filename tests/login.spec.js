//  o("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// import { test, expect } from '@playwright/test';

// // //import logindata from "../testData/login.json"

// // test("Verify Login with Valid Credential", async ({page})=>{
// //   // const username = "Admin"
// //    //const password = "admin123"
// //     //Actions 
// //     await page.got
// //     await page.locator(`input[name='username']`).fill("Admin")

// //     await page.locator("input[type='password']").fill("admin123")

// //     await page.locator("button[type='submit']").click()

// //     // Assertions
// //     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
// // });


// test("verify login with valid credential", async({page})=>{
//   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//   await page.locator("//input[@name='username']").fill("Admin")
//   await page.locator('//input[@name="password"]').fill("admin123")
//   await page.locator('//button[@type="submit"]').click()
//   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index") 
//   await page.locator("//span[text()='Admin']").click()
//   await page.locator('//span[text()="Job "]').click()

// })




const {test,expect} = require('@playwright/test')
import {loginpage} from "../pom/login_po"

let page
let login
test.describe("verify login functionality",async()=>{
  test.beforeEach(async({browser}) =>{
    page = await browser.newPage()
    login= new loginpage(page)
    await login.LanchUrl()
  })

  test("Verify login with valid credntial",async ({page})=>{
    await login.Loginwithcreds("Admin","admin123")
    await login.loginsucces()
  })
})
