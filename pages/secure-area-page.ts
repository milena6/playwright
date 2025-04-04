import { Page } from "@playwright/test";

export function SecureAreaPage(page: Page) {
  const success = page
    .getByText("You logged into a secure area")
    .filter({ visible: true });
  const header = page.getByRole("heading", {
    name: "Secure Area",
    exact: true,
  });
  const subHeader = page.getByRole("heading", {
    name: "Welcome to the Secure Area.",
  });
  const logoutButton = page.getByRole("link", { name: "Logout" });

  return {
    header,
    success,
    subHeader,
    logoutButton,
  };
}
