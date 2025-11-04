import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/');
  await page.locator('#headerPanel').getByRole('link', { name: 'About Us' }).click();
  await page.getByText('Solutions', { exact: true }).click();
  await page.locator('#headerPanel').getByRole('link', { name: 'Services' }).click();
  await page.locator('#headerPanel').getByRole('link', { name: 'Products' }).click();
  await page.goto('https://parabank.parasoft.com/parabank/services.htm');
  await page.locator('#headerPanel').getByRole('link', { name: 'Locations' }).click();
});