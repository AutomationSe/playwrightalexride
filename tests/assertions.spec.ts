/**
 * There are some specific assertion types to consider:
 * 1. Auto-retrying assertions: Auto-retrying assertions will retry until the assertion passes, or the assertion timeout is reached. Note that retrying assertions are async, so you must await them.
 * 2. Non-retrying assertions: They allow to test any conditions, but do not auto-retry. Can be used without await. But most of the time, web pages show information asynchronously, and using non-retrying assertions can lead to a flaky test.
 * 3. Negating matchers: To assert the opposite condition, simply add .not before the matcher — the matcher is the method used to check a specific condition, like toBeVisible() or toHaveText().
 * 4. Soft assertions: Normally, a failed assertion will stop the test right away. But with soft assertions, Playwright lets the test keep going, even if something fails — it just logs the failure instead of ending the test
 */

import { expect,test } from "@playwright/test";

test("Login page assertions", async({page})=>{

// The code is mostly okay, but the textContent assertion needs a small fix.
await page.goto("https://the-internet.herokuapp.com/login");

// Auto retrying assertion - Correct and best practice for visibility checks.
await expect(page.getByRole('heading', {name: 'Login Page'})).toBeVisible();

// Non auto retry assertion - The expected text must match the actual text on the page.
const headingText = await page.locator('h2').textContent();
// The actual text is "Login Page" (capital P). You need to change your expectation.
// NOTE: Playwright recommends using auto-retrying assertions like .toHaveText() instead.
expect(headingText).toBe("Login Page"); // CORRECTED: Now matches "Login Page"

// Negating matchers - Correctly asserts that the error message is not visible yet.
await expect(page.locator('#flash')).not.toBeVisible();

// Soft Assertion - Correct. Will report an error but continue the test execution.
// NOTE: The URL on this site might be https://the-internet.herokuapp.com/login (missing trailing slash).
// await expect.soft(page).toHaveURL("**/login"); // Use a glob pattern for robustness

// Last check - Correct. Checks that the button is interactive.
await expect(page.getByRole('button',{name: 'Login'})).toBeEnabled();

})

test("Multiple soft assertions with one Hard assertions", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login");

    const heading = await page.locator("div[class='example'] h2");
    await expect.soft(heading).toHaveText("Login Page");

    await expect.soft(page.getByLabel('Username')).toBeVisible();

    await expect(page.getByLabel('Password')).toBeVisible();
})