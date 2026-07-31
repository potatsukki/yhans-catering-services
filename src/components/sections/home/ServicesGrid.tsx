import { GALLERY, type GalleryKey } from '../../../data/gallery';
import { SERVICE_OFFERINGS } from '../../../data/services';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon, type IconName } from '../../ui/Icon';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';

const SERVICE_ICON_BY_ID: Record<string, IconName> = {
  'full-catering': 'utensils',
  'grazing-tables': 'sparkle',
  'food-trays': 'cash',
  'packed-meals': 'calendar',
};

const SERVICE_IMAGE_BY_ID: Record<string, GalleryKey> = {
  'full-catering': 'fullCatering',
  'grazing-tables': 'grazingTable',
  'food-trays': 'foodTrays',
  'packed-meals': 'packedMeals',
};

export function ServicesGrid() {
  return (
    <section aria-labelledby="services-title" className="bg-cream-100 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          description="Food and service options for celebrations, business functions, and group events."
          id="services-title"
          title="Our Services"
        />
        <DecorativeDivider className="mt-4" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_OFFERINGS.map((service) => (
            <article className="overflow-hidden rounded-2xl border border-cream-300 bg-cream-50 shadow-sm" key={service.id}>
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                <ResponsiveImage asset={GALLERY[SERVICE_IMAGE_BY_ID[service.id]]} />
                <span className="absolute bottom-3 left-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cream-50 bg-burgundy-800 text-cream-50 shadow-md">
                  <Icon name={SERVICE_ICON_BY_ID[service.id] ?? 'sparkle'} size={25} />
                </span>
              </div>
              <div className="flex min-h-44 flex-col gap-3 p-5">
                <h3 className="font-display text-2xl font-bold text-burgundy-900">{service.name}</h3>
                <p className="text-sm leading-6 text-ink-700">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

