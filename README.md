# Playwright TypeScript Automation Framework

Welcome to the Playwright TypeScript Automation Framework! This project utilizes Playwright and TypeScript to provide a robust solution for end-to-end testing of web applications. Designed for reliability and scalability, it supports testing across multiple browsers and platforms.


## 📋 Table of Contents

- [Rationale Behind Tool Selection](#rationale-behind-tool-selection)
- [Features](#features)
- [Design decisions](#design-decisions)
- [Test design](#test-design)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Accessibility Testing](#accessibility-testing)
- [GitHub Actions](#github-actions)

## Rationale Behind Tool Selection

- **Playwright:** Chosen for its capabilities in automating modern web applications across multiple browsers (Chromium, Firefox, and WebKit). Playwright offers features like auto-waiting, capturing trace logs, parallelism and parameterized tests. Its support for headless testing and integration with CI/CD tools aligns with our project's requirements.

- **TypeScript:** Selected to enhance code quality through static typing, which aids in early detection of errors and improves maintainability. TypeScript's compatibility with Playwright allows for a seamless development experience.

## Features

- **Cross-Browser Testing:** Supports Chromium, Firefox, and WebKit browsers.
- **Cross-Platform Testing:** The tests run on web and mobile - making sure the design is responsive.
- **Parallel Test Execution:** Run tests concurrently to speed up the testing process.
- **Detailed Reporting:** Generates comprehensive reports with screenshots and logs for easy debugging.
- **Extensible Framework:** Easily add new test cases and extend functionalities as needed.

## Design Decisions

1. **Test Structure and Organization:**

   - **Page Object Model (POM):** Implemented to encapsulate page elements and actions, promoting reusability and maintainability. This design pattern helps in abstracting the UI details and provides a clean interface for test scripts. [Page Object Model in Playwright](https://playwright.dev/docs/test-structure#page-object-model).

2. **Selector Strategy:**

   - **User-Visible Behavior:** Focused on selecting elements based on user-visible attributes rather than implementation details. This approach ensures that tests interact with elements as end-users would, enhancing test reliability. Additionaly, Playwright built-in locators provide auto waiting and retry-ability. [Test User-Visible Behavior](https://playwright.dev/docs/best-practices#test-user-visible-behavior).

3. **Robust Assertions:** Incorporated web-first assertions (i.e.`.toBeVisible()`) to validate expected outcomes, including error messages and successful navigation. The web-first assertions wait until the expected condition is met (timeouts set in playwright.config.ts). This practice ensures that the application behaves as intended under various scenarios. [Using Assertions in Playwright](https://playwright.dev/docs/best-practices#use-web-first-assertions).

4. **Security Considerations:**

   - **Environment Variables for Sensitive Data:** Stored sensitive information such as usernames and passwords in environment variables, loaded from a `.env` file, to prevent exposure in the source code. This practice adds a layer of security by isolating secrets from the codebase. [Secure Your Secrets with .env](https://blog.gitguardian.com/secure-your-secrets-with-env/).

5. **Test Independence:**

   - **Isolated Tests:** Designed each test to be independent, ensuring that the outcome of one does not affect others. This approach simplifies debugging and enhances test reliability. [Keeping Tests Independent](https://playwright.dev/docs/best-practices#keep-tests-independent).

6. **Continuous Integration (CI) Integration:**
   - **GitHub Actions:** Configured Playwright tests to run automatically using GitHub Actions, ensuring that tests are executed on every push or pull request. This setup provides immediate feedback on code changes and maintains code quality.

## Test design

- Data-driven testing: All login scenarios (valid, invalid, edge cases) are defined in a test data array. This approach reduces code duplication and makes it easy to extend test coverage by simply adding more scenarios.

- Preconditions in beforeEach: Each test begins by navigating to the login page, ensuring a clean and consistent starting point.

- Structured test steps: Tests are broken into clearly defined steps (Perform login, Verify error message, Verify successful login) for better traceability and debugging.

## Getting Started

### Prerequisites

Before setting up the project, ensure you have the following installed:

- **VSCode** as IDE (recommendation).
- **Node.js:** Version 14.x or higher.
- **npm:** Node.js package manager.
- **Playwright:** Browser automation library.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/playwright-typescript-automation.git
   cd playwright-typescript-automation
   ```

2. Install Dependencies:

```bash
npm install
````

3. Install Playwright Browsers:

```bash
npx playwright install --with-deps
```

### Configuration

Configure the USERNAME and PASSWORD in the .env file located at the root of the project.

## Running tests

Playwright offers flexible commands to run tests:

### Run All Tests
To execute all tests in the project:

```bash
npx playwright test
```

This command runs all tests as configured in playwright.config file.

### Run Tests in UI Mode
For an interactive experience that allows you to visually inspect and debug tests, launch UI mode with:

```bash
npx playwright test --ui
```
UI mode provides features like time-travel debugging and a watch mode for efficient test development.

### Run Tests for a specific project
There are multiple projects configured (e.g., different browsers or platforms) in this repository. To run a specific one, use the --project flag:

```bash
npx playwright test --project=chromium
```
Replace _chromium_ with the name of the project you wish to test.

### Run a Single Test File
To run a specific test file, provide the path to the test file:

```bash
npx playwright test login.spec.ts
```
This command will execute only the tests within the specified file.

### Run Tests in a Specific Folder
To run all tests within a particular folder:

```bash
npx playwright test tests/folder-name/
```
Replace folder-name with the name of your folder containing the test files.

### Run Tests in Headed Mode
By default, Playwright runs tests in headless mode (without a visible UI). To run tests in headed mode (with the browser UI), use the --headed flag:

```bash
npx playwright test --headed
```

### Run Tests in Debug Mode
For an in-depth debugging experience, you can run tests in debug mode, which launches the Playwright Inspector:

```bash
npx playwright test --debug
```

## Accessibility testing

This project includes a simple automated accessibility test using `@axe-core/playwright`. The goal is to identify potential accessibility issues early in the development process.

Notes
The test is currently skipped (`test.describe.skip`) because it highlights multiple accessibility issues on the login page.

You can enable the test by removing .skip once the known issues are addressed.

`axe-core` automatically scans the page for WCAG violations and reports them in a structured format.

You can run this test using this command:

```bash
npx playwright test tests/accessibility/
```
 or
 ```bash
npx playwright test a11y-login-page.spec.ts
```

## GitHub Actions

This project uses `GitHub Actions` as a CI/CD tool to run Playwright tests automatically on each push or pull request to the main branch.

### What the workflow does:
- Checks out the repository and sets up Node.js
- Runs TypeScript type checks to catch issues early
- Installs project dependencies and Playwright browsers
- Executes Playwright tests from the ./functional folder
- Generates a detailed HTML test report
- Uploads the report as an artifact, with a unique timestamp
- Deploys the report to GitHub Pages
- Displays a direct link to the report in the GitHub Actions summary

### Report Access
After tests run, you can view the results 👉 [here](https://milena6.github.io/playwright/).
