import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MENU_CATEGORIES } from '../../../data/packages';
import { RegularPackagesSection } from './RegularPackagesSection';

describe('RegularPackagesSection', () => {
  it('stacks Beef then Chicken and renders one full-width swipe rail per category', () => {
    render(<RegularPackagesSection />);

    const categories = screen.getByTestId('custom-menu-categories');
    const categoryCards = categories.querySelectorAll('[data-testid^="menu-category-"]');
    expect(categoryCards).toHaveLength(MENU_CATEGORIES.length);
    expect(categoryCards[0]).toHaveAttribute('data-testid', 'menu-category-beef');
    expect(categoryCards[1]).toHaveAttribute('data-testid', 'menu-category-chicken');

    const beef = screen.getByTestId('menu-category-beef');
    const chicken = screen.getByTestId('menu-category-chicken');
    expect(beef).toHaveTextContent('4 choices • Choose 1');
    expect(chicken).toHaveTextContent('4 choices • Choose 1');
    expect(within(beef).getByText('Beef with Mushrooms')).toBeInTheDocument();
    expect(within(chicken).getByText('Creamy Tuscan Chicken')).toBeInTheDocument();
    expect(screen.getByText('Scroll down to explore more categories')).toBeInTheDocument();
  });

  it('uses swipe-only dish navigation with passive dots, counts, and zoomable images', () => {
    render(<RegularPackagesSection />);

    expect(screen.queryByText('Choose this dish')).not.toBeInTheDocument();
    expect(screen.getAllByText('Swipe the image to browse dishes')).toHaveLength(MENU_CATEGORIES.length);
    expect(screen.getAllByLabelText(/^1 of /)).toHaveLength(MENU_CATEGORIES.length);
    expect(screen.queryByRole('button', { name: /previous|next|go back|go to/i })).not.toBeInTheDocument();

    const beefRail = screen.getByTestId('menu-dishes-beef');
    expect(beefRail.querySelectorAll('article')).toHaveLength(4);
    expect(beefRail.querySelectorAll('img')).toHaveLength(4);
    expect(within(beefRail).getByRole('button', { name: /Open larger image of Beef with mushrooms/i })).toBeInTheDocument();
    expect(within(beefRail).getByAltText('Beef with mushrooms in a creamy sauce, served in a chafing dish')).toHaveAttribute('loading', 'lazy');
  });

  it('keeps the package inclusions and menu inquiry action', () => {
    render(<RegularPackagesSection />);

    expect(screen.getByRole('heading', { name: 'Included with Your Catering Package' })).toBeInTheDocument();
    expect(screen.getByTestId('regular-inclusions-grid').querySelectorAll('li')).toHaveLength(7);
    expect(screen.getByRole('link', { name: /Discuss Your Menu with Yhan’s/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
  });
});
