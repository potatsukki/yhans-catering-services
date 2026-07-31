import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  function renderHome() {
    return render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>,
    );
  }

  it('renders the approved home hierarchy and exact hero CTAs', () => {
    renderHome();

    expect(screen.getByRole('heading', { level: 1, name: 'Making Every Celebration Delicious' })).toBeInTheDocument();
    expect(screen.getByText('Catering for Every Occasion')).toBeInTheDocument();
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('Popular Choices')).toBeInTheDocument();
    expect(screen.getByText("Why Choose Yhan's?")).toBeInTheDocument();
    expect(screen.getByText('From Recent Events')).toBeInTheDocument();
    expect(screen.getByText("Let's Make Your Next Event Delicious & Memorable")).toBeInTheDocument();

    const hero = screen.getByTestId('home-hero');
    expect(within(hero).getByRole('link', { name: 'View Packages' })).toHaveAttribute('href', '/packages');
    expect(within(hero).getByRole('link', { name: /Request a Quote/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
    expect(within(hero).getByRole('link', { name: /Message Us on Facebook/ })).toHaveAttribute(
      'href',
      'https://www.facebook.com/share/1EnpK8EnM1/',
    );
  });

  it('renders confirmed occasion, service, trust, and placeholder content only', () => {
    renderHome();

    ['Weddings', 'Debuts', 'Baptisms', 'Graduations', 'Seminars', 'Corporate Events', 'Family Gatherings'].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    ['Full Catering', 'Grazing Tables', 'Food Trays', 'Packed Meals'].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    expect(screen.getByText('Pork Menudo')).toBeInTheDocument();
    expect(screen.getByText('Best seller')).toBeInTheDocument();
    expect(screen.getByText('Grazing Table')).toBeInTheDocument();
    expect(screen.getByText('Trusted since 2010')).toBeInTheDocument();
    expect(screen.getByText('Professional presentation')).toBeInTheDocument();
    expect(screen.getAllByText('DTI and BIR registered')).toHaveLength(2);
    expect(screen.getByText(/Sample images only/)).toBeInTheDocument();
    expect(screen.queryByText(/testimonial|customer review/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Pork Caldereta.*best seller/i)).not.toBeInTheDocument();
  });

  it('includes one confirmed LocalBusiness JSON-LD block', () => {
    renderHome();

    const jsonLd = document.querySelector<HTMLScriptElement>('#home-local-business-jsonld');
    expect(jsonLd).not.toBeNull();
    expect(JSON.parse(jsonLd?.textContent ?? '')).toMatchObject({
      '@type': 'LocalBusiness',
      name: "Yhan's Catering Services",
    });
  });
});
