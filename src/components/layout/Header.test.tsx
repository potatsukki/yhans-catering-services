import { render, screen } from '@testing-library/react';
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
    expect(screen.getByRole('link', { name: 'Packages & Services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About & Contact' })).toBeInTheDocument();
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

    expect(screen.getByRole('link', { name: 'Packages & Services' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current', 'page');
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
