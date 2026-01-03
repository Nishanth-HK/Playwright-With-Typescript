import { Page, Locator } from '@playwright/test';

export class AccountPage {
  private readonly page: Page;

  readonly accountHeading: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountHeading = page.locator('h1');
    this.logoutButton = page.locator('#logout');
  }

  async getAccountHeadingText(): Promise<string | null> {
    return await this.accountHeading.textContent();
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }
}
