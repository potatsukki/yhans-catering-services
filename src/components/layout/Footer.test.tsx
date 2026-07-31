import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { BUSINESS, EMAIL_ADDRESS, PHONE_NUMBERS } from '../../data/business';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders centralized contact, service, payment, and year information', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByText(BUSINESS.name)).toBeInTheDocument();
    expect(screen.getByText(BUSINESS.tagline)).toBeInTheDocument();
    expect(screen.getByText(BUSINESS.address)).toBeInTheDocument();
    expect(screen.getByText(BUSINESS.hours)).toBeInTheDocument();
    expect(screen.getByText(EMAIL_ADDRESS)).toBeInTheDocument();
    PHONE_NUMBERS.forEach((phone) => expect(screen.getByText(phone)).toBeInTheDocument());
    BUSINESS.serviceAreas.forEach((area) => expect(screen.getByText(area)).toBeInTheDocument());
    BUSINESS.paymentMethods.forEach((method) => expect(screen.getByText(method)).toBeInTheDocument());
    expect(screen.getByText(new RegExp(`${new Date().getFullYear()}.*${BUSINESS.name}`))).toBeInTheDocument();
  });

  it('links confirmed contact actions and keeps footer navigation available', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole('link', { name: '0956 675 5148' })[0]).toHaveAttribute('href', 'tel:+639566755148');
    expect(screen.getByRole('link', { name: EMAIL_ADDRESS })).toHaveAttribute(
      'href',
      `mailto:${EMAIL_ADDRESS}`,
    );
    expect(screen.getByRole('navigation', { name: 'Footer navigation' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Follow us on Facebook/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
  });
});
