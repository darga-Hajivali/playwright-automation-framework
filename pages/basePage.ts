import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigation methods
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async getCurrentURL(): Promise<string> {
    return this.page.url();
  }

  // Element interaction methods
  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  async getText(locator: Locator): Promise<string> {
    return (await locator.textContent()) || '';
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    return await locator.isEnabled();
  }

  // Wait utilities
  async waitForElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }

  async waitForNavigation(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  // Page utilities
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async takeScreenshot(filename: string): Promise<void> {
    await this.page.screenshot({ path: `screenshots/${filename}.png` });
  }
}