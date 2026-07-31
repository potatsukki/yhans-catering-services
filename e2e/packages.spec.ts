import { expect, test } from '@playwright/test';

test.describe('Packages & Services page', () => {
  test('loads confirmed packages, inquiries, and partner services without console errors', async ({ page }) => {
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
    await expect(page.getByText(/Explore the confirmed fruits, fresh items, sweets/)).toBeVisible();
    await expect(page.getByTestId('grazing-inclusions-grid').getByText('8 items')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Packed Meals' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Food Trays' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Additional Event Services' })).toBeVisible();

    await expect(page.getByText('₱30,000').first()).toBeVisible();
    await expect(page.getByText('Good for 50 guests').first()).toBeVisible();
    await expect(page.getByText('Chicken Pesto')).toBeVisible();
    await expect(page.getByText('Best seller')).toHaveCount(0);
    await expect(page.getByText('₱250–₱300 per pack')).toBeVisible();

    const packageB = page.getByRole('heading', { name: 'Package B' }).locator('xpath=ancestor::article');
    await expect(packageB.getByText('Pork Menudo')).toBeVisible();

    const foodTrayCta = page.getByRole('link', { name: /Ask for the Food Tray Menu/ });
    await expect(foodTrayCta).toHaveAttribute('href', 'https://www.facebook.com/share/1EnpK8EnM1/');
    await expect(foodTrayCta).toHaveAttribute('target', '_blank');
    await expect(page.getByText(/arranged through trusted partners/i).first()).toBeVisible();

    const finalCta = page.getByRole('heading', { name: 'Need a custom setup?' }).locator('..').locator('..');
    await expect(finalCta.getByRole('link', { name: /Message Us on Facebook/ })).toHaveCount(1);
    await expect(finalCta.getByRole('link', { name: /Request a Quote/ })).toHaveCount(0);

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

  test('keeps package layouts usable on mobile without overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/packages');

    await expect(page.getByRole('heading', { level: 1, name: 'Packages & Services' })).toBeVisible();
    await expect(page.getByTestId('packages-hero-content')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
    await expect(page.getByTestId('grazing-estimator')).toHaveCount(0);
    await expect(page.getByRole('heading', { name: 'Package A' })).toBeVisible();
    await expect(page.getByText('Sample image').first()).toBeVisible();

    expect(await page.getByTestId('regular-packages-scroller').evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
    expect(await page.getByTestId('grazing-packages-scroller').evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
    expect(await page.getByTestId('packed-meals-scroller').evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);

    const grazingInclusionColumns = await page.getByTestId('grazing-inclusions-grid').evaluate((element) =>
      getComputedStyle(element).gridTemplateColumns.split(' ').filter(Boolean).length,
    );
    expect(grazingInclusionColumns).toBe(1);

    const additionalServiceColumns = await page.getByTestId('additional-services-grid').evaluate((element) =>
      getComputedStyle(element).gridTemplateColumns.split(' ').filter(Boolean).length,
    );
    expect(additionalServiceColumns).toBe(2);

    const inclusionColumns = await page.getByTestId('regular-inclusions-grid').evaluate((element) =>
      getComputedStyle(element).gridTemplateColumns.split(' ').filter(Boolean).length,
    );
    expect(inclusionColumns).toBe(2);

    const dessertItems = page.getByRole('button', { name: /Desserts and sweets/ }).locator('xpath=ancestor::div[1]').locator('ul');
    const dessertColumns = await dessertItems.evaluate((element) =>
      getComputedStyle(element).gridTemplateColumns.split(' ').filter(Boolean).length,
    );
    expect(dessertColumns).toBe(3);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

    await page.setViewportSize({ width: 900, height: 698 });
    await page.goto('/packages');
    await expect(page.getByTestId('packages-hero-content')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
  });
});
