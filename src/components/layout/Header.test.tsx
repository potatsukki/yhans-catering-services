import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { Header } from './Header';

describe('Header', () => {
  it('renders the centralized navigation and quote CTA', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Menu' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Events' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'About & Contact' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Request a Quote/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
  });

  it('marks the active route for assistive technology', () => {
    render(
      <MemoryRouter initialEntries={['/packages']}>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current', 'page');
  });

  it('opens section menus and exposes direct anchor links', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    const packagesButton = screen.getByRole('button', { name: 'Menu' });
    await user.click(packagesButton);

    expect(packagesButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('link', { name: 'Customize Your Catering Menu' })).toHaveAttribute(
      'href',
      '/packages#regular-packages',
    );
    expect(screen.getByRole('link', { name: 'Food Trays' })).toHaveAttribute('href', '/packages#food-trays');

    await user.keyboard('{Escape}');
    expect(packagesButton).toHaveAttribute('aria-expanded', 'false');
    expect(packagesButton).toHaveFocus();
  });

  it('uses the official logo asset and exposes a keyboard-sized quote action', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('img', { name: /Yhan's Catering Services logo/i })).toHaveAttribute('alt');
    expect(screen.getByRole('link', { name: /Request a Quote/ })).toHaveClass('min-h-11');
  });
});
