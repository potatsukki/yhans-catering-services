import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { PackagesPage } from './PackagesPage';

describe('PackagesPage', () => {
  function renderPackages() {
    return render(
      <MemoryRouter initialEntries={['/packages']}>
        <PackagesPage />
      </MemoryRouter>,
    );
  }

  it('renders the complete section hierarchy with one page heading', () => {
    renderPackages();

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: 'Packages & Services' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Customize Your Catering Menu' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Grazing Table' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Grazing Table' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Grazing Table Inclusions' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Grazing Table Estimate' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Packed Meals' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Food Trays' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Additional Event Services' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Menu customization' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Need a custom setup?' })).toBeInTheDocument();
  });

  it('renders the customizable menu and one unified grazing table offer', () => {
    renderPackages();

    expect(screen.queryByText('₱30,000')).not.toBeInTheDocument();
    expect(screen.queryByText(/Good for 50 guests/)).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /Package 0[1-3]/ })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Your Choices' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Included with Your Catering Package' })).toBeInTheDocument();
    expect(screen.getAllByText('Not selected yet')).toHaveLength(8);
    expect(screen.getByText('One dessert')).toBeInTheDocument();
    expect(screen.getByText('Buffet setup')).toBeInTheDocument();
    expect(screen.queryByText(/₱600|per head|waiter|waitress|serving staff/i)).not.toBeInTheDocument();

    const grazingTable = screen.getByRole('region', { name: 'Grazing Table' });
    expect(within(grazingTable).getByText(/A complete grazing table setup/)).toBeInTheDocument();
    expect(within(grazingTable).getAllByText('₱1,000')).toHaveLength(1);
    expect(grazingTable).toHaveTextContent('Minimum50 guests');
    expect(within(grazingTable).getByText('Total depends on confirmed guest count')).toBeInTheDocument();
    expect(within(grazingTable).getByText('Includes tables and chairs')).toBeInTheDocument();
    expect(within(grazingTable).getByRole('img', { name: /Complete grazing table setup/ })).toHaveAttribute('loading', 'lazy');
    expect(within(grazingTable).getByTestId('grazing-table-inclusions').querySelectorAll('li')).toHaveLength(18);
    expect(within(grazingTable).getByText('Seasonal Fruits (Grapes, Watermelon, Oranges, and Strawberries)')).toBeInTheDocument();
    expect(within(grazingTable).getByText('Cheese Selection (Camembert Cheese, Brie Cheese, and Regular Cheese)')).toBeInTheDocument();
    expect(within(grazingTable).getByRole('link', { name: /Ask About This Grazing Table/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    ['Package A', 'Package B', 'Package C', 'Package D', 'Fish with Creamy Sauce'].forEach((text) => {
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
    expect(screen.getByText('Best Seller')).toBeInTheDocument();
  });

  it('renders packed meals, food-tray inquiry, partner services, and customization rules', () => {
    renderPackages();

    const packedMeals = screen.getByRole('region', { name: 'Packed Meals' });
    expect(within(packedMeals).getByRole('heading', { name: 'Breakfast Food Pack' })).toBeInTheDocument();
    [
      'Hotdog, Egg, Rice',
      'Corned Beef, Egg, Rice',
      'Longganisa, Egg, Rice',
      'Chicken Adobo, Egg, Rice',
      'Tocino, Egg, Rice',
      'Ham, Egg, Rice',
    ].forEach((option) => expect(within(packedMeals).getByText(option)).toBeInTheDocument());
    expect(within(packedMeals).getByTestId('breakfast-meal-grid').querySelectorAll('article')).toHaveLength(6);
    expect(within(packedMeals).getByRole('heading', { name: 'Lunch & Dinner Food Packs' })).toBeInTheDocument();
    expect(within(packedMeals).getByText('All meals include rice and vegetables.')).toBeInTheDocument();
    expect(within(packedMeals).getByTestId('packed-meal-grid').querySelectorAll('article')).toHaveLength(11);
    expect(within(packedMeals).getByText('Menudo').closest('article')).toHaveTextContent('Best Seller');
    expect(within(packedMeals).getAllByText('All meals include rice and vegetables.')).toHaveLength(1);
    expect(within(packedMeals).queryByText('Includes rice and vegetables.')).not.toBeInTheDocument();
    expect(within(packedMeals).getByTestId('packed-meals-catalog').querySelectorAll('article')).toHaveLength(17);
    expect(within(packedMeals).getAllByTestId('packed-meal-placeholder')).toHaveLength(12);
    expect(packedMeals).toHaveTextContent('₱250–₱300 per pack');
    expect(within(packedMeals).getByText(/Final pricing may vary depending/)).toBeInTheDocument();
    expect(within(packedMeals).getByText(/minimum quantities, delivery arrangements/)).toBeInTheDocument();
    expect(within(packedMeals).getByRole('link', { name: /Ask About Packed Meals/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    expect(within(packedMeals).queryByText('Menu options available upon request.')).not.toBeInTheDocument();

    const foodTrays = screen.getByRole('region', { name: 'Food Trays' });
    expect(within(foodTrays).getByText(/Choose individual food trays for parties/)).toBeInTheDocument();
    expect(
      within(foodTrays).getAllByText((_, element) =>
        element?.textContent === 'Each tray is good for a minimum of 25 guests.',
      ),
    ).not.toHaveLength(0);
    expect(within(foodTrays).getByText('Prices vary depending on the selected dish and quantity.')).toBeInTheDocument();
    const foodTrayCatalog = within(foodTrays).getByTestId('food-tray-catalog');
    expect(foodTrayCatalog.querySelectorAll('article')).toHaveLength(42);
    expect(foodTrayCatalog.querySelectorAll('[data-testid^="food-tray-category-"]')).toHaveLength(9);
    expect(foodTrayCatalog.querySelectorAll('[data-testid="food-tray-placeholder"]')).toHaveLength(39);
    expect(foodTrayCatalog.querySelectorAll('img')).toHaveLength(3);
    expect(within(foodTrays).queryByText('Price upon inquiry')).not.toBeInTheDocument();
    expect(within(foodTrays).queryByText('Good for at least 25 guests')).not.toBeInTheDocument();
    ['Beef', 'Pork', 'Chicken', 'Vegetables', 'Pasta & Noodles', 'Fish & Seafood', 'Rice', 'Desserts', 'Drinks'].forEach((category) => {
      expect(
        within(foodTrays).getByRole('heading', { name: category, exact: true }),
      ).toBeInTheDocument();
    });
    expect(within(foodTrays).getAllByText('4 dishes')).toHaveLength(2);
    expect(within(foodTrays).getAllByText('5 dishes')).toHaveLength(2);
    expect(within(foodTrays).getAllByText('9 dishes')).toHaveLength(2);
    expect(within(foodTrays).getByText('1 dish')).toBeInTheDocument();
    expect(within(foodTrays).getByText('3 dishes')).toBeInTheDocument();
    expect(within(foodTrays).getByText('2 dishes')).toBeInTheDocument();
    expect(within(foodTrays).getByText('Menudo').closest('article')).toHaveTextContent('Best Seller');
    expect(within(foodTrays).getByRole('link', { name: /Ask for Food Tray Prices/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    expect(within(foodTrays).getByRole('link', { name: /Message Us/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    expect(within(foodTrays).queryByRole('radio')).not.toBeInTheDocument();
    expect(within(foodTrays).queryByRole('checkbox')).not.toBeInTheDocument();
    expect(within(foodTrays).queryByText(/₱/)).not.toBeInTheDocument();

    expect(screen.getAllByText(/arranged through trusted partners/i).length).toBeGreaterThanOrEqual(6);
    expect(screen.getByText(/Premium substitutions, additional dishes/)).toBeInTheDocument();
  });
});
