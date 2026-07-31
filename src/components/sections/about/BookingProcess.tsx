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
    <section aria-labelledby="booking-process-title" className="bg-cream-100 py-16 sm:py-20 lg:py-24" id="booking-process">
      <Container>
        <SectionHeading id="booking-process-title" title="Booking Process" />
        <DecorativeDivider className="mt-4" />
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {BOOKING_STEPS.map((step) => (
            <li className="relative rounded-2xl border border-cream-300 bg-cream-50 p-5 text-center shadow-sm" key={step.number}>
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-burgundy-900 font-display text-2xl font-bold text-cream-50" aria-hidden="true">
                {step.number}
              </span>
              <span className="mx-auto mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream-200 text-burgundy-800">
                <Icon name={BOOKING_ICON_BY_STEP[step.number] ?? 'sparkle'} size={25} />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold leading-tight text-burgundy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-700">{step.description}</p>
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
