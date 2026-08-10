import { GALLERY, type GalleryKey } from '../../../data/gallery';
import { HOME_BEST_SELLERS } from '../../../data/packages';
import { Badge } from '../../ui/Badge';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { SectionHeading } from '../../ui/SectionHeading';
import { ButtonLink } from '../../ui/ButtonLink';
import { ZoomableImage } from '../../ui/ZoomableImage';

export function PopularChoices() {
  return (
    <section aria-labelledby="best-seller-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14">
      <Container>
        <SectionHeading
          description="A few confirmed menu and service highlights to help you start planning."
          id="best-seller-title"
          title="Best Seller"
        />
        <DecorativeDivider className="mt-4" />
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3" data-testid="popular-choices-grid">
          {HOME_BEST_SELLERS.map((choice) => (
            <article className="relative rounded-xl border border-cream-300 bg-cream-50 shadow-[0_4px_16px_rgba(74,7,17,0.07)] md:grid md:grid-cols-[0.95fr_1.05fr]" key={choice.id}>
              {choice.badge ? (
                <Badge className="absolute -right-1 -top-2 z-10 min-h-0 whitespace-nowrap px-2 py-0.5 text-[0.6rem] tracking-[0.1em] shadow-sm" tone="gold">
                  {choice.badge}
                </Badge>
              ) : null}
              <div className="aspect-[16/10] overflow-hidden rounded-t-[calc(0.75rem-1px)] bg-cream-200 md:aspect-auto md:rounded-l-[calc(0.75rem-1px)] md:rounded-tr-none [&_img]:h-full">
                <ZoomableImage asset={GALLERY[choice.imageKey as GalleryKey]} className="h-full" />
              </div>
              <div className="flex min-h-24 flex-col items-start justify-center p-4">
                <h3 className="font-display text-lg font-bold text-burgundy-900 sm:text-xl">{choice.name}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <ButtonLink href="/packages" icon="utensils">
            View Full Menu
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
