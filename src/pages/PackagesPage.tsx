import { AdditionalServicesSection } from '../components/sections/packages/AdditionalServicesSection';
import { CustomizationNote } from '../components/sections/packages/CustomizationNote';
import { FoodTraysSection } from '../components/sections/packages/FoodTraysSection';
import { GrazingInclusions } from '../components/sections/packages/GrazingInclusions';
import { GrazingPackagesSection } from '../components/sections/packages/GrazingPackagesSection';
import { PackedMealsSection } from '../components/sections/packages/PackedMealsSection';
import { PackagesHero } from '../components/sections/packages/PackagesHero';
import { RegularPackagesSection } from '../components/sections/packages/RegularPackagesSection';
import { ButtonLink } from '../components/ui/ButtonLink';
import { CtaBand } from '../components/ui/CtaBand';
import { FACEBOOK_CTA } from '../data/navigation';

export function PackagesPage() {
  return (
    <>
      <PackagesHero />
      <RegularPackagesSection />
      <GrazingPackagesSection />
      <GrazingInclusions />
      <PackedMealsSection />
      <FoodTraysSection />
      <AdditionalServicesSection />
      <CustomizationNote />
      <CtaBand
        actions={
          <ButtonLink external href={FACEBOOK_CTA.href} icon="facebook" variant="tertiary">
            {FACEBOOK_CTA.label}
          </ButtonLink>
        }
        title="Need a custom setup?"
      />
    </>
  );
}
