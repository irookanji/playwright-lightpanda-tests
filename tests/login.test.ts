import { expect, test } from "../fixtures/base"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test.afterEach(async ({ page }) => {
  await page.close()
})

test("should show error message with incorrect credentials", async ({ page, app }) => {
  await app.loginPage.login("invalid_user", "invalid_password")
  await expect(page.locator("h3[data-test='error']")).toBeVisible()
  await expect(page.locator("h3[data-test='error']")).toHaveText(
    "Epic sadface: Username and password do not match any user in this service"
  )
})

test("should redirect to inventory page after successful login", async ({ page, app }) => {
  await app.loginPage.login("standard_user", "secret_sauce")

  // Verify both URL and logo to ensure proper navigation
  const url = await page.url()
  expect(url).toContain("/inventory.html")
  await expect(page.locator(".app_logo")).toHaveText("Swag Labs")
})

test("should show error message with empty credentials", async ({ page, app }) => {
  await app.loginPage.login("", "")
  await expect(page.locator("h3[data-test='error']")).toBeVisible()
  await expect(page.locator("h3[data-test='error']")).toHaveText(
    "Epic sadface: Username is required"
  )
})
