import {
  REGULAR_OVERFLOW_NOTE,
  REGULAR_PACKAGE_IMAGE_KEYS,
  REGULAR_PACKAGES,
  REGULAR_SHARED_INCLUSIONS,
} from '../../../data/packages';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon } from '../../ui/Icon';
import { PackageCard } from '../../ui/PackageCard';
import { SectionHeading } from '../../ui/SectionHeading';

export function RegularPackagesSection() {
  return (
    <section aria-labelledby="regular-packages-title" className="bg-cream-50 py-16 sm:py-20 lg:py-24" id="regular-packages">
      <Container>
        <SectionHeading
          description={`Fixed packages for ${REGULAR_PACKAGES[0].guestCapacity} guests`}
          id="regular-packages-title"
          title="Regular Catering Packages"
        />
        <DecorativeDivider className="mt-4" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {REGULAR_PACKAGES.map((packageData) => (
            <PackageCard
              image={GALLERY[REGULAR_PACKAGE_IMAGE_KEYS[packageData.id]]}
              key={packageData.id}
              packageData={packageData}
            />
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-gold-200 bg-cream-100 p-5 sm:p-6">
          <h3 className="font-display text-2xl font-bold text-burgundy-900">Regular package inclusions</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {REGULAR_SHARED_INCLUSIONS.map((inclusion) => (
              <li className="flex items-center gap-2 text-sm font-semibold text-ink-700" key={inclusion}>
                <Icon className="shrink-0 text-gold-600" name="check" size={18} />
                <span>{inclusion}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-center text-sm leading-6 text-ink-700">{REGULAR_OVERFLOW_NOTE}</p>
      </Container>
    </section>
  );
}
