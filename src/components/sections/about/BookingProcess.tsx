import { BOOKING_POLICY_NOTE, BOOKING_STEPS } from '../../../data/booking';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon, type IconName } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';

const BOOKING_ICON_BY_STEP: Record<number, IconName> = {
  1: 'message',
  2: 'calendar',
  3: 'badge',
  4: 'cash',
  5: 'check',
};

export function BookingProcess() {
  return (
    <section aria-labelledby="booking-process-title" className="bg-cream-100 py-11 sm:py-12 lg:py-14" id="booking-process">
      <Container>
        <SectionHeading id="booking-process-title" title="Booking Process" />
        <DecorativeDivider className="mt-4" />
        <ol className="horizontal-card-scroller -mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0 md:pb-0" data-testid="booking-process-scroller">
          {BOOKING_STEPS.map((step) => (
            <li className="relative w-[82vw] max-w-[20rem] shrink-0 snap-start rounded-xl border border-cream-300 bg-cream-50 p-4 pt-5 text-center shadow-sm md:w-auto md:max-w-none" key={step.number}>
              <span
                aria-hidden="true"
                className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-burgundy-900 font-display text-xl font-bold text-cream-50"
                data-testid={`booking-step-number-${step.number}`}
              >
                {step.number}
              </span>
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-cream-200 text-burgundy-800">
                <Icon name={BOOKING_ICON_BY_STEP[step.number] ?? 'sparkle'} size={25} />
              </span>
              <h3 className="mt-3 font-display text-lg font-bold leading-tight text-burgundy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-5 text-ink-700">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-gold-200 bg-gold-200/60 px-5 py-4 text-center text-sm font-semibold leading-6 text-burgundy-950">
          {BOOKING_POLICY_NOTE}
        </p>
      </Container>
    </section>
  );
}
