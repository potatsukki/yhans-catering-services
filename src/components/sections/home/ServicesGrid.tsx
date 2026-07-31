import { GALLERY, type GalleryKey } from '../../../data/gallery';
import { SERVICE_OFFERINGS } from '../../../data/services';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';

const SERVICE_IMAGE_BY_ID: Record<string, GalleryKey> = {
  'full-catering': 'fullCatering',
  'grazing-tables': 'grazingTable',
  'food-trays': 'foodTrays',
  'packed-meals': 'packedMeals',
};

export function ServicesGrid() {
  return (
    <section aria-labelledby="services-title" className="bg-cream-100 py-11 sm:py-12 lg:py-14">
      <Container>
        <SectionHeading
          description="Food and service options for celebrations, business functions, and group events."
          id="services-title"
          title="Our Services"
        />
        <DecorativeDivider className="mt-4" />
        <div className="horizontal-card-scroller -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0" data-testid="services-scroller">
          {SERVICE_OFFERINGS.map((service) => (
            <article className="w-[82vw] max-w-[20rem] shrink-0 snap-start overflow-hidden rounded-xl border border-cream-300 bg-cream-50 shadow-[0_4px_16px_rgba(74,7,17,0.07)] lg:w-auto lg:max-w-none" key={service.id}>
              <div className="aspect-[16/10] overflow-hidden bg-cream-200">
                <ResponsiveImage asset={GALLERY[SERVICE_IMAGE_BY_ID[service.id]]} />
              </div>
              <div className="flex min-h-36 flex-col gap-2 p-4">
                <h3 className="font-display text-xl font-bold text-burgundy-900">{service.name}</h3>
                <p className="text-sm leading-6 text-ink-700">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
