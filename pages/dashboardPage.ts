import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class DashboardPage extends BasePage {
  // Locators
  private get welcomeMessage(): Locator {
    return this.page.locator('[data-testid="welcome-message"]');
  }

  private get userProfile(): Locator {
    return this.page.locator('[data-testid="user-profile"]');
  }

  private get logoutButton(): Locator {
    return this.page.getByRole('button', { name: /logout/i });
  }

  private get settingsButton(): Locator {
    return this.page.locator('[data-testid="settings-button"]');
  }

  // Actions
  async navigateToDashboard(): Promise<void> {
    await this.goto('https://example.com/dashboard');
    await this.waitForNavigation();
  }

  async getWelcomeMessage(): Promise<string> {
    await this.waitForElement(this.welcomeMessage);
    return await this.getText(this.welcomeMessage);
  }

  async isUserProfileVisible(): Promise<boolean> {
    return await this.isVisible(this.userProfile);
  }

  async logout(): Promise<void> {
    await this.click(this.logoutButton);
    await this.waitForNavigation();
  }

  async clickSettings(): Promise<void> {
    await this.click(this.settingsButton);
  }

  async isDashboardLoaded(): Promise<boolean> {
    return await this.isVisible(this.welcomeMessage);
  }
}