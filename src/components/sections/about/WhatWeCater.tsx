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
    <section aria-labelledby="what-we-cater-title" className="bg-cream-100 py-11 sm:py-12 lg:py-14" id="what-we-cater">
      <Container>
        <SectionHeading
          description="Food service for celebrations, business functions, and group events."
          id="what-we-cater-title"
          title="What We Cater"
        />
        <DecorativeDivider className="mt-4" />
        <div className="occasion-marquee mt-6 overflow-hidden py-1" data-testid="what-we-cater-marquee">
          <div className="occasion-marquee-track flex w-max">
            {[false, true].map((isDuplicate) => (
              <div aria-hidden={isDuplicate || undefined} className="flex shrink-0 gap-3 pr-3" key={isDuplicate ? 'duplicate' : 'primary'}>
                {EVENT_TYPES.map((event) => (
                  <article
                    className="flex min-h-24 w-36 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-cream-300 bg-cream-50 p-2 text-center shadow-sm sm:min-h-28 sm:w-44 sm:p-3 lg:w-48"
                    key={`${isDuplicate ? 'duplicate' : 'primary'}-${event.id}`}
                  >
                    <Icon className="h-7 w-7 text-burgundy-800 sm:h-[34px] sm:w-[34px]" name={EVENT_ICON_BY_ID[event.id] ?? 'sparkle'} size={34} />
                    <h3 className="font-body text-xs font-semibold leading-5 text-ink-900 sm:text-sm">{event.name}</h3>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
