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
    <section aria-labelledby="regular-packages-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14" id="regular-packages">
      <Container>
        <SectionHeading
          description={`Fixed packages for ${REGULAR_PACKAGES[0].guestCapacity} guests`}
          id="regular-packages-title"
          title="Regular Catering Packages"
        />
        <DecorativeDivider className="mt-4" />
        <div className="horizontal-card-scroller -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0" data-testid="regular-packages-scroller">
          {REGULAR_PACKAGES.map((packageData) => (
            <PackageCard
              image={GALLERY[REGULAR_PACKAGE_IMAGE_KEYS[packageData.id]]}
              className="w-[84vw] max-w-[22rem] shrink-0 snap-start lg:w-auto lg:max-w-none"
              key={packageData.id}
              packageData={packageData}
            />
          ))}
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-gold-200 bg-cream-50 shadow-sm md:grid md:grid-cols-[0.72fr_1.28fr]" data-testid="regular-inclusions-panel">
          <div className="relative overflow-hidden bg-burgundy-950 p-5 text-cream-50 sm:p-6">
            <span aria-hidden="true" className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full border-[1.5rem] border-gold-400/15" />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400 text-burgundy-950 shadow-sm">
              <Icon name="utensils" size={24} />
            </span>
            <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.18em] text-gold-200">Included with every package</p>
            <h3 className="relative mt-2 font-display text-3xl font-bold leading-tight">Regular package inclusions</h3>
            <p className="relative mt-3 max-w-sm text-sm leading-6 text-cream-200">A complete buffet setup for the confirmed 50-guest regular packages.</p>
          </div>
          <ul className="grid grid-cols-2 gap-3 p-4 sm:p-5 lg:grid-cols-2" data-testid="regular-inclusions-grid">
            {REGULAR_SHARED_INCLUSIONS.map((inclusion) => (
              <li className="flex min-h-12 items-center gap-3 rounded-xl border border-cream-300 bg-cream-100 px-3 py-2.5 text-sm font-semibold leading-5 text-ink-700" key={inclusion}>
                <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-200 text-burgundy-900">
                  <Icon name="check" size={16} />
                </span>
                <span>{inclusion}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-center text-sm leading-6 text-ink-700">{REGULAR_OVERFLOW_NOTE}</p>
      </Container>
    </section>
  );
}
