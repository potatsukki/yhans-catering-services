import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { BUSINESS, LOCATION_DETAILS } from '../data/business';
import { ABOUT_STORY, BOOKING_POLICY_NOTE, BOOKING_STEPS, FARTHER_LOCATIONS_NOTE, FOUNDER_STORY } from '../data/booking';
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
    expect(screen.getByRole('heading', { name: 'Meet Chef Marianne' })).toBeInTheDocument();
    expect(screen.getByText("The Woman Behind Yhan's Catering Services")).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'What We Cater' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Service Areas' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Booking Process' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Where to Find Us' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Helpful Information' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ready to plan your event?' })).toBeInTheDocument();
  });

  it('renders only approved story, highlights, events, areas, booking, and helpful information', () => {
    renderAbout();

    expect(screen.getByText(ABOUT_STORY)).toBeInTheDocument();
    FOUNDER_STORY.forEach((paragraph) => expect(screen.getByText(paragraph)).toBeInTheDocument());
    expect(screen.getByText(/she has led Yhan's Catering Services toward more professional equipment/)).toBeInTheDocument();
    expect(screen.getByAltText("Yhan's Catering Services crew standing behind a catered buffet")).toBeInTheDocument();
    expect(screen.getByAltText('Chef Marianne P. Natanawan in chef uniform in a commercial kitchen')).toBeInTheDocument();
    ['Established in 2010', 'Trusted for Private & Corporate Events', 'Guest Capacity: 50–600', 'DTI & BIR Registered'].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    EVENT_TYPES.forEach((event) => expect(screen.getAllByText(event.name)).toHaveLength(2));
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

    const finalCta = screen.getByRole('heading', { name: 'Ready to plan your event?' }).closest('section');
    expect(finalCta).not.toBeNull();
    expect(within(finalCta as HTMLElement).getAllByRole('link')).toHaveLength(1);
    expect(within(finalCta as HTMLElement).getByRole('link', { name: /Message Us on Facebook/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
  });

  it('renders the accessible Google Maps section with owner-controlled food-tasting requests', () => {
    renderAbout();

    LOCATION_DETAILS.addressLines.forEach((line) => expect(screen.getByText(line)).toBeInTheDocument());
    expect(screen.getAllByText(LOCATION_DETAILS.hours)).toHaveLength(2);
    expect(screen.getByRole('heading', { name: 'Complimentary Food Tasting' })).toBeInTheDocument();
    expect(screen.getByText(/Tastings are subject to availability/)).toBeInTheDocument();
    expect(screen.getByText(/final schedule is arranged and confirmed by Marianne P. Natanawan/)).toBeInTheDocument();

    const iframe = screen.getByTitle('Google Maps location of Yhan’s Catering Services');
    expect(iframe).toHaveAttribute('src', LOCATION_DETAILS.mapsEmbedUrl);
    expect(iframe).toHaveAttribute('loading', 'lazy');
    expect(iframe).toHaveAttribute('allowfullscreen');
    expect(iframe).toHaveAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    const mapLink = screen.getByRole('link', { name: /Open in Google Maps/ });
    expect(mapLink).toHaveAttribute('href', LOCATION_DETAILS.mapsPageUrl);
    expect(mapLink).toHaveAttribute('target', '_blank');
    expect(mapLink).toHaveAttribute('rel', 'noreferrer noopener');
    expect(screen.getByRole('link', { name: /Request a Food Tasting/ })).toHaveAttribute('href', LOCATION_DETAILS.facebookUrl);
    expect(screen.queryByRole('link', { name: /Call Before Visiting/ })).not.toBeInTheDocument();
    expect(document.querySelector('input[type="date"], form, [role="grid"]')).toBeNull();
  });
});
