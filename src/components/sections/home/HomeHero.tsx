import { BUSINESS } from '../../../data/business';
import { GALLERY } from '../../../data/gallery';
import { FACEBOOK_CTA, PRIMARY_CTA } from '../../../data/navigation';
import { ButtonLink } from '../../ui/ButtonLink';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';

export function HomeHero() {
  return (
    <section aria-labelledby="home-hero-title" className="overflow-hidden border-b border-cream-300 bg-cream-100" data-testid="home-hero">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-20">
        <div className="relative z-10 flex flex-col items-start">
          <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-burgundy-700">{BUSINESS.name}</p>
          <h1 id="home-hero-title" className="font-display text-[clamp(2.8rem,7vw,5.2rem)] font-bold leading-[0.9] text-ink-900">
            Making Every Celebration{' '}
            <span className="mt-2 block font-script text-[1.15em] font-normal leading-[0.85] text-burgundy-700">Delicious</span>
          </h1>
          <DecorativeDivider className="my-6" />
          <p className="max-w-xl text-base leading-7 text-ink-700 sm:text-lg">
            Dependable catering, grazing tables, food trays, and packed meals for special occasions, business functions, and group events.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <ButtonLink href="/packages" icon="utensils">
              View Packages
            </ButtonLink>
            <ButtonLink external href={PRIMARY_CTA.href} icon="arrowRight" variant="secondary">
              {PRIMARY_CTA.label}
            </ButtonLink>
            <ButtonLink external href={FACEBOOK_CTA.href} icon="facebook" variant="tertiary">
              {FACEBOOK_CTA.label}
            </ButtonLink>
          </div>
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
