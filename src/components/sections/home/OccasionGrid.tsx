import { HOME_EVENT_TYPES } from '../../../data/events';
import { Icon, type IconName } from '../../ui/Icon';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { SectionHeading } from '../../ui/SectionHeading';

const EVENT_ICON_BY_ID: Record<string, IconName> = {
  weddings: 'rings',
  debuts: 'crown',
  baptisms: 'cross',
  graduations: 'graduation',
  seminars: 'presentation',
  'corporate-events': 'building',
  'family-gatherings': 'people',
};

export function OccasionGrid() {
  return (
    <section aria-labelledby="occasion-title" className="bg-cream-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading id="occasion-title" title="Catering for Every Occasion" />
        <DecorativeDivider className="mt-4" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
          {HOME_EVENT_TYPES.map((event) => (
            <article className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-cream-300 bg-cream-50 p-4 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1" key={event.id}>
              <Icon className="text-burgundy-800" name={EVENT_ICON_BY_ID[event.id] ?? 'sparkle'} size={38} />
              <h3 className="font-body text-sm font-semibold leading-5 text-ink-900">{event.name}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
