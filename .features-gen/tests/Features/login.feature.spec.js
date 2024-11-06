/** Generated from: tests\Features\login.feature */
import { test } from "playwright-bdd";

test.describe("User Login", () => {

  test("Successful login with valid credentials", async ({ Given, page, When, And }) => {
    await Given("I am on the login page", null, { page });
    await When("I enter a valid email address and password", null, { page });
    await And("I click on the \"Login\" button", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\Features\\login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Successful login with valid credentials": {"pickleLocation":"6:3"},
};