import { BUSINESS } from '../../../data/business';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';

export function PackagesHero() {
  return (
    <section aria-labelledby="packages-hero-title" className="relative isolate overflow-hidden border-b-4 border-gold-400 bg-cream-100" data-testid="packages-hero" id="packages-overview">
      <div className="absolute inset-0 -z-20 [&_img]:h-full">
        <ResponsiveImage asset={GALLERY.buffetHero} className="h-full w-full object-center" eager />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,248,236,0.97)_0%,rgba(255,248,236,0.92)_44%,rgba(255,248,236,0.42)_58%,rgba(255,248,236,0.04)_76%)]" />
      <Container className="flex min-h-[340px] items-center py-9 sm:min-h-[380px] sm:py-12 lg:min-h-[420px]">
        <div className="relative z-10 flex w-full max-w-[34rem] flex-col items-start rounded-2xl border border-cream-50/90 bg-cream-50/95 p-5 shadow-[0_12px_32px_rgba(74,7,17,0.16)] backdrop-blur-sm sm:w-auto sm:rounded-none sm:border-0 sm:bg-transparent sm:py-5 sm:shadow-none sm:backdrop-blur-none" data-testid="packages-hero-content">
          <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-burgundy-700">{BUSINESS.name}</p>
          <h1 id="packages-hero-title" className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[0.95] text-burgundy-900">
            Packages &amp; Services
          </h1>
          <DecorativeDivider className="my-5" />
          <p className="max-w-xl text-base leading-7 text-ink-700 sm:text-lg">
            Choose the right setup for your celebration, meeting, or group event.
          </p>
        </div>
      </Container>
    </section>
  );
}
