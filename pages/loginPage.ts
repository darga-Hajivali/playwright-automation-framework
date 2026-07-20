import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  // Define locators as private getters
  private get emailInput(): Locator {
    return this.page.locator('[data-testid="email-input"]');
  }

  private get passwordInput(): Locator {
    return this.page.locator('[data-testid="password-input"]');
  }

  private get loginButton(): Locator {
    return this.page.locator('[data-testid="login-button"]');
  }

  private get rememberMeCheckbox(): Locator {
    return this.page.locator('[data-testid="remember-me"]');
  }

  private get errorMessage(): Locator {
    return this.page.locator('[data-testid="error-message"]');
  }

  private get successMessage(): Locator {
    return this.page.locator('[data-testid="success-message"]');
  }

  private get forgotPasswordLink(): Locator {
    return this.page.getByText('Forgot password?');
  }

  // Define actions as public methods
  async navigateToLoginPage(): Promise<void> {
    await this.goto('https://example.com/login');
    await this.waitForNavigation();
  }

  async login(email: string, password: string): Promise<void> {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
    await this.waitForNavigation();
  }

  async loginWithRememberMe(email: string, password: string): Promise<void> {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.rememberMeCheckbox);
    await this.click(this.loginButton);
    await this.waitForNavigation();
  }

  async clickForgotPassword(): Promise<void> {
    await this.click(this.forgotPasswordLink);
  }

  async getErrorMessage(): Promise<string> {
    await this.waitForElement(this.errorMessage);
    return await this.getText(this.errorMessage);
  }

  async getSuccessMessage(): Promise<string> {
    await this.waitForElement(this.successMessage);
    return await this.getText(this.successMessage);
  }

  async isLoginButtonEnabled(): Promise<boolean> {
    return await this.isEnabled(this.loginButton);
  }

  async getEmailInputValue(): Promise<string> {
    return await this.emailInput.inputValue();
  }
}