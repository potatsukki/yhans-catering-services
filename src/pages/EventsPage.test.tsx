import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { EventsPage } from './EventsPage';

describe('EventsPage', () => {
  function renderEvents() {
    return render(
      <MemoryRouter initialEntries={['/events']}>
        <EventsPage />
      </MemoryRouter>,
    );
  }

  it('renders the event gallery, all requested categories, and only verified event metadata', () => {
    renderEvents();

    expect(screen.getByRole('heading', { level: 1, name: 'Our Events' })).toBeInTheDocument();
    ['All Events', 'Birthdays', 'Weddings', 'Corporate Events', 'Private Celebrations', 'Table Setups', 'Buffet Setups'].forEach((label) => {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    });
    expect(screen.getByText('Christmas Dinner Celebration')).toBeInTheDocument();
    expect(screen.getByText('Bloom’s Birthday Celebration')).toBeInTheDocument();
    expect(screen.getByText('Wedding Events')).toBeInTheDocument();
    expect(screen.getAllByText('Event photos coming soon.')).toHaveLength(2);
    expect(screen.getByRole('link', { name: /Inquire About Your Event/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
  });

  it('filters categories and keeps coming-soon cards non-interactive', async () => {
    const user = userEvent.setup();
    renderEvents();

    await user.click(screen.getByRole('button', { name: 'Weddings' }));

    expect(screen.getByText('Wedding Events')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Wedding Events photo coming soon' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Open Wedding Events/ })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Weddings' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('paginates six cards at a time and resets to the first page after filtering', async () => {
    const user = userEvent.setup();
    renderEvents();

    const pagination = screen.getByRole('navigation', { name: 'Events pagination' });
    expect(within(pagination).getByRole('button', { name: 'Previous page' })).toBeDisabled();
    expect(within(pagination).getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page');

    await user.click(within(pagination).getByRole('button', { name: 'Page 2' }));
    expect(screen.getByRole('heading', { name: 'Table Setups' })).toBeInTheDocument();
    expect(screen.queryByText('Christmas Dinner Celebration')).not.toBeInTheDocument();
    expect(within(pagination).getByRole('button', { name: 'Next page' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Birthdays' }));
    expect(screen.getByText('Bloom’s Birthday Celebration')).toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: 'Events pagination' })).not.toBeInTheDocument();
  });

  it('opens an available event in an accessible modal and restores trigger focus after Escape', async () => {
    const user = userEvent.setup();
    renderEvents();

    const trigger = screen.getByRole('button', { name: 'Open larger image of Christmas Dinner Celebration' });
    await user.click(trigger);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-label', 'Christmas dinner tables with red linens and festive tree decor image viewer');
    expect(within(dialog).getByRole('button', { name: 'Close image viewer' })).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await waitFor(() => expect(trigger).toHaveFocus());
  });
});
