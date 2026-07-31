import { GRAZING_ESTIMATE_DISCLAIMER } from '../../data/packages';
import { formatPhp } from '../../components/ui/Price';
import { Container } from '../../components/ui/Container';
import { DecorativeDivider } from '../../components/ui/DecorativeDivider';
import { Icon } from '../../components/ui/Icon';
import { SectionHeading } from '../../components/ui/SectionHeading';
import {
  calculateGrazingEstimate,
  clampGuestCount,
  GRAZING_MAX_GUESTS,
  GRAZING_MIN_GUESTS,
  GRAZING_PRICE_PER_GUEST,
} from './calculateGrazingEstimate';
import { useState } from 'react';

export function GrazingEstimator() {
  const [guestCount, setGuestCount] = useState(GRAZING_MIN_GUESTS);
  const estimate = calculateGrazingEstimate(guestCount);

  const updateGuestCount = (value: number) => {
    setGuestCount(clampGuestCount(value));
  };

  return (
    <section aria-labelledby="grazing-estimator-title" className="bg-cream-100 py-16 sm:py-20" data-testid="grazing-estimator">
      <Container>
        <div className="mx-auto max-w-4xl rounded-3xl border border-gold-200 bg-cream-50 p-6 shadow-sm sm:p-8">
          <SectionHeading
            description="Use the confirmed grazing-table rate to plan an initial guest-count estimate."
            id="grazing-estimator-title"
            title="Grazing Table Estimate"
          />
          <DecorativeDivider className="mt-4" />
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <label className="block font-body text-base font-semibold text-burgundy-900" htmlFor="grazing-guest-count">
                Number of guests
              </label>
              <p className="mt-1 text-sm leading-6 text-ink-700" id="grazing-guest-count-help">
                Choose between {GRAZING_MIN_GUESTS} and {GRAZING_MAX_GUESTS} guests.
              </p>
              <div className="mt-4 flex max-w-sm items-center gap-2">
                <button
                  aria-label="Decrease guest count"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-cream-300 bg-cream-50 text-burgundy-900 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40"
                  disabled={guestCount <= GRAZING_MIN_GUESTS}
                  onClick={() => updateGuestCount(guestCount - 1)}
                  type="button"
                >
                  <Icon name="minus" size={20} />
                </button>
                <input
                  aria-describedby="grazing-guest-count-help"
                  aria-label="Number of guests"
                  className="min-h-11 w-full rounded-xl border border-cream-300 bg-cream-50 px-4 text-center font-body text-base font-semibold text-ink-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40"
                  id="grazing-guest-count"
                  inputMode="numeric"
                  max={GRAZING_MAX_GUESTS}
                  min={GRAZING_MIN_GUESTS}
                  onChange={(event) => updateGuestCount(Number(event.target.value))}
                  step={1}
                  type="number"
                  value={guestCount}
                />
                <button
                  aria-label="Increase guest count"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-cream-300 bg-cream-50 text-burgundy-900 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40"
                  disabled={guestCount >= GRAZING_MAX_GUESTS}
                  onClick={() => updateGuestCount(guestCount + 1)}
                  type="button"
                >
                  <Icon name="plus" size={20} />
                </button>
              </div>
            </div>
            <div aria-live="polite" className="rounded-2xl bg-burgundy-900 px-6 py-5 text-center text-cream-50" role="status">
              <span className="block font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">Estimated total</span>
              <strong className="mt-2 block font-display text-4xl font-bold">{formatPhp(estimate)}</strong>
              <span className="mt-1 block text-sm text-cream-100">{guestCount} guests × {formatPhp(GRAZING_PRICE_PER_GUEST)}</span>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-ink-700">{GRAZING_ESTIMATE_DISCLAIMER}</p>
        </div>
      </Container>
    </section>
  );
}
