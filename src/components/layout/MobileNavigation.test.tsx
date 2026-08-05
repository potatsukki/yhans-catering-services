import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { MobileNavigation } from './MobileNavigation';

describe('MobileNavigation', () => {
  it('opens, locks body scroll, and closes with Escape while restoring focus', () => {
    render(
      <MemoryRouter>
        <MobileNavigation />
      </MemoryRouter>,
    );

    const menuButton = screen.getByRole('button', { name: 'Open menu' });
    fireEvent.click(menuButton);

    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('link', { name: 'Home' })).toHaveFocus();
    expect(document.body.style.overflow).toBe('hidden');

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
    expect(document.body.style.overflow).toBe('');
    expect(menuButton).toHaveFocus();
  });

  it('closes when a navigation route is selected or the backdrop is clicked', () => {
    render(
      <MemoryRouter>
        <MobileNavigation />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    fireEvent.click(screen.getByRole('link', { name: 'Menu' }));
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    fireEvent.pointerDown(screen.getByTestId('mobile-nav-backdrop'));
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument();
  });

  it('closes from its own menu button without reopening', () => {
    render(
      <MemoryRouter>
        <MobileNavigation />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }));

    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument();
  });

  it('returns focus and restores the previous body overflow after backdrop close', () => {
    document.body.style.overflow = 'auto';
    render(
      <MemoryRouter>
        <MobileNavigation />
      </MemoryRouter>,
    );

    const menuButton = screen.getByRole('button', { name: 'Open menu' });
    fireEvent.click(menuButton);
    fireEvent.pointerDown(screen.getByTestId('mobile-nav-backdrop'));

    expect(menuButton).toHaveFocus();
    expect(document.body.style.overflow).toBe('auto');
    document.body.style.overflow = '';
  });
});
