import { EventsGallery } from '../components/sections/events/EventsGallery';
import { EventsHero } from '../components/sections/events/EventsHero';
import { ButtonLink } from '../components/ui/ButtonLink';
import { CtaBand } from '../components/ui/CtaBand';
import { FACEBOOK_CTA } from '../data/navigation';

export function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsGallery />
      <CtaBand
        actions={
          <ButtonLink external href={FACEBOOK_CTA.href} icon="message" variant="tertiary">
            Inquire About Your Event
          </ButtonLink>
        }
        description="Let Yhan’s Catering Services take care of the food, setup, and service for your special occasion."
        title="Planning an Event?"
      />
    </>
  );
}
