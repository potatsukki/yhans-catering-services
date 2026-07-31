import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { BUSINESS } from '../data/business';
import { ABOUT_STORY, BOOKING_POLICY_NOTE, BOOKING_STEPS, FARTHER_LOCATIONS_NOTE } from '../data/booking';
import { EVENT_TYPES } from '../data/events';
import { AboutContactPage } from './AboutContactPage';

describe('AboutContactPage', () => {
  function renderAbout() {
    return render(
      <MemoryRouter initialEntries={['/about-contact']}>
        <AboutContactPage />
      </MemoryRouter>,
    );
  }

  it('renders the complete About and Contact hierarchy with one page heading', () => {
    renderAbout();

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: 'About & Contact' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Serving Celebrations Since 2010' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'What We Cater' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Service Areas' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Booking Process' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Helpful Information' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ready to plan your event?' })).toBeInTheDocument();
  });

  it('renders only approved story, highlights, events, areas, booking, and helpful information', () => {
    renderAbout();

    expect(screen.getByText(ABOUT_STORY)).toBeInTheDocument();
    ['Established in 2010', 'Trusted for Private & Corporate Events', 'Guest Capacity: 50–600', 'DTI & BIR Registered'].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    EVENT_TYPES.forEach((event) => expect(screen.getByText(event.name)).toBeInTheDocument());
    BUSINESS.serviceAreas.forEach((area) => expect(screen.getByText(area)).toBeInTheDocument());
    expect(screen.getByText(FARTHER_LOCATIONS_NOTE)).toBeInTheDocument();
    BOOKING_STEPS.forEach((step) => expect(screen.getByText(step.description)).toBeInTheDocument());
    expect(screen.getByText(BOOKING_POLICY_NOTE)).toBeInTheDocument();
    ['Direct Inquiries', 'Custom Quotations', 'Add-ons and Trusted Partners', 'Corporate and Large Food Orders'].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    expect(screen.queryByText(/investment amount|award|ranking|testimonial|guarantee/i)).not.toBeInTheDocument();
  });

  it('exposes the exact contact actions and no inquiry form', () => {
    renderAbout();

    expect(document.querySelector('a[href="tel:+639566755148"]')).not.toBeNull();
    expect(document.querySelector('a[href="tel:+639671195792"]')).not.toBeNull();
    expect(document.querySelector('a[href="mailto:marianne03natanawan@gmail.com"]')).not.toBeNull();
    const facebook = document.querySelector<HTMLAnchorElement>('a[href="https://www.facebook.com/share/1EnpK8EnM1/"]');
    expect(facebook).not.toBeNull();
    expect(facebook).toHaveAttribute('target', '_blank');
    expect(facebook).toHaveAttribute('rel', 'noreferrer noopener');
    expect(document.querySelector('form')).toBeNull();
  });
});
