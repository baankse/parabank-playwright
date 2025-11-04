import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('demo');
  await page.getByRole('button', { name: 'Log In' }).click();
  
  await page.getByRole('link', { name: 'Bill Pay' }).click();
  await page.locator('input[name="amount"]').click();
  await page.locator('input[name="amount"]').fill('300');
  await page.locator('input[name="payee.accountNumber"]').click();
  await page.locator('input[name="payee.accountNumber"]').fill('98292738');
  await page.locator('input[name="verifyAccount"]').click();
  await page.locator('input[name="verifyAccount"]').fill('98292738');
  await page.getByRole('button', { name: 'Send Payment' }).click();
});