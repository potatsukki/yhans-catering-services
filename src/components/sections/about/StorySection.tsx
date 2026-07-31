import { ABOUT_STORY } from '../../../data/booking';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';
import { HighlightsGrid } from './HighlightsGrid';

export function StorySection() {
  return (
    <section aria-labelledby="story-title" className="bg-cream-50 py-16 sm:py-20 lg:py-24" id="story">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="relative overflow-hidden rounded-3xl border-4 border-cream-100 bg-cream-200 shadow-lg">
          <ResponsiveImage asset={GALLERY.receptionTable} />
          <span className="absolute bottom-3 right-3 rounded-full bg-cream-50/90 px-3 py-1 font-body text-xs font-semibold text-ink-700">
            Sample image
          </span>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="Our Story" id="story-title" title="Serving Celebrations Since 2010" />
          <DecorativeDivider className="mt-4 justify-start" />
          <p className="mt-6 text-base leading-7 text-ink-700">{ABOUT_STORY}</p>
          <HighlightsGrid />
        </div>
      </Container>
    </section>
  );
}
