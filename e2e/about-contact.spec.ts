import { expect, test } from '@playwright/test';

test.describe('About & Contact page', () => {
  test('loads approved story, service information, contact actions, and no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/about-contact');
    await expect(page).toHaveTitle("About & Contact | Yhan's Catering Services");
    await expect(page.getByRole('heading', { level: 1, name: 'About & Contact' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Serving Celebrations Since 2010' })).toBeVisible();
    const highlights = page.getByTestId('about-highlights');
    await expect(highlights.getByRole('heading', { name: 'Established in 2010' })).toBeVisible();
    await expect(highlights.getByRole('heading', { name: 'Trusted for Private & Corporate Events' })).toBeVisible();
    await expect(highlights.getByRole('heading', { name: 'Guest Capacity: 50–600' })).toBeVisible();
    await expect(highlights.getByRole('heading', { name: 'DTI & BIR Registered' })).toBeVisible();
    await expect(page.getByText('Inductions')).toBeVisible();
    await expect(page.locator('#service-areas').getByText('Nearby Metro Manila areas')).toBeVisible();
    const booking = page.locator('#booking-process');
    await expect(booking.getByText('A 70% down payment is required to reserve the event date.')).toBeVisible();
    await expect(booking.getByText('The remaining balance must be paid three days before the event.')).toBeVisible();
    await expect(page.getByText(/governed by the signed catering contract/)).toBeVisible();
    await expect(page.getByText('Direct Inquiries')).toBeVisible();
    await expect(page.getByText('Corporate and Large Food Orders')).toBeVisible();

    const contact = page.locator('#contact');
    await expect(contact.locator('a[href="tel:+639566755148"]')).toHaveCount(1);
    await expect(contact.locator('a[href="tel:+639671195792"]')).toHaveCount(1);
    await expect(contact.locator('a[href="mailto:marianne03natanawan@gmail.com"]')).toHaveCount(1);
    const facebook = contact.locator('a[href="https://www.facebook.com/share/1EnpK8EnM1/"]');
    await expect(facebook).toHaveAttribute('target', '_blank');
    await expect(facebook).toHaveAttribute('rel', 'noreferrer noopener');
    await expect(page.locator('form')).toHaveCount(0);

    const mainImages = page.locator('main img');
    for (let index = 0; index < await mainImages.count(); index += 1) {
      await mainImages.nth(index).scrollIntoViewIfNeeded();
    }
    await expect.poll(async () => {
      const images = await mainImages.evaluateAll((items) =>
        items.map((image) => image.complete && image.naturalWidth > 0 && (image.currentSrc || image.src).length > 0),
      );
      return images.length > 2 && images.every(Boolean);
    }, { timeout: 30_000 }).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(consoleErrors).toEqual([]);
  });

  test('remains usable on mobile without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/about-contact');
    await expect(page.getByRole('heading', { level: 1, name: 'About & Contact' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Serving Celebrations Since 2010' })).toBeVisible();
    const contact = page.locator('#contact');
    await expect(contact.locator('a[href="tel:+639566755148"]')).toBeVisible();
    await expect(contact.locator('a[href="mailto:marianne03natanawan@gmail.com"]')).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});
