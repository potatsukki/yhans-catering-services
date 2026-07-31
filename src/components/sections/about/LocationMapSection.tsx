import { LOCATION_DETAILS } from '../../../data/business';
import { ButtonLink } from '../../ui/ButtonLink';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';

export function LocationMapSection() {
  return (
    <section aria-labelledby="location-map-title" className="bg-cream-100 py-11 sm:py-12 lg:py-14" id="where-to-find-us">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-8">
          <div className="flex flex-col">
            <SectionHeading
              align="left"
              description="Yhan’s Catering Services is located in BIR Village, West Fairview, Quezon City. Customers may visit the location or open it directly in Google Maps for directions."
              eyebrow="Visit Us"
              id="location-map-title"
              title="Where to Find Us"
            />
            <DecorativeDivider className="mt-4 self-start" />

            <div className="mt-6 grid gap-3">
              <article className="rounded-2xl border border-cream-300 bg-cream-50 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-200 text-burgundy-900">
                    <Icon name="location" size={23} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-bold text-burgundy-900">Visit Address</h3>
                    <address className="mt-2 not-italic text-sm leading-6 text-ink-700 sm:text-base">
                      {LOCATION_DETAILS.addressLines.map((line) => (
                        <span className="block" key={line}>
                          {line}
                        </span>
                      ))}
                    </address>
                    <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-ink-700">
                      <Icon className="mt-0.5 shrink-0 text-burgundy-800" name="clock" size={18} />
                      <span>{LOCATION_DETAILS.hours}</span>
                    </p>
                    <p className="mt-3 rounded-xl bg-cream-200/70 px-3 py-2 text-sm leading-6 text-ink-700">{LOCATION_DETAILS.visitNote}</p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-gold-200 bg-gold-200/35 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy-900 text-gold-200">
                    <Icon name="utensils" size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-burgundy-900">Complimentary Food Tasting</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-700 sm:text-base">{LOCATION_DETAILS.foodTastingNote}</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
              <ButtonLink external fullWidth className="whitespace-nowrap px-3 sm:px-4" href={LOCATION_DETAILS.mapsPageUrl} icon="location">
                Open in Google Maps
              </ButtonLink>
              <ButtonLink external fullWidth className="whitespace-nowrap px-3 sm:px-4" href={LOCATION_DETAILS.facebookUrl} icon="facebook" variant="secondary">
                Request a Food Tasting
              </ButtonLink>
            </div>
          </div>

          <div className="min-h-[20rem] overflow-hidden rounded-2xl border border-cream-300 bg-cream-50 shadow-[0_8px_24px_rgba(74,7,17,0.1)] sm:min-h-[25rem] lg:min-h-[29rem]">
            <iframe
              allowFullScreen
              className="h-full min-h-[20rem] w-full border-0 sm:min-h-[25rem] lg:min-h-[29rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={LOCATION_DETAILS.mapsEmbedUrl}
              title="Google Maps location of Yhan’s Catering Services"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
