import { useState, type UIEvent } from 'react';

import { GALLERY } from '../../../data/gallery';
import { FACEBOOK_CTA } from '../../../data/navigation';
import {
  FOOD_TRAY,
  FOOD_TRAY_CATEGORIES,
  type FoodTrayCategory,
} from '../../../data/packages';
import { Badge } from '../../ui/Badge';
import { ButtonLink } from '../../ui/ButtonLink';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';
import { ZoomableImage } from '../../ui/ZoomableImage';

const ORDERED_FOOD_TRAY_CATEGORIES = [
  FOOD_TRAY_CATEGORIES.find((category) => category.id === 'beef'),
  FOOD_TRAY_CATEGORIES.find((category) => category.id === 'chicken'),
  ...FOOD_TRAY_CATEGORIES.filter((category) => category.id !== 'beef' && category.id !== 'chicken'),
].filter((category): category is FoodTrayCategory => Boolean(category));

function FoodTrayCategoryPanel({ category }: { readonly category: FoodTrayCategory }) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const countLabel = `${category.items.length} ${category.items.length === 1 ? 'dish' : 'dishes'}`;

  const updateCurrentItem = (event: UIEvent<HTMLUListElement>) => {
    const rail = event.currentTarget;
    const slides = Array.from(rail.children) as HTMLElement[];
    const viewportCenter = rail.scrollLeft + rail.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(viewportCenter - slideCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentItemIndex(closestIndex);
  };

  return (
    <section
      aria-labelledby={`food-tray-${category.id}-title`}
      className="overflow-hidden rounded-3xl border border-gold-200 bg-cream-50 shadow-[0_12px_32px_rgba(74,7,17,0.08)]"
      data-testid={`food-tray-category-${category.id}`}
    >
      <header className="flex items-end justify-between gap-3 border-b border-gold-200 bg-cream-100/80 px-4 py-4 sm:px-6">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-700">Food tray category</p>
          <h3 className="mt-1 font-display text-2xl font-bold uppercase leading-none text-burgundy-900 sm:text-3xl" id={`food-tray-${category.id}-title`}>
            {category.name}
          </h3>
        </div>
        <p className="shrink-0 text-xs font-bold text-burgundy-800 sm:text-sm">{countLabel}</p>
      </header>

      <div className="p-3 sm:p-5">
        <ul
          aria-label={`${category.name} food trays. Swipe to browse.`}
          className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          data-testid={`food-tray-grid-${category.id}`}
          onScroll={updateCurrentItem}
        >
          {category.items.map((item) => {
            const image = { ...GALLERY[item.imageKey], alt: item.imageAlt };

            return (
              <li className="w-full shrink-0 snap-center" key={item.id}>
                <article>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream-100" data-testid="food-tray-media">
                    <ZoomableImage asset={image} className="h-full" />
                    {item.badge ? (
                      <Badge className="absolute right-2 top-2 !min-h-0 !rounded-md !px-2 !py-1 !text-[0.55rem] !leading-none !tracking-[0.08em]" tone="burgundy">
                        ★ {item.badge}
                      </Badge>
                    ) : null}
                  </div>
                  <div className="px-2 pt-4 text-center" data-testid="food-tray-card-body">
                    <h4 className="font-display text-2xl font-bold text-burgundy-900 sm:text-3xl">{item.name}</h4>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-3 flex items-center justify-center gap-3" aria-label={`${currentItemIndex + 1} of ${category.items.length}`}>
          <span className="min-w-10 text-right text-xs font-semibold text-ink-600">
            {currentItemIndex + 1} of {category.items.length}
          </span>
          <span aria-hidden="true" className="flex items-center gap-1.5">
            {category.items.map((item, index) => (
              <span
                className={`block rounded-full transition-all ${index === currentItemIndex ? 'h-2.5 w-6 bg-burgundy-900' : 'h-2.5 w-2.5 bg-gold-300'}`}
                key={item.id}
              />
            ))}
          </span>
        </div>

        <p className="mt-2 text-center text-[0.68rem] font-semibold text-ink-500">Swipe the image to browse dishes</p>
      </div>
    </section>
  );
}

export function FoodTraysSection() {
  return (
    <section aria-labelledby="food-trays-title" className="bg-gradient-to-br from-cream-100 via-cream-50 to-gold-200/35 py-11 sm:py-12 lg:py-14" id="food-trays">
      <Container>
        <div className="grid items-center gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10" data-testid="food-tray-introduction">
          <div data-testid="food-tray-introduction-copy">
            <SectionHeading align="left" description={FOOD_TRAY.description} id="food-trays-title" title={FOOD_TRAY.name} />
            <DecorativeDivider className="mt-4 justify-start" />
            <div className="mt-5 overflow-hidden rounded-xl border border-gold-200 bg-cream-50 shadow-sm">
              <p className="flex items-center gap-3 border-b border-gold-200 px-4 py-3 text-sm leading-5 text-ink-800">
                <Icon aria-hidden="true" className="shrink-0 text-gold-600" name="users" size={22} />
                <span>Each tray is good for a minimum of <strong className="text-burgundy-900">{FOOD_TRAY.minimumGuests} guests</strong>.</span>
              </p>
              <p className="flex items-center gap-3 px-4 py-3 text-sm leading-5 text-ink-800">
                <Icon aria-hidden="true" className="shrink-0 text-gold-600" name="badge" size={22} />
                <span>{FOOD_TRAY.priceNote}</span>
              </p>
            </div>
            <ButtonLink className="mt-4 w-full sm:w-auto" external href={FACEBOOK_CTA.href} icon="facebook">
              Ask for Food Tray Prices
            </ButtonLink>
          </div>

          <div className="hidden aspect-[16/9] overflow-hidden rounded-2xl border border-gold-200 bg-cream-200 shadow-lg sm:block" data-testid="food-tray-introduction-image">
            <ZoomableImage asset={GALLERY[FOOD_TRAY.imageKey]} className="h-full" />
          </div>
        </div>

        <div className="mx-auto mt-7 flex max-w-2xl flex-col gap-5" data-testid="food-tray-catalog">
          {ORDERED_FOOD_TRAY_CATEGORIES.map((category, categoryIndex) => (
            <div key={category.id}>
              {categoryIndex === 1 ? (
                <p className="mb-5 flex items-center justify-center gap-2 text-center text-xs font-semibold text-burgundy-800 sm:text-sm">
                  <span aria-hidden="true" className="h-px w-8 bg-gold-300" />
                  Scroll down to explore more food tray categories
                  <span aria-hidden="true" className="h-px w-8 bg-gold-300" />
                </p>
              ) : null}
              <FoodTrayCategoryPanel category={category} />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-5 max-w-5xl overflow-hidden rounded-2xl border border-gold-200 bg-gradient-to-r from-cream-50 to-gold-200/30 shadow-sm sm:grid sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-stretch">
          <span aria-hidden="true" className="flex min-h-16 items-center justify-center bg-burgundy-900 px-4 text-gold-200 sm:min-h-full">
            <Icon name="message" size={28} />
          </span>
          <p className="min-w-0 px-5 py-4 text-center text-sm leading-5 text-ink-700 sm:text-left">
            Contact Yhan’s Catering Services for available menus, minimum quantities, delivery arrangements, and bulk pricing.
          </p>
          <div className="flex items-center px-5 pb-5 sm:pl-0 sm:pb-0">
            <ButtonLink className="w-full shrink-0 sm:w-auto" external href={FACEBOOK_CTA.href} icon="facebook">
              Message Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
