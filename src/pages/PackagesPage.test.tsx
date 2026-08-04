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
    expect(screen.queryByRole('heading', { name: 'Your Choices' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Included with Your Catering Package' })).toBeInTheDocument();
    expect(screen.queryByText('Not selected yet')).not.toBeInTheDocument();
    expect(screen.queryByText(/₱600|per head|waiter|waitress|serving staff/i)).not.toBeInTheDocument();

    const grazingTable = screen.getByRole('region', { name: 'Grazing Table' });
    expect(within(grazingTable).getByText(/A complete grazing table setup/)).toBeInTheDocument();
    expect(within(grazingTable).getAllByText('₱1,000')).toHaveLength(1);
    expect(grazingTable).toHaveTextContent('Minimum50 guests');
    expect(within(grazingTable).getByText('Total depends on confirmed guest count')).toBeInTheDocument();
    expect(within(grazingTable).getByText('Includes tables and chairs')).toBeInTheDocument();
    expect(within(grazingTable).getByRole('img', { name: /Complete grazing table setup/ })).toHaveAttribute('loading', 'lazy');
    expect(within(grazingTable).getByTestId('grazing-table-inclusions').querySelectorAll('li')).toHaveLength(22);
    expect(within(grazingTable).getByText('Seasonal Fruits (Grapes, Watermelon, Oranges, and Strawberries)')).toBeInTheDocument();
    expect(within(grazingTable).getByText('Cheese Selection (Camembert Cheese, Brie Cheese, and Regular Cheese)')).toBeInTheDocument();
    expect(within(grazingTable).getByRole('link', { name: /Ask About This Grazing Table/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    ['Package A', 'Package B', 'Package C', 'Package D', 'Fish with Creamy Sauce'].forEach((text) => {
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
    expect(screen.getAllByText('Best Seller')).toHaveLength(2);
  });

  it('renders packed meals, food-tray inquiry, partner services, and customization rules', () => {
    renderPackages();

    const packedMeals = screen.getByRole('region', { name: 'Packed Meals' });
    expect(within(packedMeals).getByRole('heading', { name: 'Breakfast Food Packs' })).toBeInTheDocument();
    [
      'Hotdog, Egg & Rice',
      'Corned Beef, Egg & Rice',
      'Longganisa, Egg & Rice',
      'Chicken Adobo, Egg & Rice',
      'Tocino, Egg & Rice',
      'Ham, Egg & Rice',
    ].forEach((option) => expect(within(packedMeals).getByText(option)).toBeInTheDocument());
    expect(within(packedMeals).getByTestId('breakfast-meal-grid').querySelectorAll('li')).toHaveLength(6);
    expect(within(packedMeals).getByRole('heading', { name: 'Lunch & Dinner Food Packs' })).toBeInTheDocument();
    expect(within(packedMeals).getByText('All lunch and dinner food packs include rice and vegetables.')).toBeInTheDocument();
    expect(within(packedMeals).getByTestId('packed-meal-grid').querySelectorAll('li')).toHaveLength(11);
    expect(within(packedMeals).getByText('Menudo').closest('li')).toHaveTextContent('Best Seller');
    expect(within(packedMeals).queryByTestId('packed-meal-placeholder')).not.toBeInTheDocument();
    expect(within(packedMeals).queryByText(/Photo coming soon/i)).not.toBeInTheDocument();
    expect(within(packedMeals).getAllByRole('img')).toHaveLength(1);
    expect(within(packedMeals).getByRole('img', { name: /Prepared packed meals with fried chicken/ })).toBeInTheDocument();
    expect(packedMeals).not.toHaveTextContent(/₱250|₱300|per pack/);
    expect(within(packedMeals).getByText('Request a packed-meal quotation')).toBeInTheDocument();
    expect(within(packedMeals).getByText(/tailored quotation/)).toBeInTheDocument();
    expect(within(packedMeals).getByText(/Ideal for offices, call center accounts/)).toBeInTheDocument();
    expect(within(packedMeals).getAllByRole('link', { name: /Ask About Packed Meals/ })).toHaveLength(2);
    within(packedMeals).getAllByRole('link', { name: /Ask About Packed Meals/ }).forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://www.facebook.com/share/1EnpK8EnM1/');
    });
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
    expect(foodTrayCatalog.querySelectorAll('article')).toHaveLength(39);
    expect(foodTrayCatalog.querySelectorAll('[data-testid^="food-tray-category-"]')).toHaveLength(7);
    expect(foodTrayCatalog.querySelectorAll('[data-testid="food-tray-placeholder"]')).toHaveLength(13);
    expect(foodTrayCatalog.querySelectorAll('img')).toHaveLength(26);
    expect(within(foodTrays).queryByText('Price upon inquiry')).not.toBeInTheDocument();
    expect(within(foodTrays).queryByText('Good for at least 25 guests')).not.toBeInTheDocument();
    ['Beef', 'Pork', 'Chicken', 'Vegetables', 'Pasta & Noodles', 'Fish & Seafood', 'Desserts'].forEach((category) => {
      expect(
        within(foodTrays).getByRole('heading', { name: category, exact: true }),
      ).toBeInTheDocument();
    });
    expect(within(foodTrays).getAllByText('4 dishes')).toHaveLength(2);
    expect(within(foodTrays).getAllByText('5 dishes')).toHaveLength(2);
    expect(within(foodTrays).getAllByText('9 dishes')).toHaveLength(2);
    expect(within(foodTrays).getByText('3 dishes')).toBeInTheDocument();
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
