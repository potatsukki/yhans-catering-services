import { EVENT_GALLERY_CATEGORIES, FEATURED_CATERING_EVENTS } from '../../../data/events';
import { ButtonLink } from '../../ui/ButtonLink';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { SectionHeading } from '../../ui/SectionHeading';
import { ZoomableImage } from '../../ui/ZoomableImage';

export function RecentEvents() {
  return (
    <section aria-labelledby="recent-events-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14">
      <Container>
        <SectionHeading
          description="A glimpse at the celebrations, table arrangements, and catering setups prepared by Yhan’s Catering Services."
          id="recent-events-title"
          title="From Recent Events"
        />
        <DecorativeDivider className="mt-4" />
        <div className="mt-4 flex justify-center sm:mt-3 sm:justify-end">
          <ButtonLink className="!min-h-10 !gap-1 rounded-lg !px-2.5 !py-1.5 !text-[0.7rem] [&_svg]:!h-3.5 [&_svg]:!w-3.5" href="/events">
            View All Events
          </ButtonLink>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-2 sm:grid-cols-3">
          {FEATURED_CATERING_EVENTS.map((event) => (
            <article className="overflow-hidden rounded-xl border border-cream-300 bg-cream-50 shadow-sm" key={event.id}>
              <div className="aspect-[4/3] overflow-hidden bg-cream-200 [&_img]:h-full">
                <ZoomableImage asset={event.images[0]} className="h-full" />
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-[0.5rem] font-bold uppercase tracking-[0.11em] text-gold-800 sm:text-[0.6rem] sm:tracking-[0.14em]">
                  {EVENT_GALLERY_CATEGORIES.find((category) => category.id === event.category)?.label}
                </p>
                <h3 className="mt-1 font-display text-base font-bold leading-tight text-burgundy-900 sm:text-xl">{event.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
