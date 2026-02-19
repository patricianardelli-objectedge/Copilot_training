const { test, expect } = require('@playwright/test');

test('valid login on Monster (bob@bob.com)', async ({ page }) => {
  await page.goto('https://learn.glitchitsystem.com/monster/', { waitUntil: 'networkidle' });

  await page.fill('#username', 'bob@bob.com');
  await page.fill('#password', 'Test123');

  const loginButton = page.locator('button:has-text("Login")');
  await expect(loginButton).toBeEnabled({ timeout: 5000 });
  await loginButton.click();

  await page.waitForURL('**/#/mine', { timeout: 10000 });
  await expect(page).toHaveURL(/#\/mine/);
});
