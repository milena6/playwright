import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";
import { URLS } from "../../constants";

// https://playwright.dev/docs/accessibility-testing
// This is a simple automated accessibility test - skipped for now as it highlights multiple accessibility issues
test.describe.skip("Accessibility Scans", () => {
  test.describe.configure({ retries: 0 });

  test("Login page a11y", async ({ page }) => {
    await page.goto(URLS.LOGIN);
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
