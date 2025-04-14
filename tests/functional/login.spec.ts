import { test, expect } from "@playwright/test";
import { LoginPage } from "@pages/login-page";
import { SecureAreaPage } from "@pages/secure-area-page";
import { URLS } from "../../constants";
import { TEST_USERS } from "data/users";

interface LoginTestCase {
  username: string;
  password: string;
  expectedError: boolean;
  expectedErrorMessage?: string;
  description: string;
}

test.beforeEach(async ({ page }) => {
  await page.goto(URLS.LOGIN);
});

TEST_USERS.forEach(
  ({
    username,
    password,
    expectedError,
    expectedErrorMessage,
    description,
  }: LoginTestCase) => {
    test(`Login - ${description}`, async ({ page }) => {
      const loginPage = LoginPage(page);
      const secureAreaPage = SecureAreaPage(page);

      await test.step("Perform login", async () => {
        await loginPage.login(username, password);
      });

      if (expectedError) {
        await test.step("Verify error message is displayed", async () => {
          await expect(page).toHaveURL(URLS.LOGIN);
          await expect(page.getByText(`${expectedErrorMessage}`)).toBeVisible();
        });
      } else {
        await test.step("Verify successful login", async () => {
          await expect(page).toHaveURL(URLS.SECURE_PAGE);
          await expect(secureAreaPage.header).toBeVisible();
          await expect(secureAreaPage.subHeader).toBeVisible();
          await expect(secureAreaPage.logoutButton).toBeVisible();
        });
      }
    });
  }
);
