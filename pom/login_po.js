import {  expect } from '@playwright/test';
exports.loginpage= class loginpage{

    constructor(page)
    {
        this.page= page
        this.usernameInput=page.locator('input[name="username"]')
        this.passwordInput=page.locator('input[name="password"]')
        this.loginButton= page.locator('button[type="submit"]')
        this.loginerror= page.locator('//p[text()="Invalid credentials"]')
    }
    async LanchUrl(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    }
    async Loginwithcreds(username,password){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async Loginerror(){
        await expect(this.loginerror).toBeVisible()
    }
    async loginsucces(){
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }

}