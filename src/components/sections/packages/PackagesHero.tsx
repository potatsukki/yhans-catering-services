import { BUSINESS } from '../../../data/business';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';

export function PackagesHero() {
  return (
    <section aria-labelledby="packages-hero-title" className="relative isolate overflow-hidden border-b-4 border-gold-400 bg-cream-100" data-testid="packages-hero">
      <div className="absolute inset-0 -z-20">
        <ResponsiveImage asset={GALLERY.buffetHero} className="h-full w-full" eager />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,248,236,0.9)_0%,rgba(255,248,236,0.68)_62%,rgba(255,248,236,0.2)_100%)] sm:bg-[linear-gradient(90deg,rgba(255,248,236,0.96)_0%,rgba(255,248,236,0.82)_56%,rgba(255,248,236,0.28)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,248,236,0.98)_0%,rgba(255,248,236,0.92)_36%,rgba(255,248,236,0.42)_62%,rgba(255,248,236,0.08)_100%)]" />
      <Container className="flex min-h-[340px] items-center py-9 sm:min-h-[380px] sm:py-12 lg:min-h-[420px]">
        <div className="relative z-10 flex max-w-[34rem] flex-col items-start bg-transparent py-5" data-testid="packages-hero-content">
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
      <span className="absolute bottom-3 right-3 rounded-full bg-cream-50/90 px-3 py-1 font-body text-xs font-semibold text-ink-700 shadow-sm">
        Sample image
      </span>
    </section>
  );
}
