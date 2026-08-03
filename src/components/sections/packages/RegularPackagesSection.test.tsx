import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MENU_CATEGORIES } from '../../../data/packages';
import { RegularPackagesSection } from './RegularPackagesSection';

describe('RegularPackagesSection', () => {
  it('renders browse-only menu cards with accessible local images and temporary-image labels', () => {
    render(<RegularPackagesSection />);

    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(30);
    expect(screen.queryByText('Sample image')).not.toBeInTheDocument();
    expect(screen.getAllByText('Photo coming soon')).toHaveLength(6);
    expect(screen.getByRole('img', { name: 'Placeholder image for Broccoli with Garlic' })).toBeInTheDocument();
    expect(screen.getByAltText('Beef with mushrooms in a creamy sauce, served in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Beef with Mushrooms').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Beef kare-kare with vegetables and peanut sauce in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Beef Kare-Kare').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Roast beef with mashed potatoes and green beans in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Roast Beef').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Pork menudo served in a gold chafing dish')).toBeInTheDocument();
    expect(screen.getByAltText('Pork caldereta with potatoes, carrots, and bell peppers in a chafing dish')).toBeInTheDocument();
    expect(screen.getByAltText('Pork hamonado with pineapple in a chafing dish')).toBeInTheDocument();
    expect(screen.getByAltText('Crispy lumpiang Shanghai arranged in a chafing dish')).toBeInTheDocument();
    expect(screen.getByAltText('Pork sisig with onions and green peppers in a chafing dish')).toBeInTheDocument();
    expect(screen.getByAltText('Chicken cordon bleu slices arranged in a chafing dish')).toBeInTheDocument();
    expect(screen.getByAltText('Buffalo chicken wings with sesame seeds in a chafing dish')).toBeInTheDocument();
    expect(screen.getByAltText('Chicken hamonado with pineapple and potatoes in a chafing dish')).toBeInTheDocument();
    expect(screen.getByAltText('Chicken pochero with vegetables and potatoes in a chafing dish')).toBeInTheDocument();
    expect(screen.getByAltText('Chop suey with mixed vegetables and quail eggs in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Chop Suey').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Mixed vegetables with cheese and carrots in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Mixed Vegetables').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Chicken pesto pasta with tomatoes and parmesan in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Chicken Pesto Pasta').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Lumpiang hubad with vegetables and sweet sauce in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Lumpiang Hubad').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Fresh garden salad with lettuce, cucumber, and tomatoes in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Vegetable Salad').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Spaghetti with tomato sauce and cheese in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Spaghetti').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Creamy chicken and mushroom pasta in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Truffle Pasta').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Creamy carbonara pasta with bacon in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Carbonara').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByRole('img', { name: 'Placeholder image for Alfredo Pasta' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Placeholder image for Cajun Pasta' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Placeholder image for Pancit Sotanghon' })).toBeInTheDocument();
    expect(screen.getByAltText('Baked macaroni with cheese and bacon in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Baked Macaroni').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Pancit Canton with noodles, chicken, beef, and vegetables in a chafing dish')).toBeInTheDocument();
    expect(screen.getByText('Pancit Canton').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByAltText('Mango tapioca dessert cups with mango chunks')).toBeInTheDocument();
    expect(screen.getByText('Mango Tapioca').closest('article')).not.toHaveTextContent('Sample image');
    expect(screen.getByRole('img', { name: 'Placeholder image for Coffee Jelly' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Placeholder image for Buko Pandan' })).toBeInTheDocument();
    expect(screen.getByText('Best Seller')).toBeInTheDocument();
    expect(screen.queryByText(/Want to replace a category or add another dish/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/Additional charges may apply/i)).toHaveLength(1);
    expect(screen.getByAltText('Pork menudo served in a gold chafing dish')).toHaveAttribute('loading', 'lazy');
    expect(screen.getByAltText('Pork menudo served in a gold chafing dish')).toHaveAttribute('decoding', 'async');
  });

  it('does not render a selection summary or interactive menu cards', () => {
    render(<RegularPackagesSection />);

    expect(screen.queryByTestId('menu-choices-summary')).not.toBeInTheDocument();
    expect(screen.queryByText('Your Choices')).not.toBeInTheDocument();
    expect(screen.queryByText('Not selected yet')).not.toBeInTheDocument();
    expect(screen.getAllByText('Swipe to browse dishes')).toHaveLength(6);
    expect(screen.getByRole('link', { name: /Discuss Your Menu with Yhan’s/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    expect(screen.getByRole('button', { name: 'Go to next Pork category' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go back to Beef category' })).toBeInTheDocument();
    expect(screen.getByTestId('menu-dishes-beef').querySelectorAll('article')).toHaveLength(MENU_CATEGORIES[0].dishes.length);
  });
});
