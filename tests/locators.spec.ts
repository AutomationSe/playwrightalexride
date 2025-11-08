/**
 * -> Playwright locators are a powerful and flexible way to find and interact with elements on a web page during automated testing. Playwright provides a higher-level API called locators that simplifies handling dynamic elements, waiting, and visibility.
 * 
 * 1. page.getByRole() to locate by explicit and implicit accessibility attributes.
 * 2. page.getByText() to locate by text content.
 * 3. page.getByLabel() to locate a form control by associated label's text.
 * 4. page.getByPlaceholder() to locate an input by placeholder.
 * 5. page.getByAltText() to locate an element, usually image, by its text alternative.
 * 6. page.getByTitle() to locate an element by its title attribute.
 * 7. page.getByTestId() to locate an element based on its data-testid attribute.
 */

/**
 * In addition to built-in locators, Playwright supports CSS and XPath selectors.
 * 
 * Examples of CSS Selectors
 * 1. #ID - Select by ID: await page.locator('#username').fill("User")
 * 2. tag[attribute="value"] - Select by attribute: await page.locator('input[type="password"]').click()
 * 3. .className - Select by class: await page.locator('.radius').click();
 * 
 * Examples of XPath Selectors
 * 1. XPath match by tag and id: await page.locator('xpath=//input[@id="username"]').fill('myUsername')
 * 2. Partial text match: await page.locator('xpath=//button[contains(text(), "Login")]').click()
 */

import { test, expect } from "@playwright/test";
test.describe("locators", () => {

    test("playwright locators", async ({ page }) => {
      await page.goto("https://the-internet.herokuapp.com/login");
      await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

      // 1️⃣ Get By Role
      const loginButton = page.getByRole('button', { name: 'Login' });
      await expect(loginButton).toBeVisible();

      // 2️⃣ Get By Text
      const loginHeaderText = page.getByText('Login Page');
      await expect(loginHeaderText).toBeVisible();

      // 3️⃣ Get By Label
      await page.getByLabel('Username').fill("tomsmith");

      // 4️⃣ CSS Selectors
      await page.locator("#username").fill("Selected by CSS");

      // 5️⃣ XPath Selectors
      await page.locator("//input[@id='password']").fill("selected by XPath");

      // 6️⃣ XPath with text contains
      await page.locator("//button[contains(., 'Login')]").click();

      // 7️⃣ Validate Error Message
      const errorMessage = page.locator("#flash");
      await expect(errorMessage).toContainText("Your username is invalid!");

    });
    
});