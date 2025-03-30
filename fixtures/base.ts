import { test as base, expect } from "@playwright/test"
import { Application } from "../app"

export const test = base.extend<{
  app: ReturnType<typeof Application>;
}>({
  app: async ({ page }, use) => {
    const app = Application(page)

    // Use the fixture
    await use(app)
  },
});

export { expect }


// import { test as base, expect } from "@playwright/test"
// import { Application } from "../app"

// export const test = base.extend<{
//   app: ReturnType<typeof Application>
//   loginPage: ReturnType<typeof Application>['loginPage']
// }>({
//   app: async ({ page }, use) => {
//     const app = Application(page)
//     await use(app)
//   },
//   loginPage: async ({ app }, use) => {
//     await use(app.loginPage)
//   }
// })

// export { expect }
