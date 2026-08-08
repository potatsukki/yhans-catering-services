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

    await panel.getByRole('link', { name: 'Menu' }).click();
    await expect(page).toHaveURL(/\/packages$/);
    await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).toHaveCount(0);

    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
  });

  test('keeps the menu, grazing table, contact actions, and footer readable', async ({ page }) => {
    await page.goto('/packages');
    await expect(page.getByRole('heading', { level: 1, name: 'Menu' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Customize Your Catering Menu' })).toBeVisible();
    await expect(page.getByRole('radio')).toHaveCount(0);
    await expect(page.getByTestId('menu-category-beef').getByText('Swipe the image to browse dishes')).toBeVisible();
    expect(await page.getByTestId('custom-menu-categories').evaluate((element) => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
    expect(await page.getByTestId('menu-dishes-beef').evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
    await expect(page.getByTestId('menu-category-beef').getByText('Swipe the image to browse dishes')).toBeVisible();
    await expect(page.getByRole('button', { name: /Go to (next|previous)|Go back to/ })).toHaveCount(0);
    const grazingTable = page.getByRole('region', { name: 'Grazing Table' });
    await expect(grazingTable).toBeVisible();
    await expect(grazingTable.getByText('Seasonal Fruits (Grapes, Watermelon, Oranges, and Strawberries)')).toBeVisible();
    await expect(grazingTable.getByRole('link', { name: /Ask About This Grazing Table/ })).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    expect(await page.evaluate(() => {
      window.scrollTo(1_000, window.scrollY);
      return window.scrollX === 0;
    })).toBe(true);

    await page.goto('/about-contact');
    await expect(page.locator('#contact a[href="tel:+639566755148"]')).toBeVisible();
    await expect(page.locator('#contact a[href="mailto:marianne03natanawan@gmail.com"]')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});
