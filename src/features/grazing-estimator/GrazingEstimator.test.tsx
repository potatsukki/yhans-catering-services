import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { GrazingEstimator } from './GrazingEstimator';

describe('GrazingEstimator', () => {
  it('starts at 50 guests and shows the confirmed estimate', () => {
    render(<GrazingEstimator />);

    expect(screen.getByRole('spinbutton', { name: 'Number of guests' })).toHaveValue(50);
    expect(screen.getByRole('status')).toHaveTextContent('₱50,000');
    expect(screen.getByText(/Estimate only/)).toBeInTheDocument();
  });

  it('updates with the plus control and a valid input value', () => {
    render(<GrazingEstimator />);

    fireEvent.click(screen.getByRole('button', { name: 'Increase guest count' }));
    expect(screen.getByRole('spinbutton', { name: 'Number of guests' })).toHaveValue(51);

    fireEvent.change(screen.getByRole('spinbutton', { name: 'Number of guests' }), { target: { value: '75' } });
    expect(screen.getByRole('spinbutton', { name: 'Number of guests' })).toHaveValue(75);
    expect(screen.getByRole('status')).toHaveTextContent('₱75,000');
  });

  it('clamps below-minimum, above-maximum, and invalid input', () => {
    render(<GrazingEstimator />);
    const input = screen.getByRole('spinbutton', { name: 'Number of guests' });

    fireEvent.change(input, { target: { value: '49' } });
    expect(input).toHaveValue(50);
    fireEvent.change(input, { target: { value: '601' } });
    expect(input).toHaveValue(600);
    fireEvent.change(input, { target: { value: '' } });
    expect(input).toHaveValue(50);
    expect(screen.getByRole('status')).toHaveTextContent('₱50,000');
  });

  it('supports decrementing and disables controls at the approved boundaries', () => {
    render(<GrazingEstimator />);

    const decrease = screen.getByRole('button', { name: 'Decrease guest count' });
    const increase = screen.getByRole('button', { name: 'Increase guest count' });
    expect(decrease).toBeDisabled();

    fireEvent.click(increase);
    fireEvent.click(decrease);
    expect(screen.getByRole('spinbutton', { name: 'Number of guests' })).toHaveValue(50);

    fireEvent.change(screen.getByRole('spinbutton', { name: 'Number of guests' }), { target: { value: '600' } });
    expect(increase).toBeDisabled();
    expect(decrease).not.toBeDisabled();
  });
});
