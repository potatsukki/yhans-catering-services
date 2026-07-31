import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
  test('loads the complete Home hierarchy, CTA destinations, local images, and no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1, name: 'Making Every Celebration Delicious' })).toBeVisible();
    await expect(page.getByText('Catering for Every Occasion')).toBeVisible();
    await expect(page.getByText('Our Services')).toBeVisible();
    await expect(page.getByText('Popular Choices')).toBeVisible();
    await expect(page.getByText("Why Choose Yhan's?")).toBeVisible();
    await expect(page.getByText('From Recent Events')).toBeVisible();
    await expect(page.getByText("Let's Make Your Next Event Delicious & Memorable")).toBeVisible();

    const hero = page.getByTestId('home-hero');
    await expect(hero.getByRole('link', { name: 'View Packages' })).toHaveAttribute('href', '/packages');
    const facebookCta = hero.getByRole('link', { name: /Message Us on Facebook/ });
    await expect(facebookCta).toHaveAttribute('href', 'https://www.facebook.com/share/1EnpK8EnM1/');
    await expect(facebookCta).toHaveAttribute('target', '_blank');
    const quoteCta = hero.getByRole('link', { name: /Request a Quote/ });
    await expect(quoteCta).toHaveAttribute('href', 'https://www.facebook.com/share/1EnpK8EnM1/');
    await expect(quoteCta).toHaveAttribute('target', '_blank');

    await page.evaluate(async () => {
      const step = Math.max(1, window.innerHeight * 0.8);
      for (let top = 0; top < document.body.scrollHeight; top += step) {
        window.scrollTo(0, top);
        await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));
      }
      window.scrollTo(0, 0);
    });
    await expect.poll(async () => {
      const imageStates = await page.locator('main img').evaluateAll((images) =>
        images.map((image) => ({
          complete: image.complete,
          naturalWidth: image.naturalWidth,
          src: image.currentSrc || image.src,
        })),
      );
      return imageStates.length > 3 && imageStates.every((image) => image.complete && image.naturalWidth > 0 && image.src.length > 0);
    }, { timeout: 30_000 }).toBe(true);

    const imageStates = await page.locator('main img').evaluateAll((images) =>
      images.map((image) => ({
        complete: image.complete,
        naturalWidth: image.naturalWidth,
        src: image.currentSrc || image.src,
      })),
    );
    expect(imageStates.length).toBeGreaterThan(3);
    expect(imageStates.every((image) => image.complete && image.naturalWidth > 0 && image.src.length > 0)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(consoleErrors).toEqual([]);
  });

  test('navigates from View Packages and remains usable on mobile without overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1, name: 'Making Every Celebration Delicious' })).toBeVisible();
    await expect(page.getByTestId('home-hero').getByRole('link', { name: 'View Packages' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View Packages' })).toHaveAttribute('href', '/packages');
    await expect(page.getByText('Sample images only')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

    await page.getByTestId('home-hero').getByRole('link', { name: 'View Packages' }).click();
    await expect(page).toHaveURL(/\/packages$/);
    await expect(page.locator('h1')).toHaveText('Packages & Services');
  });
});
