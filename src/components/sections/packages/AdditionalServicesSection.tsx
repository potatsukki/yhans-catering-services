import { ADDITIONAL_EVENT_SERVICES, ADDITIONAL_SERVICES_NOTE } from '../../../data/services';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon, type IconName } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';

const SERVICE_ICON_BY_ID: Record<string, IconName> = {
  'event-styling': 'sparkle',
  'venue-decoration': 'building',
  'sound-system': 'message',
  'event-host': 'people',
  'photo-video': 'presentation',
};

export function AdditionalServicesSection() {
  return (
    <section aria-labelledby="additional-services-title" className="bg-cream-50 py-16 sm:py-20 lg:py-24" id="additional-services">
      <Container>
        <SectionHeading id="additional-services-title" title="Additional Event Services" />
        <DecorativeDivider className="mt-4" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADDITIONAL_EVENT_SERVICES.map((service) => (
            <article className="rounded-2xl border border-cream-300 bg-cream-50 p-5 text-center shadow-sm" key={service.id}>
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream-200 text-burgundy-800">
                <Icon name={SERVICE_ICON_BY_ID[service.id] ?? 'sparkle'} size={28} />
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-burgundy-900">{service.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-700">{service.description}</p>
            </article>
          ))}
          <article className="rounded-2xl border border-gold-200 bg-cream-100 p-5 text-center shadow-sm">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-200 text-burgundy-900">
              <Icon name="sparkle" size={28} />
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-burgundy-900">Arranged Through Trusted Partners</h3>
            <p className="mt-2 text-sm leading-6 text-ink-700">{ADDITIONAL_SERVICES_NOTE}</p>
          </article>
        </div>
      </Container>
    </section>
  );
}
