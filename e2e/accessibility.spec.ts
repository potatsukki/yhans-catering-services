import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const ROUTES = ['/', '/packages', '/about-contact'] as const;
const VIEWPORTS = [
  { name: '360x800', width: 360, height: 800 },
  { name: '375x812', width: 375, height: 812 },
  { name: '390x844', width: 390, height: 844 },
  { name: '768x1024', width: 768, height: 1024 },
  { name: '1024x768', width: 1024, height: 768 },
  { name: '1440x900', width: 1440, height: 900 },
] as const;

async function waitForImages(page: Page) {
  const images = page.locator('main img');
  for (let index = 0; index < await images.count(); index += 1) {
    await images.nth(index).scrollIntoViewIfNeeded();
  }

  await expect.poll(async () => {
    const states = await images.evaluateAll((items) =>
      items.map((image) => image.complete && image.naturalWidth > 0 && (image.currentSrc || image.src).length > 0),
    );
    return states.length > 0 && states.every(Boolean);
  }, { timeout: 30_000 }).toBe(true);
}

async function assertPageReliability(page: Page, expectedRoute: string) {
  await expect(page.locator('main')).toHaveCount(1);
  await expect(page.locator('footer')).toHaveCount(1);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('a[href="#main-content"]')).toHaveCount(1);
  await expect(page.locator('img')).not.toHaveCount(0);

  const structure = await page.evaluate(() => {
    const headings = [...document.querySelectorAll('h1, h2, h3, h4')].map((heading) => Number(heading.tagName.slice(1)));
    const images = [...document.querySelectorAll('img')].map((image) => ({
      alt: image.getAttribute('alt'),
      currentSrc: image.currentSrc,
      src: image.getAttribute('src'),
    }));
    const svgs = [...document.querySelectorAll('svg')].map((svg) => ({
      ariaHidden: svg.getAttribute('aria-hidden'),
      role: svg.getAttribute('role'),
    }));
    const interactive = [...document.querySelectorAll('a, button')]
      .filter((element) => element.getClientRects().length > 0 && (!element.classList.contains('sr-only') || document.activeElement === element))
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          height: rect.height,
          right: rect.right,
          left: rect.left,
          label: element.textContent?.trim().slice(0, 80),
        };
      });
    return {
      headingOrder: headings.every((level, index) => index === 0 || level <= headings[index - 1] + 1),
      images,
      svgs,
      interactive,
      viewportWidth: window.innerWidth,
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    };
  });

  expect(structure.headingOrder, `${expectedRoute} heading order`).toBe(true);
  expect(structure.images.every((image) => image.alt !== null && image.src && image.currentSrc)).toBe(true);
  expect(structure.svgs.every((svg) => svg.ariaHidden === 'true' || svg.role === 'img')).toBe(true);
  expect(
    structure.interactive.every(
      (element) => element.height >= 40 && element.left >= -1 && element.right <= structure.viewportWidth + 1,
    ),
    JSON.stringify(structure.interactive.filter((element) => element.height < 40 || element.left < -1 || element.right > structure.viewportWidth + 1)),
  ).toBe(true);
  expect(structure.overflow, `${expectedRoute} horizontal overflow`).toBe(false);
}

test.describe('responsive geometry and reliability', () => {
  for (const viewport of VIEWPORTS) {
    for (const route of ROUTES) {
      test(`${viewport.name} ${route} has stable geometry, assets, and semantics`, async ({ page }) => {
        const consoleErrors: string[] = [];
        const pageErrors: string[] = [];
        const imageFailures: string[] = [];
        page.on('console', (message) => {
          if (message.type() === 'error') {
            consoleErrors.push(message.text());
          }
        });
        page.on('pageerror', (error) => pageErrors.push(error.message));
        page.on('requestfailed', (request) => {
          if (request.resourceType() === 'image' && request.url().startsWith('http://127.0.0.1:5173/')) {
            imageFailures.push(request.url());
          }
        });

        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(route);
        await waitForImages(page);
        await assertPageReliability(page, route);

        expect(consoleErrors, `${route} console errors`).toEqual([]);
        expect(pageErrors, `${route} uncaught page errors`).toEqual([]);
        expect(imageFailures, `${route} failed local images`).toEqual([]);
      });
    }
  }
});

test.describe('accessibility', () => {
  for (const route of ROUTES) {
    test(`Axe has no serious or critical violations on ${route}`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(route);
      await waitForImages(page);

      const results = await new AxeBuilder({ page }).analyze();
      const severeViolations = results.violations.filter((violation) => violation.impact === 'serious' || violation.impact === 'critical');
      expect(severeViolations, JSON.stringify(severeViolations, null, 2)).toEqual([]);
    });
  }

  test('desktop navigation exposes the active route and keyboard focus indicator', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/packages');

    const navigation = page.getByRole('navigation', { name: 'Primary navigation' });
    await expect(navigation.locator('a[aria-current="page"]')).toHaveAttribute('href', '/packages');

    await page.keyboard.press('Tab');
    const focusState = await page.evaluate(() => {
      const active = document.activeElement;
      if (!active) return { outline: 'none', boxShadow: 'none' };
      const styles = getComputedStyle(active);
      return { outline: styles.outlineStyle, boxShadow: styles.boxShadow };
    });
    expect(focusState.outline !== 'none' || focusState.boxShadow !== 'none').toBe(true);
  });

  test('mobile menu manages focus, Escape, expanded state, and scroll lock', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: 'Open menu' });
    await menuButton.click();
    await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).toBeVisible();
    await expect(page.getByRole('dialog', { name: 'Mobile navigation' }).getByRole('link', { name: 'Home' })).toBeFocused();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');

    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
  });

  test('reduced motion disables the mobile menu animation', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).not.toHaveClass(/animate/);
  });
});

test.describe('200% zoom proxy', () => {
  for (const route of ROUTES) {
    test(`200% zoom CSS viewport remains usable on ${route}`, async ({ page }) => {
      await page.setViewportSize({ width: 720, height: 450 });
      await page.goto(route);
      await waitForImages(page);
      await expect(page.locator('h1')).toHaveCount(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    });
  }
});
