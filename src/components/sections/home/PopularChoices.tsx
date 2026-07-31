import { GALLERY, type GalleryKey } from '../../../data/gallery';
import { HOME_POPULAR_CHOICES } from '../../../data/packages';
import { Badge } from '../../ui/Badge';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';

export function PopularChoices() {
  return (
    <section aria-labelledby="popular-choices-title" className="bg-cream-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          description="A few confirmed menu and service highlights to help you start planning."
          id="popular-choices-title"
          title="Popular Choices"
        />
        <DecorativeDivider className="mt-4" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {HOME_POPULAR_CHOICES.map((choice) => (
            <article className="overflow-hidden rounded-2xl border border-cream-300 bg-cream-50 shadow-sm" key={choice.id}>
              <div className="aspect-[4/3] overflow-hidden bg-cream-200">
                <ResponsiveImage asset={GALLERY[choice.imageKey as GalleryKey]} />
              </div>
              <div className="flex min-h-24 items-center justify-between gap-3 p-5">
                <h3 className="font-display text-2xl font-bold text-burgundy-900">{choice.name}</h3>
                {choice.badge ? <Badge tone="gold">{choice.badge}</Badge> : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

