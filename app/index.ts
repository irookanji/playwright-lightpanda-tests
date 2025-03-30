import { Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

export const Application = (page: Page) => {
  const loginPage = LoginPage(page);

  return {
    loginPage,
  };
};
