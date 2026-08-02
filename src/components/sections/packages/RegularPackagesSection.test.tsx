import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { MENU_CATEGORIES } from '../../../data/packages';
import { RegularPackagesSection } from './RegularPackagesSection';

describe('RegularPackagesSection', () => {
  it('renders all menu choices with accessible local images and temporary-image labels', () => {
    render(<RegularPackagesSection />);

    expect(screen.getAllByRole('radio')).toHaveLength(33);
    expect(screen.getAllByRole('img')).toHaveLength(33);
    expect(screen.getAllByText('Sample image')).toHaveLength(30);
    expect(screen.getByText('Best Seller')).toBeInTheDocument();
    expect(screen.queryByText(/Want to replace a category or add another dish/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/Additional charges may apply/i)).toHaveLength(1);
    expect(screen.getByAltText('Pork menudo served in a gold chafing dish')).toHaveAttribute('loading', 'lazy');
    expect(screen.getByAltText('Pork menudo served in a gold chafing dish')).toHaveAttribute('decoding', 'async');
    expect(screen.getByRole('link', { name: /Discuss Your Menu with Yhan’s/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
  });

  it('keeps one selection per category and updates the summary and progress', async () => {
    const user = userEvent.setup();
    render(<RegularPackagesSection />);

    expect(screen.getAllByText('Not selected yet')).toHaveLength(8);
    expect(screen.getByText('0 of 8 categories selected')).toBeInTheDocument();
    expect(screen.getAllByText('Swipe to browse dishes')).toHaveLength(8);
    expect(screen.getByRole('button', { name: 'Go to next Pork category' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go back to Beef category' })).toBeInTheDocument();

    const mushrooms = screen.getByRole('radio', { name: /Beef with Mushrooms/ });
    await user.click(mushrooms);
    expect(mushrooms).toBeChecked();
    expect(screen.getByTestId('choice-beef')).toHaveTextContent('Beef with Mushrooms');
    expect(screen.getByText('1 of 8 categories selected')).toBeInTheDocument();
    expect(screen.getAllByText('Swipe to browse dishes')).toHaveLength(8);

    await user.click(mushrooms);
    expect(mushrooms).not.toBeChecked();
    expect(screen.getByTestId('choice-beef')).toHaveTextContent('Not selected yet');
    expect(screen.getByText('0 of 8 categories selected')).toBeInTheDocument();

    await user.click(mushrooms);

    const caldereta = screen.getByRole('radio', { name: /Beef Caldereta/ });
    caldereta.focus();
    await user.keyboard('[Space]');
    expect(caldereta).toBeChecked();
    expect(mushrooms).not.toBeChecked();
    expect(screen.getByTestId('choice-beef')).toHaveTextContent('Beef Caldereta');
    expect(screen.getByText('1 of 8 categories selected')).toBeInTheDocument();

    await user.keyboard('[Space]');
    expect(caldereta).not.toBeChecked();
    expect(screen.getByTestId('choice-beef')).toHaveTextContent('Not selected yet');
    expect(screen.getByText('0 of 8 categories selected')).toBeInTheDocument();

    const menudo = screen.getByRole('radio', { name: /Menudo/ });
    await user.click(menudo);
    expect(menudo).toBeChecked();
    expect(screen.getByTestId('choice-pork')).toHaveTextContent('Menudo');
    expect(screen.getByText('1 of 8 categories selected')).toBeInTheDocument();
  });

  it('announces completion after one dish is selected in every category', async () => {
    const user = userEvent.setup();
    render(<RegularPackagesSection />);

    for (const category of MENU_CATEGORIES) {
      const firstDish = category.dishes[0];
      await user.click(screen.getByRole('radio', { name: new RegExp(firstDish.name, 'i') }));
    }

    expect(screen.getByText('8 of 8 categories selected')).toBeInTheDocument();
    expect(screen.getByText('Your menu guide is complete.')).toBeInTheDocument();
  });
});
