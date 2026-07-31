import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { REGULAR_PACKAGES } from '../../data/packages';
import { GRAZING_PACKAGES } from '../../data/packages';
import { PackageCard } from './PackageCard';

describe('PackageCard', () => {
  it('renders package facts from typed data without inventing a per-head price', () => {
    render(<PackageCard packageData={REGULAR_PACKAGES[0]} />);

    expect(screen.getByRole('heading', { name: 'Package 01' })).toBeInTheDocument();
    expect(screen.getByText('₱30,000')).toBeInTheDocument();
    expect(screen.getByText('Good for 50 guests')).toBeInTheDocument();
    expect(screen.getByText('Menudo')).toBeInTheDocument();
    expect(screen.queryByText(/per head/i)).not.toBeInTheDocument();
  });

  it('renders a grazing package rate, minimum, and only the approved best-seller marker', () => {
    render(<PackageCard packageData={GRAZING_PACKAGES[1]} />);

    expect(screen.getByRole('heading', { name: 'Package B' })).toBeInTheDocument();
    expect(screen.getByText('₱1,000')).toBeInTheDocument();
    expect(screen.getByText('per guest')).toBeInTheDocument();
    expect(screen.getByText('Minimum 50 guests')).toBeInTheDocument();
    expect(screen.getByText('Pork Menudo')).toBeInTheDocument();
    expect(screen.getByText('Best seller')).toBeInTheDocument();
  });
});
