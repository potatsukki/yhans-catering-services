import { expect, test } from '@playwright/test';

test.describe('mobile navigation', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('opens, closes after route selection, and supports Escape', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: 'Open menu' });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const panel = page.getByRole('dialog', { name: 'Mobile navigation' });
    await expect(panel).toBeVisible();
    await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');

    await panel.getByRole('link', { name: 'Packages & Services' }).click();
    await expect(page).toHaveURL(/\/packages$/);
    await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).toHaveCount(0);

    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
  });

  test('keeps package cards, grazing inclusions, contact actions, and footer readable', async ({ page }) => {
    await page.goto('/packages');
    await expect(page.getByRole('heading', { level: 1, name: 'Packages & Services' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Package 01' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Package D' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Grazing-table inclusions' })).toBeVisible();
    await expect(page.getByText('Seasonal fruits')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

    await page.goto('/about-contact');
    await expect(page.locator('#contact a[href="tel:+639566755148"]')).toBeVisible();
    await expect(page.locator('#contact a[href="mailto:marianne03natanawan@gmail.com"]')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});
