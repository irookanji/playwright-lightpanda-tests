import { test, expect } from "@playwright/test"

test('has title', async ({ page }) => {
    await page.goto('https://forhemer.github.io/React-Todo-List/');
    console.log("Page opened, waiting...");
    await page.waitForTimeout(3000); // Adjust the timeout as needed
    console.log("Continuing with the test...");
  });
