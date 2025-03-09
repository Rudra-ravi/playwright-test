// @ts-check
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  // Navigate to a website
  await page.goto('https://playwright.dev/');
  
  // Assert the page title
  await expect(page).toHaveTitle(/Playwright/);
  
  // Click the get started link
  await page.getByRole('link', { name: 'Get started' }).click();
  
  // Assert the URL after navigation
  await expect(page).toHaveURL(/.*intro/);
  
  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
});

test('interaction test', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');
  
  // Type into the search box
  await page.fill('input[name="q"]', 'Playwright testing');
  
  // Press Enter
  await page.press('input[name="q"]', 'Enter');
  
  // Wait for the results page to load
  await page.waitForSelector('#search');
  
  // Verify that results contain Playwright
  const resultsText = await page.textContent('#search');
  expect(resultsText).toContain('Playwright');
});

test('element state test', async ({ page }) => {
  // Navigate to a form page (using a demo site)
  await page.goto('https://demoqa.com/text-box');
  
  // Fill out a form
  await page.fill('#userName', 'Test User');
  await page.fill('#userEmail', 'test@example.com');
  await page.fill('#currentAddress', '123 Test St');
  await page.fill('#permanentAddress', '456 Permanent Ave');
  
  // Click submit button
  await page.click('#submit');
  
  // Verify the output contains our input
  const output = await page.textContent('.border');
  expect(output).toContain('Test User');
  expect(output).toContain('test@example.com');
});

test('visual comparison test', async ({ page }) => {
  // Navigate to a stable page
  await page.goto('https://playwright.dev/');
  
  // Take a screenshot for visual comparison
  await page.screenshot({ path: 'homepage.png' });
  
  // In a real test, you would compare this with a baseline image
  // using Playwright's built-in comparison tools
});