import { expect, test } from '@playwright/test';

test.describe('shared navigation', () => {
  test('renders the three public routes with one meaningful heading', async ({ page }) => {
    const routes = [
      ['/', 'Making Every Celebration Delicious'],
      ['/packages', 'Menu'],
      ['/about-contact', 'About & Contact'],
    ] as const;

    for (const [route, heading] of routes) {
      await page.goto(route);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toHaveText(heading);
    }
  });

  test('renders the not-found route without crashing', async ({ page }) => {
    await page.goto('/not-a-real-route');
    await expect(page.locator('h1')).toHaveText('Page not found');
  });

  test('supports desktop route selection, active state, and route metadata without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page).toHaveTitle("Yhan's Catering Services | Catering in Fairview, Quezon City");

    const primaryNavigation = page.getByRole('navigation', { name: 'Primary navigation' });
    const packagesMenu = primaryNavigation.getByRole('button', { name: 'Menu' });
    await packagesMenu.click();
    await expect(packagesMenu).toHaveAttribute('aria-expanded', 'true');
    await primaryNavigation.getByRole('link', { name: 'Food Trays' }).click();
    await expect(page).toHaveURL(/\/packages#food-trays$/);
    await expect(page.locator('h1')).toHaveText('Menu');
    await expect(primaryNavigation.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-current', 'page');
    await expect.poll(async () => page.locator('#food-trays').evaluate((target) => {
      const header = document.querySelector('[data-site-header]');
      return Math.round(target.getBoundingClientRect().top - (header?.getBoundingClientRect().height ?? 0));
    })).toBe(12);
    await expect(page).toHaveTitle("Catering Menu & Food Trays in Fairview, Quezon City | Yhan's Catering Services");
    expect(consoleErrors).toEqual([]);
  });

  test('loads every route directly and preserves browser back/forward history', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const routes = [
      ['/', 'Making Every Celebration Delicious'],
      ['/packages', 'Menu'],
      ['/about-contact', 'About & Contact'],
    ] as const;

    for (const [route, heading] of routes) {
      const response = await page.goto(route);
      expect(response?.ok()).toBe(true);
      await expect(page.locator('h1')).toHaveText(heading);
    }

    await page.goto('/');
    const navigation = page.getByRole('navigation', { name: 'Primary navigation' });
    await navigation.getByRole('button', { name: 'Menu' }).click();
    await navigation.getByRole('link', { name: 'Menu', exact: true }).click();
    await navigation.getByRole('button', { name: 'About & Contact' }).click();
    await navigation.getByRole('link', { name: 'About & Contact' }).click();
    await expect(navigation.getByRole('button', { name: 'About & Contact' })).toHaveAttribute('aria-current', 'page');

    await page.goBack();
    await expect(page).toHaveURL(/\/packages#packages-overview$/);
    await expect(navigation.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-current', 'page');

    await page.goForward();
    await expect(page).toHaveURL(/\/about-contact#about-overview$/);
    await expect(navigation.getByRole('button', { name: 'About & Contact' })).toHaveAttribute('aria-current', 'page');
  });
});
