import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('demo');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Request Loan' }).click();
  await page.locator('#amount').click();
  await page.locator('#amount').fill('1000');
  await page.locator('#downPayment').click();
  await page.locator('#downPayment').fill('300');
  await page.getByRole('button', { name: 'Apply Now' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
});