import {
  Reporter,
  TestCase,
  TestResult,
  Suite,
} from "@playwright/test/reporter";

class CustomReporter implements Reporter {
  onBegin(config: any, suite: Suite) {
    console.log("Test Suite Started");
  }

  onTestBegin(test: TestCase) {
    console.log(`Test Started: ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Test Ended: ${test.title}`);
    console.log(`Status: ${result.status}`);
    if (result.error) {
      console.error(`Error: ${result.error.message}`);
    }
  }

  onEnd(result: any) {
    console.log("Test Suite Ended");
    console.log(`Total Tests: ${result.testCount}`);
    console.log(`Passed: ${result.passed}`);
    console.log(`Failed: ${result.failed}`);
  }
}

export default CustomReporter;
