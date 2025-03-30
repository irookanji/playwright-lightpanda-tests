import { Page } from "@playwright/test";

export const LoginPage = (page: Page) => {
  const usernameInput = "id=user-name";
  const passwordInput = "id=password";
  const loginButton = "id=login-button";

  const setUsername = async (username: string): Promise<void> => {
    await page.fill(usernameInput, username);
  };

  const setPassword = async (password: string): Promise<void> => {
    await page.fill(passwordInput, password);
  };

  const clickLoginButton = async (): Promise<void> => {
    await page.click(loginButton);
  };

  const login = async (username: string, password: string): Promise<void> => {
    await setUsername(username);
    await setPassword(password);
    await clickLoginButton();
  };

  return {
    setUsername,
    setPassword,
    clickLoginButton,
    login,
  };
};
