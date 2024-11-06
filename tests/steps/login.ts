import { createBdd } from "playwright-bdd";

const { Given , When ,Then} = createBdd();
// 1. Missing step definition for "tests\Features\login.feature:7:5"
Given('I am on the login page', async ({page}) => {
        await page.goto("https://www.saucedemo.com/")
    // ...
  });
  
  // 2. Missing step definition for "tests\Features\login.feature:8:5"
  When('I enter a valid email address and password', async ({page}) => {
    await page.fill("#user-name","standard_user")
    page.fill("#password","secret_sauce")
    // ...
  });
  
  // 3. Missing step definition for "tests\Features\login.feature:9:5"
  When('I click on the {string} button', async ({page}, arg) => {
    await page.click("#login-button")
    // ...
  });
  
  // 4. Missing step definition for "tests\Features\login.feature:10:5"
  Then('I should be redirected to the dashboard', async ({}) => {
    // ...
  });
  
  // 5. Missing step definition for "tests\Features\login.feature:11:5"
  Then('I should see a welcome message', async ({}) => {
    // ...
  });