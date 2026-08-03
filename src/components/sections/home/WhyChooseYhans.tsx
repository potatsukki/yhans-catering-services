import { BUSINESS, HOME_TRUST_POINTS } from '../../../data/business';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';
import { ZoomableImage } from '../../ui/ZoomableImage';

export function WhyChooseYhans() {
  return (
    <section aria-labelledby="why-choose-title" className="bg-cream-100 py-11 sm:py-12 lg:py-14">
      <Container className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div>
          <SectionHeading align="left" id="why-choose-title" title="Why Choose Yhan's?" />
          <DecorativeDivider className="mt-4 justify-start" />
          <ul className="mt-6 grid gap-3">
            {HOME_TRUST_POINTS.map((point) => (
              <li className="flex items-start gap-3" key={point.id}>
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-burgundy-950">
                  <Icon name="check" size={17} />
                </span>
                <span>
                  <strong className="block font-body text-base font-bold text-burgundy-900">{point.title}</strong>
                  <span className="mt-0.5 block text-sm leading-5 text-ink-700">{point.description}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-ink-700">
            {BUSINESS.name} serves celebrations, business functions, and group events with dependable food and service.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-cream-50 bg-cream-200 shadow-lg [&_img]:h-full">
          <ZoomableImage asset={GALLERY.whyChooseEvent} />
        </div>
      </Container>
    </section>
  );
}
