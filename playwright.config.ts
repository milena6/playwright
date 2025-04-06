import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: 4,
  reporter: [["html", { open: "never" }], ["json"]],

  globalSetup: require.resolve("./global/global-setup.ts"),

  // Timeouts
  timeout: 30000,
  expect: {
    timeout: 5000,
  },

  use: {
    baseURL: "https://the-internet.herokuapp.com",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 15"] },
    },
  ],
});
