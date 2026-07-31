import { BUSINESS } from '../../../data/business';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';

export function AboutHero() {
  return (
    <section aria-labelledby="about-hero-title" className="overflow-hidden border-b border-cream-300 bg-cream-100" data-testid="about-hero">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-20">
        <div className="relative z-10 flex flex-col items-start">
          <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-burgundy-700">{BUSINESS.name}</p>
          <h1 id="about-hero-title" className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[0.95] text-burgundy-900">
            About &amp; Contact
          </h1>
          <DecorativeDivider className="my-6" />
          <p className="max-w-xl text-base leading-7 text-ink-700 sm:text-lg">
            Get to know the story behind Yhan&apos;s Catering Services and how to reach us.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border-4 border-cream-50 bg-cream-200 shadow-xl">
          <ResponsiveImage asset={GALLERY.buffetHero} className="aspect-[16/10]" eager />
          <span className="absolute bottom-3 right-3 rounded-full bg-cream-50/90 px-3 py-1 font-body text-xs font-semibold text-ink-700">
            Sample image
          </span>
        </div>
      </Container>
    </section>
  );
}
