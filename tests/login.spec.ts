import {test, expect } from "@playwright/test";
import { describe } from "node:test";

test.describe("login Tests", ()=>{
    test('Postive LoginTest', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
    await expect(page.getByText('Username', { exact: true })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    await expect(page.getByText('Password', { exact: true })).toBeVisible();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    await expect(page.getByRole('button', { name: ' Login' })).toBeVisible();
    await page.getByRole('button', { name: ' Login' }).click();
    await expect(page.getByText('You logged into a secure area')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeVisible();
    await expect (page.getByRole('link', { name: 'Logout' })).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
    })

    test('Negetive login', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page.getByText('Username', { exact: true })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('wronguser123');
    await expect(page.getByText('Password', { exact: true })).toBeVisible();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword123');
    await page.getByRole('button', { name: ' Login' }).click();
    await expect(page.locator('#flash')).toContainText('Your username is invalid! ×');
    })

})
