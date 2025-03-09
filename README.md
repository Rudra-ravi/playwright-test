# Playwright Test Examples

This repository contains examples of using Playwright for browser automation and testing.

## Features Demonstrated

- Basic page navigation and assertions
- Element interactions (clicking, typing)
- Form filling and submission
- Screenshots and visual comparisons
- API testing (GET, POST, PUT, DELETE)

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/Rudra-ravi/playwright-test.git
cd playwright-test
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

### Running Tests

Run all tests:
```bash
npm test
```

Run tests with browser UI visible:
```bash
npm run test:headed
```

Run a specific test file:
```bash
npx playwright test tests/example.spec.js
```

Run a specific test:
```bash
npx playwright test -g "basic test"
```

### Viewing Test Reports

After running tests, you can view the HTML report:
```bash
npx playwright show-report
```

## Test Examples

### Browser Tests

- **Basic Test**: Navigates to the Playwright website, checks the title, clicks a link, and verifies navigation
- **Interaction Test**: Searches Google and verifies results
- **Element State Test**: Fills out a form and verifies the output
- **Visual Comparison Test**: Takes a screenshot for visual comparison

### API Tests

- **GET Request**: Tests retrieving data from a REST API
- **POST Request**: Tests creating a new resource
- **PUT Request**: Tests updating an existing resource
- **DELETE Request**: Tests deleting a resource

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright Test Documentation](https://playwright.dev/docs/test-intro)