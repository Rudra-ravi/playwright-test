// @ts-check
const { chromium } = require('playwright');

/**
 * This script demonstrates using Playwright directly (not through the test runner)
 * to take screenshots of websites.
 */
async function captureScreenshots() {
  // Launch a browser
  const browser = await chromium.launch();
  
  // Create a new browser context
  const context = await browser.newContext();
  
  // Create a new page
  const page = await context.newPage();
  
  // Navigate to websites and take screenshots
  const sites = [
    { url: 'https://playwright.dev/', filename: 'playwright.png' },
    { url: 'https://github.com/', filename: 'github.png' },
    { url: 'https://developer.mozilla.org/', filename: 'mdn.png' }
  ];
  
  console.log('Starting to capture screenshots...');
  
  for (const site of sites) {
    console.log(`Navigating to ${site.url}`);
    await page.goto(site.url, { waitUntil: 'networkidle' });
    
    console.log(`Taking screenshot: ${site.filename}`);
    await page.screenshot({ path: `./screenshots/${site.filename}`, fullPage: true });
  }
  
  // Close browser
  await browser.close();
  console.log('All screenshots captured successfully!');
}

// Create screenshots directory if it doesn't exist
const fs = require('fs');
const dir = './screenshots';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// Run the function
captureScreenshots().catch(error => {
  console.error('Error during screenshot capture:', error);
  process.exit(1);
});