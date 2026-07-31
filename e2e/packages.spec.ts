import { expect, test } from '@playwright/test';

test.describe('Packages & Services page', () => {
  test('loads confirmed packages, estimator, inquiries, and partner services without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/packages');
    await expect(page).toHaveTitle("Catering Packages | Yhan's Catering Services");
    await expect(page.getByRole('heading', { level: 1, name: 'Packages & Services' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Regular Catering Packages' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Grazing Table Packages' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Packed Meals' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Food Trays' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Additional Event Services' })).toBeVisible();

    await expect(page.getByText('₱30,000').first()).toBeVisible();
    await expect(page.getByText('Good for 50 guests').first()).toBeVisible();
    await expect(page.getByText('Chicken Pesto')).toBeVisible();
    await expect(page.getByText('Best seller')).toHaveCount(1);
    await expect(page.getByText('₱250–₱300 per pack')).toBeVisible();

    const packageB = page.getByRole('heading', { name: 'Package B' }).locator('xpath=ancestor::article');
    await expect(packageB.getByText('Pork Menudo')).toBeVisible();
    await expect(packageB.getByText('Best seller')).toBeVisible();

    const foodTrayCta = page.getByRole('link', { name: /Ask for the Food Tray Menu/ });
    await expect(foodTrayCta).toHaveAttribute('href', 'https://www.facebook.com/share/1EnpK8EnM1/');
    await expect(foodTrayCta).toHaveAttribute('target', '_blank');
    await expect(page.getByText(/arranged through trusted partners/i).first()).toBeVisible();

    const mainImages = page.locator('main img');
    for (let index = 0; index < await mainImages.count(); index += 1) {
      await mainImages.nth(index).scrollIntoViewIfNeeded();
    }
    await expect.poll(async () => {
      const images = await mainImages.evaluateAll((items) =>
        items.map((image) => image.complete && image.naturalWidth > 0 && (image.currentSrc || image.src).length > 0),
      );
      return images.length > 3 && images.every(Boolean);
    }, { timeout: 30_000 }).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(consoleErrors).toEqual([]);
  });

  test('updates the grazing estimate and remains usable on mobile without overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/packages');

    await expect(page.getByRole('heading', { level: 1, name: 'Packages & Services' })).toBeVisible();
    const estimator = page.getByTestId('grazing-estimator');
    const guestInput = estimator.getByRole('spinbutton', { name: 'Number of guests' });
    await expect(guestInput).toHaveValue('50');
    await guestInput.fill('75');
    await expect(estimator.getByRole('status')).toContainText('₱75,000');
    await expect(page.getByText('Sample image').first()).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});
