import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CONTACT_LINKS } from '../../data/business';
import { ContactCard } from './ContactCard';

describe('ContactCard', () => {
  it('renders an external Facebook contact with safe link attributes', () => {
    render(<ContactCard contact={CONTACT_LINKS[0]} />);

    const link = screen.getByRole('link', { name: /Message Us on Facebook/ });
    expect(link).toHaveAttribute('href', CONTACT_LINKS[0].href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer noopener');
  });

  it.each([
    ['phone', 'tel:+639566755148'],
    ['email', 'mailto:marianne03natanawan@gmail.com'],
  ] as const)('renders a direct %s action without opening a new tab', (_kind, href) => {
    const contact = CONTACT_LINKS.find((item) => item.href === href);
    expect(contact).toBeDefined();
    render(<ContactCard contact={contact!} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', href);
    expect(link).not.toHaveAttribute('target');
  });
});
