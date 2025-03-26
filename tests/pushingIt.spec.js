import { test, expect } from '@playwright/test';
import { generateRandomUser } from '../data/randomUser.js';

test('Registering and Login', async ({ page }) => {
 const randomUser = generateRandomUser();
  // Register a new user
  await page.goto('https://pushing-it.vercel.app/');
  await page.locator('id=user').fill(randomUser);
  await page.locator('id=pass').fill('Password1!');
  await page.locator('span.chakra-radio__label:has-text("Female")').click();
  await page.locator('select#day').selectOption({ value: '18' });
  await page.locator('select#month').selectOption({ value: '10' });
  await page.locator('select#year').selectOption({ value: '1996' });
  await page.locator('id=submitForm').click();
  await page.locator('id=logout').click();
  // Login with the newly created user
  await page.locator('id=registertoggle').dblclick();
  await page.locator('id=user').fill(randomUser);
  await page.locator('id=pass').fill('Password1!');
  await page.locator('id=submitForm').click();
  await page.locator('id=logout').click();

});
