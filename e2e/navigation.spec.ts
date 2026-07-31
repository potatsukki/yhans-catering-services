import { expect, test } from '@playwright/test';

test.describe('shared navigation', () => {
  test('renders the three public routes with one meaningful heading', async ({ page }) => {
    const routes = [
      ['/', 'Making Every Celebration Delicious'],
      ['/packages', 'Packages & Services'],
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
    await expect(page).toHaveTitle("Yhan's Catering Services | Catering in Quezon City");

    const primaryNavigation = page.getByRole('navigation', { name: 'Primary navigation' });
    await primaryNavigation.getByRole('link', { name: 'Packages & Services' }).click();
    await expect(page).toHaveURL(/\/packages$/);
    await expect(page.locator('h1')).toHaveText('Packages & Services');
    await expect(primaryNavigation.getByRole('link', { name: 'Packages & Services' })).toHaveAttribute('aria-current', 'page');
    await expect(page).toHaveTitle("Catering Packages | Yhan's Catering Services");
    expect(consoleErrors).toEqual([]);
  });

  test('loads every route directly and preserves browser back/forward history', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const routes = [
      ['/', 'Making Every Celebration Delicious'],
      ['/packages', 'Packages & Services'],
      ['/about-contact', 'About & Contact'],
    ] as const;

    for (const [route, heading] of routes) {
      const response = await page.goto(route);
      expect(response?.ok()).toBe(true);
      await expect(page.locator('h1')).toHaveText(heading);
    }

    await page.goto('/');
    const navigation = page.getByRole('navigation', { name: 'Primary navigation' });
    await navigation.getByRole('link', { name: 'Packages & Services' }).click();
    await navigation.getByRole('link', { name: 'About & Contact' }).click();
    await expect(navigation.locator('a[aria-current="page"]')).toHaveAttribute('href', '/about-contact');

    await page.goBack();
    await expect(page).toHaveURL(/\/packages$/);
    await expect(navigation.locator('a[aria-current="page"]')).toHaveAttribute('href', '/packages');

    await page.goForward();
    await expect(page).toHaveURL(/\/about-contact$/);
    await expect(navigation.locator('a[aria-current="page"]')).toHaveAttribute('href', '/about-contact');
  });
});
