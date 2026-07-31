import { AboutHero } from '../components/sections/about/AboutHero';
import { BookingProcess } from '../components/sections/about/BookingProcess';
import { ContactSection } from '../components/sections/about/ContactSection';
import { HelpfulInformationSection } from '../components/sections/about/HelpfulInformationSection';
import { LocationMapSection } from '../components/sections/about/LocationMapSection';
import { ServiceAreasSection } from '../components/sections/about/ServiceAreasSection';
import { StorySection } from '../components/sections/about/StorySection';
import { WhatWeCater } from '../components/sections/about/WhatWeCater';
import { ButtonLink } from '../components/ui/ButtonLink';
import { CtaBand } from '../components/ui/CtaBand';
import { BUSINESS } from '../data/business';
import { FACEBOOK_CTA } from '../data/navigation';

export function AboutContactPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <WhatWeCater />
      <ServiceAreasSection />
      <BookingProcess />
      <ContactSection />
      <LocationMapSection />
      <HelpfulInformationSection />
      <CtaBand
        actions={
          <ButtonLink external href={FACEBOOK_CTA.href} icon="facebook" variant="secondary">
            {FACEBOOK_CTA.label}
          </ButtonLink>
        }
        description={BUSINESS.tagline}
        title="Ready to plan your event?"
      />
    </>
  );
}
