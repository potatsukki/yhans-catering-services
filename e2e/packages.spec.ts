import { expect, test } from '@playwright/test';

test.describe('Menu page', () => {
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
    await expect(page.getByRole('heading', { level: 1, name: 'Menu' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Customize Your Catering Menu' })).toBeVisible();
    const grazingTable = page.getByRole('region', { name: 'Grazing Table' });
    await expect(grazingTable.getByRole('heading', { name: 'Grazing Table', exact: true })).toBeVisible();
    await expect(grazingTable.getByText(/A complete grazing table setup/)).toBeVisible();
    await expect(grazingTable.getByRole('heading', { name: 'Grazing Table Inclusions' })).toBeVisible();
    await expect(grazingTable.getByTestId('grazing-table-inclusions').locator('li')).toHaveCount(22);
    const packedMeals = page.getByRole('region', { name: 'Packed Meals' });
    await expect(packedMeals.getByRole('heading', { name: 'Packed Meals', exact: true })).toBeVisible();
    await expect(packedMeals.getByRole('heading', { name: 'Breakfast Food Packs' })).toBeVisible();
    await expect(packedMeals.getByTestId('breakfast-meal-grid').locator('li')).toHaveCount(6);
    await expect(packedMeals.getByText('Corned Beef, Egg & Rice')).toBeVisible();
    await expect(packedMeals.getByText('Ham, Egg & Rice')).toBeVisible();
    await expect(packedMeals.getByRole('heading', { name: 'Lunch & Dinner Food Packs' })).toBeVisible();
    await expect(packedMeals.getByTestId('packed-meal-grid').locator('li')).toHaveCount(11);
    await expect(packedMeals.getByText('Best Seller')).toHaveCount(1);
    await expect(packedMeals.getByText('All lunch and dinner food packs include rice and vegetables.')).toHaveCount(1);
    await expect(packedMeals.getByTestId('packed-meal-placeholder')).toHaveCount(0);
    await expect(packedMeals.getByText(/Photo coming soon/i)).toHaveCount(0);
    await expect(packedMeals.getByRole('img')).toHaveCount(1);
    await expect(packedMeals.getByRole('link', { name: /Ask About Packed Meals/ })).toHaveCount(2);
    const foodTrays = page.getByRole('region', { name: 'Food Trays' });
    await expect(foodTrays.getByRole('heading', { name: 'Food Trays', exact: true })).toBeVisible();
    await expect(foodTrays.getByText(/minimum of 25 guests/)).toBeVisible();
    await expect(foodTrays.getByTestId('food-tray-catalog').locator('article')).toHaveCount(39);
    await expect(foodTrays.getByText('Good for at least 25 guests')).toHaveCount(0);
    await expect(foodTrays.getByText('Price upon inquiry')).toHaveCount(0);
    await expect(foodTrays.getByText('Photo coming soon')).toHaveCount(0);
    await expect(foodTrays.getByTestId('food-tray-placeholder')).toHaveCount(0);
    await expect(foodTrays.getByTestId('food-tray-catalog').locator('img')).toHaveCount(39);
    await expect(foodTrays.locator('[data-testid^="food-tray-category-"]')).toHaveCount(7);
    await expect(foodTrays.getByText('Best Seller')).toHaveCount(1);
    await expect(foodTrays.getByRole('link', { name: /Ask for Food Tray Prices/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    await expect(foodTrays.getByRole('link', { name: /Message Us/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    await expect(page.getByRole('heading', { name: 'Additional Event Services' })).toBeVisible();

    await expect(page.getByText('₱30,000')).toHaveCount(0);
    await expect(page.getByText(/Good for 50 guests/)).toHaveCount(0);
    await expect(page.getByRole('radio')).toHaveCount(0);
    await expect(page.getByText('Sample image')).toHaveCount(0);
    await expect(page.getByTestId('custom-menu-categories').getByText('Best Seller')).toHaveCount(1);
    await expect(page.getByText(/Want to replace a category or add another dish/)).toHaveCount(0);
    await expect(page.getByTestId('menu-choices-summary')).toHaveCount(0);
    await expect(page.getByTestId('menu-dishes-beef').getByText('Beef with Mushrooms', { exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: /Discuss Your Menu with Yhan’s/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    await expect(page.getByTestId('custom-menu-categories').getByText('Chicken Pesto Pasta', { exact: true })).toBeVisible();
    await expect(packedMeals).not.toHaveText(/₱250|₱300|per pack/);

    await expect(grazingTable.getByText('₱1,000')).toHaveCount(1);
    await expect(grazingTable.getByText('50 guests')).toBeVisible();
    await expect(grazingTable.getByText('Total depends on confirmed guest count')).toBeVisible();
    await expect(grazingTable.getByText('Includes tables and chairs')).toBeVisible();
    await expect(grazingTable.getByText('Seasonal Fruits (Grapes, Watermelon, Oranges, and Strawberries)')).toBeVisible();
    await expect(grazingTable.getByRole('link', { name: /Ask About This Grazing Table/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    await expect(page.getByRole('heading', { name: /Package [A-D]/ })).toHaveCount(0);

    await expect(foodTrays.getByRole('link', { name: /Ask for Food Tray Prices/ })).toHaveAttribute('target', '_blank');
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

  test('keeps the customizable menu and grazing table responsive without page overflow', async ({ page }) => {
    const viewports = [
      { width: 375, height: 844 },
      { width: 768, height: 900 },
      { width: 1024, height: 900 },
      { width: 1186, height: 900 },
      { width: 1440, height: 900 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/packages');

      await expect(page.getByRole('heading', { name: 'Customize Your Catering Menu' })).toBeVisible();
      await expect(page.getByTestId('custom-menu-categories')).toBeVisible();
      await expect(page.getByRole('radio')).toHaveCount(0);

      const customMenuCardWidths = await page.getByTestId('custom-menu-categories').locator('article').evaluateAll((cards) =>
        cards.map((card) => card.getBoundingClientRect().width),
      );
      expect(Math.max(...customMenuCardWidths) - Math.min(...customMenuCardWidths)).toBeLessThanOrEqual(1);

      if (viewport.width >= 768) {
        const customMenuColumns = await page.getByTestId('menu-dishes-pork').evaluate((element) => {
          const cards = Array.from(element.children);
          const firstTop = cards[0]?.getBoundingClientRect().top;
          return cards.filter((card) => Math.abs(card.getBoundingClientRect().top - firstTop) <= 1).length;
        });
        expect(customMenuColumns).toBe(viewport.width >= 1024 ? 5 : 4);
        for (const categoryId of ['beef', 'pork', 'chicken', 'vegetables', 'pasta-noodles', 'dessert']) {
          const leftGap = await page.getByTestId(`menu-dishes-${categoryId}`).evaluate((element) => {
            const listBounds = element.getBoundingClientRect();
            const firstBounds = element.firstElementChild!.getBoundingClientRect();
            return Math.abs(firstBounds.left - listBounds.left);
          });
          expect(leftGap).toBeLessThanOrEqual(1);
        }
      } else {
        for (const categoryId of ['beef', 'pork', 'chicken', 'vegetables', 'pasta-noodles', 'dessert']) {
          expect(await page.getByTestId(`menu-dishes-${categoryId}`).evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
        }
      }

      const grazingTable = page.getByRole('region', { name: 'Grazing Table' });
      await expect(grazingTable).toBeVisible();
      await expect(grazingTable.getByRole('img', { name: /Complete grazing table setup/ })).toBeVisible();
      await expect(grazingTable.getByRole('link', { name: /Ask About This Grazing Table/ })).toBeVisible();

      const packedMeals = page.getByRole('region', { name: 'Packed Meals' });
      await expect(packedMeals).toBeVisible();
      await expect(packedMeals.getByRole('heading', { name: 'Lunch & Dinner Food Packs' })).toBeVisible();

      const packedMealColumns = await packedMeals.getByTestId('packed-meal-grid').evaluate((element) =>
        getComputedStyle(element).gridTemplateColumns.split(' ').length,
      );
      expect(packedMealColumns).toBe(viewport.width >= 1024 ? 3 : viewport.width >= 640 ? 2 : 1);
      await expect(packedMeals.getByRole('img')).toHaveCount(1);

      const foodTrays = page.getByRole('region', { name: 'Food Trays' });
      await expect(foodTrays).toBeVisible();
      await expect(foodTrays.getByTestId('food-tray-catalog').locator('article')).toHaveCount(39);

      const introCopy = await foodTrays.getByTestId('food-tray-introduction-copy').boundingBox();
      const introImage = await foodTrays.getByTestId('food-tray-introduction-image').boundingBox();
      expect(introCopy).not.toBeNull();
      if (viewport.width < 640) {
        expect(introImage).toBeNull();
      } else if (viewport.width >= 1024) {
        expect(introImage).not.toBeNull();
        expect(introImage!.x).toBeGreaterThan(introCopy!.x);
        expect(Math.abs(introImage!.y - introCopy!.y)).toBeLessThanOrEqual(80);
      } else {
        expect(introImage).not.toBeNull();
        expect(introImage!.y).toBeGreaterThan(introCopy!.y + introCopy!.height);
      }

      if (viewport.width < 768) {
        const categoryRail = foodTrays.getByTestId('food-tray-categories');
        expect(await categoryRail.evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
        for (const categoryId of ['beef', 'pork', 'chicken', 'vegetables', 'pasta-noodles', 'fish-seafood', 'desserts']) {
          expect(await foodTrays.getByTestId(`food-tray-grid-${categoryId}`).evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
        }
        await foodTrays.getByRole('button', { name: 'Go to next Pork food tray category' }).click();
        await expect.poll(() => categoryRail.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
      } else {
        const countFirstFoodTrayRow = (testId: string) => foodTrays.getByTestId(testId).evaluate((element) => {
          const cards = Array.from(element.children);
          const firstTop = cards[0]?.getBoundingClientRect().top;
          return cards.filter((card) => Math.abs(card.getBoundingClientRect().top - firstTop) <= 1).length;
        });
        const expectedFoodTrayColumns = viewport.width >= 1024 ? 5 : 4;
        expect(await countFirstFoodTrayRow('food-tray-grid-pasta-noodles')).toBe(expectedFoodTrayColumns);
        expect(await countFirstFoodTrayRow('food-tray-grid-fish-seafood')).toBe(expectedFoodTrayColumns);
      }

      const foodTrayCardWidths = await foodTrays.getByTestId('food-tray-catalog').locator('article').evaluateAll((cards) =>
        cards.map((card) => card.getBoundingClientRect().width),
      );
      expect(Math.max(...foodTrayCardWidths) - Math.min(...foodTrayCardWidths)).toBeLessThanOrEqual(1);

      const foodTrayBodyHeights = await foodTrays.getByTestId('food-tray-card-body').evaluateAll((bodies) =>
        bodies.map((body) => body.getBoundingClientRect().height),
      );
      expect(Math.max(...foodTrayBodyHeights) - Math.min(...foodTrayBodyHeights)).toBeLessThanOrEqual(1);

      for (const categoryId of ['beef', 'pork', 'pasta-noodles', 'desserts']) {
        const leftGap = await foodTrays.getByTestId(`food-tray-grid-${categoryId}`).evaluate((element) => {
          const listBounds = element.getBoundingClientRect();
          const firstBounds = element.firstElementChild!.getBoundingClientRect();
          return Math.abs(firstBounds.left - listBounds.left);
        });
        expect(leftGap).toBeLessThanOrEqual(1);
      }

      const inclusionColumns = await grazingTable.getByTestId('grazing-table-inclusions').evaluate((element) =>
        getComputedStyle(element).gridTemplateColumns.split(' ').length,
      );
      expect(inclusionColumns).toBe(viewport.width >= 1024 ? 3 : viewport.width >= 640 ? 2 : 1);

      const regularInclusionColumns = await page.getByTestId('regular-inclusions-grid').evaluate((element) =>
        getComputedStyle(element).gridTemplateColumns.split(' ').length,
      );
      expect(regularInclusionColumns).toBe(viewport.width >= 1024 ? 3 : 2);

      const imageSizes = await page.getByTestId('custom-menu-categories').locator('article img').evaluateAll((images) =>
        images.map((image) => {
          const bounds = image.getBoundingClientRect();
          return { width: bounds.width, height: bounds.height };
        }),
      );
      expect(Math.max(...imageSizes.map((size) => size.width)) - Math.min(...imageSizes.map((size) => size.width))).toBeLessThanOrEqual(1);
      expect(Math.max(...imageSizes.map((size) => size.height)) - Math.min(...imageSizes.map((size) => size.height))).toBeLessThanOrEqual(1);
      expect(await page.evaluate(() => {
        window.scrollTo(1_000, window.scrollY);
        return window.scrollX === 0;
      })).toBe(true);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  });
});
