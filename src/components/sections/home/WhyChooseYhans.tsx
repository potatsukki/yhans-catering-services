import { BUSINESS, HOME_TRUST_POINTS } from '../../../data/business';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon } from '../../ui/Icon';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';

export function WhyChooseYhans() {
  return (
    <section aria-labelledby="why-choose-title" className="bg-cream-100 py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <SectionHeading align="left" id="why-choose-title" title="Why Choose Yhan's?" />
          <DecorativeDivider className="mt-4 justify-start" />
          <ul className="mt-7 grid gap-5">
            {HOME_TRUST_POINTS.map((point) => (
              <li className="flex items-start gap-3" key={point.id}>
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-burgundy-950">
                  <Icon name="check" size={17} />
                </span>
                <span>
                  <strong className="block font-body text-base font-bold text-burgundy-900">{point.title}</strong>
                  <span className="mt-1 block text-sm leading-6 text-ink-700">{point.description}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-ink-700">
            {BUSINESS.name} serves celebrations, business functions, and group events with dependable food and service.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl border-4 border-cream-50 bg-cream-200 shadow-lg">
          <ResponsiveImage asset={GALLERY.receptionTable} />
          <span className="absolute bottom-3 right-3 rounded-full bg-cream-50/90 px-3 py-1 font-body text-xs font-semibold text-ink-700">
            Sample image
          </span>
        </div>
      </Container>
    </section>
  );
}

