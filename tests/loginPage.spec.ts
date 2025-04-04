import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { SecureAreaPage } from "../pages/secure-area-page";
import { URLS } from "../constants";

test.beforeEach(async ({ page }) => {
  await page.goto(URLS.LOGIN);
});

[
  {
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,
    expectedError: false,
    description: "Valid credentials",
  },
  {
    username: process.env.USERNAME!,
    password: "invalidPass",
    expectedError: true,
    expectedErrorMessage: "Your password is invalid! ×",
    description: "Valid username, incorrect password",
  },
  {
    username: "invalidUser",
    password: process.env.PASSWORD!,
    expectedError: true,
    expectedErrorMessage: "Your username is invalid! ×",
    description: "Incorrect username, valid password",
  },
  {
    username: "",
    password: "",
    expectedError: true,
    expectedErrorMessage: "Your username is invalid! ×",
    description: "Empty fields",
  },
].forEach(
  ({
    username,
    password,
    expectedError,
    expectedErrorMessage,
    description,
  }) => {
    test(`Login - ${description}`, async ({ page }) => {
      const loginPage = LoginPage(page);
      const secureAreaPage = SecureAreaPage(page);

      await test.step("Perform login", async () => {
        await loginPage.login(username, password);
      });

      if (expectedError) {
        await test.step("Verify error message is displayed", async () => {
          await expect(page.getByText(`${expectedErrorMessage}`)).toBeVisible();
        });
      } else {
        await test.step("Verify successful login", async () => {
          await expect(page).toHaveURL(URLS.SECURE_PAGE);
          await expect(secureAreaPage.header).toBeVisible();
          await expect(secureAreaPage.subHeader).toBeVisible();
        });
      }
    });
  }
);
