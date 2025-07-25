import { test, expect } from '@playwright/test';

//import data from "../../../TestDeta/addemployee.json"

const creds = ["Admin", "admin123"]
test('Verify Add Employee',{tag: ["@smoke", "@raju"]}, async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(creds[0]);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(creds[1]);
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.locator('#app')).toContainText('Time at Work');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(data.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastname);
  await page.locator('.oxd-file-input').setInputFiles("./TestDeta/picture.jpeg")
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});