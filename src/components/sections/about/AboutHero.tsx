import { BUSINESS } from '../../../data/business';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';

export function AboutHero() {
  return (
    <section aria-labelledby="about-hero-title" className="relative isolate overflow-hidden border-b-4 border-gold-400 bg-cream-100" data-testid="about-hero" id="about-overview">
      <div className="absolute inset-0 -z-20 [&_img]:h-full">
        <ResponsiveImage asset={GALLERY.buffetHero} className="h-full w-full object-center" eager />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,248,236,0.97)_0%,rgba(255,248,236,0.92)_44%,rgba(255,248,236,0.42)_58%,rgba(255,248,236,0.04)_76%)]" />
      <Container className="flex min-h-[340px] items-center py-9 sm:min-h-[380px] sm:py-12 lg:min-h-[420px]">
        <div className="relative z-10 flex max-w-[34rem] flex-col items-start bg-transparent py-5" data-testid="about-hero-content">
          <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-burgundy-700">{BUSINESS.name}</p>
          <h1 id="about-hero-title" className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[0.95] text-burgundy-900">
            About &amp; Contact
          </h1>
          <DecorativeDivider className="my-5" />
          <p className="max-w-xl text-base leading-7 text-ink-700 sm:text-lg">
            Get to know the story behind Yhan&apos;s Catering Services and how to reach us.
          </p>
        </div>
      </Container>
    </section>
  );
}
