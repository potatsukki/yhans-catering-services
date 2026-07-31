import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { ButtonLink } from './ButtonLink';

describe('ButtonLink', () => {
  it('adds safe external-link attributes and a new-tab hint', () => {
    render(
      <MemoryRouter>
        <ButtonLink external href="https://example.com">
          Visit partner
        </ButtonLink>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: /Visit partner/ });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer noopener');
    expect(link).toHaveTextContent('opens in a new tab');
  });

  it('renders internal links without external target attributes and supports full width actions', () => {
    render(
      <MemoryRouter>
        <ButtonLink fullWidth href="/packages" icon={undefined} variant="secondary">
          View Packages
        </ButtonLink>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: 'View Packages' });
    expect(link).toHaveAttribute('href', '/packages');
    expect(link).not.toHaveAttribute('target');
    expect(link).toHaveClass('w-full', '!text-burgundy-950');
  });
});
