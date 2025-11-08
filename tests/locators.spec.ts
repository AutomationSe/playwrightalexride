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