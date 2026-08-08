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

  it('renders image-only event cards without category filters or placeholders', () => {
    renderEvents();

    expect(screen.getByRole('heading', { level: 1, name: 'Our Events' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Open larger image of/i })).toHaveLength(6);
    expect(screen.queryByRole('button', { name: 'All Events' })).not.toBeInTheDocument();
    expect(screen.queryByText(/Event photos coming soon/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Christmas Dinner Celebration' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Inquire About Your Event/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
  });

  it('paginates six event photos at a time', async () => {
    const user = userEvent.setup();
    renderEvents();

    const pagination = screen.getByRole('navigation', { name: 'Events pagination' });
    expect(within(pagination).getByRole('button', { name: 'Previous page' })).toBeDisabled();
    expect(within(pagination).getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: 'Open larger image of Balik Eskwela Recognition Program' })).toBeInTheDocument();

    await user.click(within(pagination).getByRole('button', { name: 'Page 2' }));
    expect(screen.queryByRole('button', { name: 'Open larger image of Balik Eskwela Recognition Program' })).not.toBeInTheDocument();
    expect(within(pagination).getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getAllByRole('button', { name: /Open larger image of/i })).toHaveLength(6);
  });

  it('opens an event image in an accessible modal and restores trigger focus after Escape', async () => {
    const user = userEvent.setup();
    renderEvents();

    const trigger = screen.getByRole('button', { name: 'Open larger image of Christmas Dinner Celebration' });
    await user.click(trigger);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-label', 'Christmas Dinner Celebration image viewer');
    expect(within(dialog).getByRole('button', { name: 'Close image viewer' })).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await waitFor(() => expect(trigger).toHaveFocus());
  });
});
