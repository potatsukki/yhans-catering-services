import { ABOUT_STORY, FOUNDER_STORY } from '../../../data/booking';
import { BUSINESS } from '../../../data/business';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { SectionHeading } from '../../ui/SectionHeading';
import { ZoomableImage } from '../../ui/ZoomableImage';
import { HighlightsGrid } from './HighlightsGrid';

export function StorySection() {
  return (
    <section aria-labelledby="story-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14" id="story">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-cream-100 bg-cream-200 shadow-lg [&_img]:h-full">
            <ZoomableImage asset={GALLERY.cateringCrew} />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Our Story" id="story-title" title="Serving Celebrations Since 2010" />
            <DecorativeDivider className="mt-4 justify-start" />
            <p className="mt-5 text-base leading-7 text-ink-700">{ABOUT_STORY}</p>
            <HighlightsGrid />
          </div>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-3xl border border-gold-400/50 bg-burgundy-950 text-cream-50 shadow-lg md:grid-cols-[minmax(15rem,0.75fr)_1.25fr] lg:mt-12">
          <div className="aspect-[4/5] overflow-hidden bg-burgundy-900 md:aspect-auto md:min-h-[30rem] [&_img]:h-full [&_img]:object-top">
            <ZoomableImage asset={GALLERY.marianneChef} />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-gold-400">The Woman Behind Yhan's Catering Services</p>
            <h3 className="mt-3 font-display text-4xl font-bold leading-none sm:text-5xl">Meet Chef Marianne</h3>
            <p className="mt-3 font-body text-sm font-bold uppercase tracking-[0.16em] text-gold-200">
              {BUSINESS.owner} · {BUSINESS.role}
            </p>
            <div className="mt-5 space-y-4 text-base leading-7 text-cream-100">
              {FOUNDER_STORY.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
