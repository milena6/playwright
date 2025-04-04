# Playwright TypeScript Automation Framework

Welcome to the Playwright TypeScript Automation Framework! This project utilizes Playwright and TypeScript to provide a robust solution for end-to-end testing of web applications. Designed for reliability and scalability, it supports testing across multiple browsers and platforms.

## Table of Contents

- [Project Overview](#project-overview)
- [Rationale Behind Tool Selection](#rationale-behind-tool-selection)
- [Features](#features)
- [Design decisions](#design-decisions)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Test Cases Implemented](#test-cases-implemented)
- [Running Tests](#running-tests)
  - [UI Mode](#ui-mode)
  - [GitHub Actions](#github-actions)
- [Playwright Best Practices Implementation](#playwright-best-practices-implementation)

## Project Overview

This framework automates the UI login functionality of a web application by simulating various user interactions and verifying expected outcomes. It utilizes Playwright for browser automation and TypeScript for enhanced code quality and maintainability.

## Rationale Behind Tool Selection

- **Playwright:** Chosen for its capabilities in automating modern web applications across multiple browsers (Chromium, Firefox, and WebKit). Playwright offers features like auto-waiting, capturing trace logs, parallelism and parameterized tests. Its support for headless testing and integration with CI/CD tools aligns with our project's requirements.

- **TypeScript:** Selected to enhance code quality through static typing, which aids in early detection of errors and improves maintainability. TypeScript's compatibility with Playwright allows for a seamless development experience.

## Features

- **Cross-Browser Testing:** Supports Chromium, Firefox, and WebKit browsers.
- **Parallel Test Execution:** Run tests concurrently to speed up the testing process.
- **Detailed Reporting:** Generates comprehensive reports with screenshots and logs for easy debugging.
- **Extensible Framework:** Easily add new test cases and extend functionalities as needed.

## Design Decisions

1. **Test Structure and Organization:**

   - **Page Object Model (POM):** Implemented to encapsulate page elements and actions, promoting reusability and maintainability. This design pattern helps in abstracting the UI details and provides a clean interface for test scripts. [Page Object Model in Playwright](https://playwright.dev/docs/test-structure#page-object-model).

2. **Selector Strategy:**

   - **User-Visible Behavior:** Focused on selecting elements based on user-visible attributes rather than implementation details. This approach ensures that tests interact with elements as end-users would, enhancing test reliability. Additionaly, Playwright built-in locators provide auto waiting and retry-ability. [Test User-Visible Behavior](https://playwright.dev/docs/best-practices#test-user-visible-behavior).

3. **Error Handling and Assertions:**

   - **Robust Assertions:** Incorporated web-first assertions (i.e.`.toBeVisible()`) to validate expected outcomes, including error messages and successful navigation. The web-first assertions wait until the expected condition is met (timeouts set in playwright.config.ts). This practice ensures that the application behaves as intended under various scenarios. [Using Assertions in Playwright](https://playwright.dev/docs/best-practices#use-web-first-assertions).

4. **Security Considerations:**

   - **Environment Variables for Sensitive Data:** Stored sensitive information such as usernames and passwords in environment variables, loaded from a `.env` file, to prevent exposure in the source code. This practice adds a layer of security by isolating secrets from the codebase. [Secure Your Secrets with .env](https://blog.gitguardian.com/secure-your-secrets-with-env/).

5. **Test Independence:**

   - **Isolated Tests:** Designed each test to be independent, ensuring that the outcome of one does not affect others. This approach simplifies debugging and enhances test reliability. [Keeping Tests Independent](https://playwright.dev/docs/best-practices#keep-tests-independent).

6. **Continuous Integration (CI) Integration:**
   - **GitHub Actions:** Configured Playwright tests to run automatically using GitHub Actions, ensuring that tests are executed on every push or pull request. This setup provides immediate feedback on code changes and maintains code quality. [Setting Up CI with Playwright](https://playwright.dev/docs/ci-intro).

## Getting Started

### Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js:** Version 14.x or higher.
- **npm:** Node.js package manager.
- **Playwright:** Browser automation library.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/playwright-typescript-automation.git
   cd playwright-typescript-automation
   ```

````
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
