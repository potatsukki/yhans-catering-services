import { BUSINESS } from '../../../data/business';
import { GALLERY } from '../../../data/gallery';
import { FACEBOOK_CTA } from '../../../data/navigation';
import { ButtonLink } from '../../ui/ButtonLink';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';

export function HomeHero() {
  return (
    <section aria-labelledby="home-hero-title" className="relative isolate overflow-hidden border-b-4 border-gold-400 bg-cream-100" data-testid="home-hero">
      <div className="absolute inset-0 -z-20 [&_img]:h-full">
        <ResponsiveImage asset={GALLERY.buffetHero} className="h-full object-cover object-center lg:object-right" eager />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,248,236,0.9)_0%,rgba(255,248,236,0.68)_62%,rgba(255,248,236,0.2)_100%)] sm:bg-gradient-to-r sm:from-cream-100 sm:via-cream-100/90 sm:to-cream-100/35 lg:via-cream-100/85 lg:to-transparent" />
      <Container className="flex min-h-[430px] items-center py-9 sm:min-h-[450px] sm:py-10 lg:min-h-[470px]">
        <div className="relative z-10 flex max-w-[540px] flex-col items-start bg-transparent py-5" data-testid="home-hero-content">
          <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-burgundy-700">{BUSINESS.name}</p>
          <h1 id="home-hero-title" className="font-display text-[clamp(2.65rem,5.6vw,4.25rem)] font-bold leading-[0.92] text-ink-900">
            Making Every Celebration{' '}
            <span className="mt-2 block font-script text-[1.15em] font-normal leading-[0.85] text-burgundy-700">Delicious</span>
          </h1>
          <DecorativeDivider className="my-5" />
          <p className="max-w-xl text-base leading-7 text-ink-700 sm:text-lg">
            Dependable catering, grazing tables, food trays, and packed meals for special occasions, business functions, and group events.
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <ButtonLink href="/packages" icon="utensils">
              View Packages
            </ButtonLink>
            <ButtonLink external href={FACEBOOK_CTA.href} icon="facebook" variant="secondary">
              {FACEBOOK_CTA.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
      <span className="absolute bottom-3 right-4 rounded-full bg-cream-50/90 px-3 py-1 font-body text-xs font-semibold text-ink-700 shadow-sm sm:right-6 lg:right-10">
        Sample image
      </span>
    </section>
  );
}
