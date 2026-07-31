import { EVENT_TYPES } from '../../../data/events';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon, type IconName } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';

const EVENT_ICON_BY_ID: Record<string, IconName> = {
  weddings: 'rings',
  debuts: 'crown',
  baptisms: 'cross',
  graduations: 'graduation',
  seminars: 'presentation',
  inductions: 'badge',
  'corporate-events': 'building',
  'family-gatherings': 'people',
};

export function WhatWeCater() {
  return (
    <section aria-labelledby="what-we-cater-title" className="bg-cream-100 py-16 sm:py-20 lg:py-24" id="what-we-cater">
      <Container>
        <SectionHeading
          description="Food service for celebrations, business functions, and group events."
          id="what-we-cater-title"
          title="What We Cater"
        />
        <DecorativeDivider className="mt-4" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {EVENT_TYPES.map((event) => (
            <article className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-cream-300 bg-cream-50 p-4 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1" key={event.id}>
              <Icon className="text-burgundy-800" name={EVENT_ICON_BY_ID[event.id] ?? 'sparkle'} size={34} />
              <h3 className="font-body text-sm font-semibold leading-5 text-ink-900">{event.name}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
