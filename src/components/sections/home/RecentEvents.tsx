import { GALLERY, RECENT_EVENT_GALLERY_KEYS } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';

export function RecentEvents() {
  return (
    <section aria-labelledby="recent-events-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14">
      <Container>
        <SectionHeading id="recent-events-title" title="From Recent Events" />
        <DecorativeDivider className="mt-4" />
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {RECENT_EVENT_GALLERY_KEYS.map((galleryKey) => (
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-cream-300 bg-cream-200 shadow-sm [&_img]:h-full" key={galleryKey}>
              <ResponsiveImage asset={GALLERY[galleryKey]} className="h-full" />
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-sm leading-6 text-ink-500">
          Sample images only. Approved real event photos will replace these temporary placeholders.
        </p>
      </Container>
    </section>
  );
}
