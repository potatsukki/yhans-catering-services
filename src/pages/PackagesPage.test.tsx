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
    expect(screen.getByRole('heading', { name: 'Regular Catering Packages' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Grazing Table Packages' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Grazing-table inclusions' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Grazing Table Estimate' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Packed Meals' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Food Trays' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Additional Event Services' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Menu customization' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Need a custom setup?' })).toBeInTheDocument();
  });

  it('preserves confirmed regular and grazing package facts', () => {
    renderPackages();

    expect(screen.getAllByText('₱30,000')).toHaveLength(3);
    expect(screen.getAllByText('Good for 50 guests')).toHaveLength(3);
    expect(screen.getByText('One dessert')).toBeInTheDocument();
    expect(screen.getByText('Buffet setup')).toBeInTheDocument();
    expect(screen.queryByText(/₱600|per head|waiter|waitress|serving staff/i)).not.toBeInTheDocument();

    ['Package A', 'Package B', 'Package C', 'Package D'].forEach((name) => {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    });
    ['Beef Kare-Kare', 'Fish with Creamy Sauce', 'Chicken Pesto', 'Pancit Canton'].forEach((dish) => {
      expect(screen.getByText(dish)).toBeInTheDocument();
    });
    expect(screen.getAllByText('₱1,000')).toHaveLength(5);
    expect(screen.getAllByText('Minimum 50 guests')).toHaveLength(5);
    expect(screen.getByText('Total depends on confirmed guest count.')).toBeInTheDocument();
    expect(screen.getByText('Includes tables and chairs.')).toBeInTheDocument();

    const packageB = screen.getByRole('heading', { name: 'Package B' }).closest('article');
    expect(packageB).not.toBeNull();
    expect(within(packageB as HTMLElement).getByText('Pork Menudo')).toBeInTheDocument();
    expect(within(packageB as HTMLElement).getByText('Best seller')).toBeInTheDocument();
    expect(screen.getAllByText('Best seller')).toHaveLength(1);
  });

  it('renders packed meals, food-tray inquiry, partner services, and customization rules', () => {
    renderPackages();

    expect(screen.getByText('Breakfast')).toBeInTheDocument();
    expect(screen.getByText('Lunch')).toBeInTheDocument();
    expect(screen.getByText('Dinner')).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Packed Meals' })).toHaveTextContent('₱250–₱300 per pack');
    expect(screen.getByText('Menu options available upon request.')).toBeInTheDocument();
    expect(screen.getByText(/minimum quantities, delivery arrangements/)).toBeInTheDocument();

    const foodTrays = screen.getByRole('region', { name: 'Food Trays' });
    expect(within(foodTrays).getByText(/current food-tray menu, serving sizes, and prices/)).toBeInTheDocument();
    expect(within(foodTrays).getByRole('link', { name: /Ask for the Food Tray Menu/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    expect(within(foodTrays).queryByText(/₱/)).not.toBeInTheDocument();

    expect(screen.getAllByText(/arranged through trusted partners/i).length).toBeGreaterThanOrEqual(6);
    expect(screen.getByText(/Premium substitutions, additional dishes/)).toBeInTheDocument();
  });
});
