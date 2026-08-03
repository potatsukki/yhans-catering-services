import { BUSINESS } from '../../../data/business';
import { FARTHER_LOCATIONS_NOTE } from '../../../data/booking';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';
import { ZoomableImage } from '../../ui/ZoomableImage';

export function ServiceAreasSection() {
  return (
    <section aria-labelledby="service-areas-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14" id="service-areas">
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
        <div>
          <SectionHeading align="left" id="service-areas-title" title="Service Areas" />
          <DecorativeDivider className="mt-4 justify-start" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {BUSINESS.serviceAreas.map((area) => (
              <li className="flex items-center gap-3 text-base font-semibold text-ink-900" key={area}>
                <Icon className="shrink-0 text-gold-600" name="location" size={26} />
                <span>{area}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl border border-gold-200 bg-cream-100 p-4 text-sm leading-6 text-ink-700">
            {FARTHER_LOCATIONS_NOTE}
          </p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border-2 border-cream-100 bg-cream-200 shadow-lg [&_img]:h-full">
          <ZoomableImage asset={GALLERY.receptionTable} />
        </div>
      </Container>
    </section>
  );
}
