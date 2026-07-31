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
    <section aria-labelledby="occasion-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14">
      <Container>
        <SectionHeading id="occasion-title" title="Catering for Every Occasion" />
        <DecorativeDivider className="mt-4" />
        <div className="occasion-marquee mt-6 overflow-hidden py-1" data-testid="occasion-marquee">
          <div className="occasion-marquee-track flex w-max">
            {[false, true].map((isDuplicate) => (
              <div aria-hidden={isDuplicate || undefined} className="flex shrink-0 gap-3 pr-3" key={isDuplicate ? 'duplicate' : 'primary'}>
                {HOME_EVENT_TYPES.map((event) => (
                  <article
                    className="flex min-h-24 w-36 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-cream-300 bg-cream-50 p-2 text-center shadow-[0_3px_12px_rgba(74,7,17,0.06)] sm:min-h-28 sm:w-44 sm:gap-2.5 sm:p-3 lg:w-48"
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
