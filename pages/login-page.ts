import { Page } from "@playwright/test";

export function LoginPage(page: Page) {
  const header = page.getByText("Needs reconnecting").filter({ visible: true });
  const logoutSuccess = page
    .getByText("You logged out of the secure")
    .filter({ visible: true });
  const usernameInput = page.getByRole("textbox", { name: "Username" });
  const passwordInput = page.getByRole("textbox", { name: "Password" });
  const loginButton = page.getByRole("button", { name: " Login" });

  async function login(username: string, password: string) {
    await usernameInput.fill(username);
    await passwordInput.fill(password);
    await loginButton.click();
  }

  return {
    header,
    logoutSuccess,
    usernameInput,
    passwordInput,
    loginButton,
    login,
  };
}
