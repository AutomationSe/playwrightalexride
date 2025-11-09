/**
 * Playwright Test supports automatic screenshot capture and visual comparison using await expect(page).toHaveScreenshot().
 * On the first run, a reference (baseline) screenshot is saved.
 * On subsequent runs, Playwright compares the new screenshot to the baseline and reports any differences.
 * When performing visual assertions, keep these in mind:
 * 1. Cross-browser or responsive layout: Use visual testing to validate rendering on different devices.
 * 2. Stability: Avoid testing pages with frequently changing layouts (e.g., under development).
 * 3. Privacy: Mask or avoid areas with sensitive user information.
 * 4. Page rendering: Good to catch misaligned elements, broken styles, or missing images.
 * 5. Text driven content: Avoid pages like dashboards or tables — small changes can cause noisy diffs.
 * 6. Functionality vs. visuals: Prioritize functional testing first; it's less prone to false failures.
 */

import {test, expect } from "@playwright/test";

test.describe("Visual testing", ()=>{
    test("plain screenshot capture", async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/login");

        await expect(page).toHaveScreenshot();
        console.log("Screenshot taken");
       
    })

    test("Screen Full page", async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/login")
        await expect(page).toHaveScreenshot({fullPage: true});
        console.log("Full page screenshot ready")
   
    })

    test('Visual check of login button', async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/login")
        const loginButton = page.getByRole('button', { name: 'Login' });
        await loginButton.waitFor({ state: 'visible' });
        await expect(loginButton).toHaveScreenshot('login-button-only-screenshot.png');
        
    })

test.only('Masked', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");

    // Visual comparison with masked fields
    await page.screenshot({ path: 'masked-screenshot.png', fullPage: true, mask: [
            page.locator('#username'),
            page.locator('#password')
        ],
    });
});



})