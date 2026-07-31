import { GALLERY } from '../../../data/gallery';
import { FOOD_TRAY } from '../../../data/packages';
import { FACEBOOK_CTA } from '../../../data/navigation';
import { ButtonLink } from '../../ui/ButtonLink';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';

export function FoodTraysSection() {
  return (
    <section aria-labelledby="food-trays-title" className="bg-cream-100 py-11 sm:py-12 lg:py-14" id="food-trays">
      <Container className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div>
          <SectionHeading align="left" id="food-trays-title" title={FOOD_TRAY.name} />
          <DecorativeDivider className="mt-4 justify-start" />
          <p className="mt-6 max-w-xl text-base leading-7 text-ink-700">{FOOD_TRAY.description}</p>
          <ButtonLink className="mt-7" external href={FACEBOOK_CTA.href} icon="facebook">
            Ask for the Food Tray Menu
          </ButtonLink>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border-2 border-cream-50 bg-cream-200 shadow-lg [&_img]:h-full">
          <ResponsiveImage asset={GALLERY.foodTrays} />
          <span className="absolute bottom-3 right-3 rounded-full bg-cream-50/90 px-3 py-1 font-body text-xs font-semibold text-ink-700">
            Sample image
          </span>
        </div>
      </Container>
    </section>
  );
}
