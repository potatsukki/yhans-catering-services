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
    await expect(page.getByRole('heading', { name: 'Meet Chef Marianne' })).toBeVisible();
    await expect(page.getByAltText("Yhan's Catering Services crew standing behind a catered buffet")).toBeVisible();
    await expect(page.getByAltText('Chef Marianne P. Natanawan in chef uniform in a commercial kitchen')).toBeVisible();
    const highlights = page.getByTestId('about-highlights');
    await expect(highlights.getByRole('heading', { name: 'Established in 2010' })).toBeVisible();
    await expect(highlights.getByRole('heading', { name: 'Trusted for Private & Corporate Events' })).toBeVisible();
    await expect(highlights.getByRole('heading', { name: 'Guest Capacity: 50–600' })).toBeVisible();
    await expect(highlights.getByRole('heading', { name: 'DTI & BIR Registered' })).toBeVisible();
    await expect(page.getByText('Inductions').first()).toBeVisible();
    await expect(page.locator('#service-areas').getByText('Nearby Metro Manila areas')).toBeVisible();
    const booking = page.locator('#booking-process');
    await expect(booking.getByText('A 70% down payment is required to reserve the event date.')).toBeVisible();
    await expect(booking.getByText('The remaining balance must be paid three days before the event.')).toBeVisible();
    await expect(page.getByText(/governed by the signed catering contract/)).toBeVisible();
    await expect(page.getByText('Direct Inquiries')).toBeVisible();
    await expect(page.getByText('Corporate and Large Food Orders')).toBeVisible();

    const finalCta = page.getByRole('heading', { name: 'Ready to plan your event?' }).locator('..').locator('..');
    await expect(finalCta.getByRole('link', { name: /Message Us on Facebook/ })).toHaveCount(1);
    await expect(finalCta.getByRole('link', { name: /Request a Quote/ })).toHaveCount(0);

    const contact = page.locator('#contact');
    await expect(contact.locator('a[href="tel:+639566755148"]')).toHaveCount(1);
    await expect(contact.locator('a[href="tel:+639671195792"]')).toHaveCount(1);
    await expect(contact.locator('a[href="mailto:marianne03natanawan@gmail.com"]')).toHaveCount(1);
    const facebook = contact.locator('a[href="https://www.facebook.com/share/1EnpK8EnM1/"]');
    await expect(facebook).toHaveAttribute('target', '_blank');
    await expect(facebook).toHaveAttribute('rel', 'noreferrer noopener');
    await expect(page.locator('form')).toHaveCount(0);

    const locationMap = page.locator('#where-to-find-us');
    await expect(locationMap.getByRole('heading', { name: 'Where to Find Us' })).toBeVisible();
    await expect(locationMap.getByText('Block 19, Lot 11, Dahlia Extension Street')).toBeVisible();
    await expect(locationMap.getByText('Daily, 8:00 AM–7:00 PM')).toBeVisible();
    await expect(locationMap.getByRole('heading', { name: 'Complimentary Food Tasting' })).toBeVisible();
    const mapFrame = locationMap.getByTitle('Google Maps location of Yhan’s Catering Services');
    await expect(mapFrame).toBeVisible();
    await expect(mapFrame).toHaveAttribute('src', /14\.6995033,121\.0536876/);
    await expect(mapFrame).toHaveAttribute('loading', 'lazy');
    const mapLink = locationMap.getByRole('link', { name: /Open in Google Maps/ });
    await expect(mapLink).toHaveAttribute('href', 'https://www.google.com/maps/place/Natanawan+Residence/@14.6995046,121.0530439,19z/data=!3m1!4b1!4m6!3m5!1s0x3397b100609ab79b:0x8660534f6a53f2a!8m2!3d14.6995033!4d121.0536876!16s%2Fg%2F11ybc4ythr?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D');
    await expect(mapLink).toHaveAttribute('target', '_blank');
    await expect(mapLink).toHaveAttribute('rel', 'noreferrer noopener');
    await expect(locationMap.getByRole('link', { name: /Request a Food Tasting/ })).toHaveAttribute('href', 'https://www.facebook.com/share/1EnpK8EnM1/');
    await expect(locationMap.getByRole('link', { name: /Call Before Visiting/ })).toHaveCount(0);

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
    await expect(page.getByTestId('about-hero-content')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');

    const highlightColumns = await page.getByTestId('about-highlights').evaluate((element) =>
      getComputedStyle(element).gridTemplateColumns.split(' ').filter(Boolean).length,
    );
    expect(highlightColumns).toBe(2);

    const bookingScroller = page.getByTestId('booking-process-scroller');
    expect(await bookingScroller.evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
    const firstBookingCard = bookingScroller.locator('li').first();
    const firstCardBox = await firstBookingCard.boundingBox();
    const firstNumberBox = await page.getByTestId('booking-step-number-1').boundingBox();
    expect(firstCardBox).not.toBeNull();
    expect(firstNumberBox).not.toBeNull();
    expect((firstNumberBox?.x ?? 0) - (firstCardBox?.x ?? 0)).toBeLessThan(32);
    expect((firstNumberBox?.y ?? 0) - (firstCardBox?.y ?? 0)).toBeLessThan(32);

    const caterTrack = page.getByTestId('what-we-cater-marquee').locator('.occasion-marquee-track');
    await expect(caterTrack).toHaveCSS('animation-name', 'occasion-marquee-left-to-right');
    const contact = page.locator('#contact');
    await expect(contact.locator('a[href="tel:+639566755148"]')).toBeVisible();
    await expect(contact.locator('a[href="mailto:marianne03natanawan@gmail.com"]')).toHaveCount(1);
    const locationMap = page.locator('#where-to-find-us');
    await locationMap.scrollIntoViewIfNeeded();
    const mapFrame = locationMap.getByTitle('Google Maps location of Yhan’s Catering Services');
    await expect(mapFrame).toBeVisible();
    const mapBox = await mapFrame.boundingBox();
    expect(mapBox?.height ?? 0).toBeGreaterThanOrEqual(320);
    expect(mapBox?.height ?? 0).toBeLessThanOrEqual(360);
    for (const label of ['Open in Google Maps', 'Request a Food Tasting']) {
      await expect(locationMap.getByRole('link', { name: new RegExp(label) })).toBeVisible();
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

    await page.setViewportSize({ width: 900, height: 698 });
    await page.goto('/about-contact');
    await expect(page.getByTestId('about-hero-content')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
  });
});
