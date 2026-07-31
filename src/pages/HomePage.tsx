import { CtaBand } from '../components/ui/CtaBand';
import { ButtonLink } from '../components/ui/ButtonLink';
import { FACEBOOK_CTA, PRIMARY_CTA } from '../data/navigation';
import { HomeHero } from '../components/sections/home/HomeHero';
import { OccasionGrid } from '../components/sections/home/OccasionGrid';
import { PopularChoices } from '../components/sections/home/PopularChoices';
import { RecentEvents } from '../components/sections/home/RecentEvents';
import { ServicesGrid } from '../components/sections/home/ServicesGrid';
import { WhyChooseYhans } from '../components/sections/home/WhyChooseYhans';
import { LOCAL_BUSINESS_JSON_LD } from '../seo/localBusiness';

export function HomePage() {
  return (
    <>
      <HomeHero />
      <OccasionGrid />
      <ServicesGrid />
      <PopularChoices />
      <WhyChooseYhans />
      <RecentEvents />
      <CtaBand
        actions={
          <>
            <ButtonLink external href={PRIMARY_CTA.href} variant="secondary">
              {PRIMARY_CTA.label}
            </ButtonLink>
            <ButtonLink external href={FACEBOOK_CTA.href} icon="facebook" variant="tertiary">
              {FACEBOOK_CTA.label}
            </ButtonLink>
          </>
        }
        title="Let's Make Your Next Event Delicious & Memorable"
      />
      <script id="home-local-business-jsonld" type="application/ld+json">
        {JSON.stringify(LOCAL_BUSINESS_JSON_LD)}
      </script>
    </>
  );
}
