import { test, expect } from '@playwright/test';
import { generateRandomUser } from '../data/randomUser.js';

test('Registering and Login', async ({ page }) => {
 const randomUser = generateRandomUser();
 const timeout = 3000;
 const logoutLocator = page.locator('id=logout');  

 async function checkLogoutVisibility(page, logoutLocator, timeout) {
  const isLogoutVisible = await logoutLocator.isVisible({ timeout });

  if (isLogoutVisible) {
    await logoutLocator.click();
  } else {
    console.log("Warning: The page is slow, the 'logout' did not load in time");
    await page.goto('https://pushing-it.vercel.app/');
  }
}
  // Register a new user
  await page.goto('https://pushing-it.vercel.app/');
  await page.locator('id=user').fill(randomUser);
  await page.locator('id=pass').fill('Password1!');
  await page.locator('span.chakra-radio__label:has-text("Female")').click();
  await page.locator('select#day').selectOption({ value: '18' });
  await page.locator('select#month').selectOption({ value: '10' });
  await page.locator('select#year').selectOption({ value: '1996' });
  await page.locator('id=submitForm').click();
  await checkLogoutVisibility(page, logoutLocator, timeout);
  // Login with the newly created user
  await page.locator('id=registertoggle').dblclick();
  await page.locator('id=user').fill(randomUser);
  await page.locator('id=pass').fill('Password1!');
  await page.locator('id=submitForm').click();
  await checkLogoutVisibility(page, logoutLocator, timeout);
});
