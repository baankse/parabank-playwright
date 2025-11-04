import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('johnbanks');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('12345');
  await page.getByRole('button', { name: 'Log In' }).click();
});