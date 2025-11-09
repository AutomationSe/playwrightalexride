import { Page, Locator, expect } from '@playwright/test';

export abstract class Basepage {
  constructor(protected readonly page: Page) {}

  protected async gotoURL(path: string) {
    // Normalize path: accept full URLs, '/path', or 'path'
    const trimmed = path.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      await this.page.goto(trimmed);
      return;
    }

    // Ensure it starts with '/': Playwright will resolve relative paths using baseURL from config
    const resolvedPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
    await this.page.goto(resolvedPath);
  }

  
  private toLocator(selector: string | Locator): Locator {
    if (typeof selector === 'string') {
      return this.page.locator(selector);
    }
    return selector;
  }

  protected async basePageclick(selector: string | Locator) {
    await this.toLocator(selector).click();
  }

  protected async basePageFill(selector: string, value: string){
    await this.toLocator(selector).fill(value);
  }

  protected async basePageexpectvisible(selector: string | Locator){
    await expect(this.toLocator(selector)).toBeVisible();
  }

}