import {
  GRAZING_INCLUDED_NOTE,
  GRAZING_PACKAGE_IMAGE_KEYS,
  GRAZING_PACKAGES,
  GRAZING_TOTAL_NOTE,
} from '../../../data/packages';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { PackageCard } from '../../ui/PackageCard';
import { Price } from '../../ui/Price';
import { SectionHeading } from '../../ui/SectionHeading';

export function GrazingPackagesSection() {
  const pricing = GRAZING_PACKAGES[0];

  return (
    <section aria-labelledby="grazing-packages-title" className="bg-cream-100 py-16 sm:py-20 lg:py-24" id="grazing-packages">
      <Container>
        <SectionHeading id="grazing-packages-title" title="Grazing Table Packages" />
        <DecorativeDivider className="mt-4" />
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm font-semibold text-ink-700">
          <Price amount={pricing.pricePerGuestPhp} suffix="per guest" />
          <span aria-hidden="true" className="text-gold-600">•</span>
          <span>Minimum {pricing.minimumGuests} guests</span>
          <span aria-hidden="true" className="text-gold-600">•</span>
          <span>{GRAZING_TOTAL_NOTE}</span>
        </div>
        <p className="mt-2 text-center text-sm font-semibold text-burgundy-900">{GRAZING_INCLUDED_NOTE}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {GRAZING_PACKAGES.map((packageData) => (
            <PackageCard
              image={GALLERY[GRAZING_PACKAGE_IMAGE_KEYS[packageData.id]]}
              key={packageData.id}
              packageData={packageData}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
