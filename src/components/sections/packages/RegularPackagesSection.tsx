import { useRef, useState, type UIEvent } from 'react';

import {
  MENU_CATEGORIES,
  REGULAR_OVERFLOW_NOTE,
  REGULAR_SHARED_INCLUSIONS,
  type MenuCategory,
} from '../../../data/packages';
import { GALLERY } from '../../../data/gallery';
import { FACEBOOK_CTA } from '../../../data/navigation';
import { ButtonLink } from '../../ui/ButtonLink';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';
import { ZoomableImage } from '../../ui/ZoomableImage';

const ORDERED_MENU_CATEGORIES = [
  MENU_CATEGORIES.find((category) => category.id === 'beef'),
  MENU_CATEGORIES.find((category) => category.id === 'chicken'),
  ...MENU_CATEGORIES.filter((category) => category.id !== 'beef' && category.id !== 'chicken'),
].filter((category): category is MenuCategory => Boolean(category));

type DishCarouselProps = {
  readonly category: MenuCategory;
};

function DishCarousel({ category }: DishCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [currentDishIndex, setCurrentDishIndex] = useState(0);

  const updateCurrentDish = (event: UIEvent<HTMLDivElement>) => {
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

    setCurrentDishIndex(closestIndex);
  };

  return (
    <section
      aria-labelledby={`menu-category-${category.id}`}
      className="overflow-hidden rounded-3xl border border-gold-200 bg-cream-50 shadow-[0_12px_32px_rgba(74,7,17,0.08)]"
      data-testid={`menu-category-${category.id}`}
    >
      <header className="flex items-end justify-between gap-3 border-b border-gold-200 bg-cream-100/80 px-4 py-4 sm:px-6">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-700">Menu category</p>
          <h3 className="mt-1 font-display text-2xl font-bold uppercase leading-none text-burgundy-900 sm:text-3xl" id={`menu-category-${category.id}`}>
            {category.name}
          </h3>
        </div>
        <p className="shrink-0 text-xs font-bold text-burgundy-800 sm:text-sm">
          {category.dishes.length} choices <span aria-hidden="true">•</span> Choose 1
        </p>
      </header>

      <div className="p-3 sm:p-5">
        <div
          aria-label={`${category.name} dishes. Swipe to browse.`}
          className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          data-testid={`menu-dishes-${category.id}`}
          onScroll={updateCurrentDish}
          ref={railRef}
          role="group"
          tabIndex={0}
        >
          {category.dishes.map((dish) => {
            const image = dish.imageAlt ? { ...GALLERY[dish.imageKey], alt: dish.imageAlt } : GALLERY[dish.imageKey];

            return (
              <article className="w-full shrink-0 snap-center" key={dish.id}>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream-100">
                  <ZoomableImage asset={image} className="h-full" />
                </div>
                <h4 className="px-2 pt-4 text-center font-display text-2xl font-bold text-burgundy-900 sm:text-3xl">
                  {dish.name}
                </h4>
              </article>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-center gap-3" aria-label={`${currentDishIndex + 1} of ${category.dishes.length}`}>
          <span className="min-w-10 text-right text-xs font-semibold text-ink-600">
            {currentDishIndex + 1} of {category.dishes.length}
          </span>
          <span aria-hidden="true" className="flex items-center gap-1.5">
            {category.dishes.map((dish, index) => (
              <span
                className={`block rounded-full transition-all ${index === currentDishIndex ? 'h-2.5 w-6 bg-burgundy-900' : 'h-2.5 w-2.5 bg-gold-300'}`}
                key={dish.id}
              />
            ))}
          </span>
        </div>

        <p className="mt-2 text-center text-[0.68rem] font-semibold text-ink-500">Swipe the image to browse dishes</p>
      </div>
    </section>
  );
}

export function RegularPackagesSection() {
  return (
    <section aria-labelledby="regular-packages-title" className="overflow-x-clip bg-gradient-to-br from-cream-100 via-cream-50 to-gold-200/35 py-9 sm:py-10 lg:py-11" id="regular-packages">
      <Container>
        <SectionHeading
          description="Browse the available dishes for catering packages serving 50 guests. Choose only one dish from each category."
          id="regular-packages-title"
          title="Customize Your Catering Menu"
        />
        <DecorativeDivider className="mt-3" />

        <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-5" data-testid="custom-menu-categories">
          {ORDERED_MENU_CATEGORIES.map((category, categoryIndex) => (
            <div key={category.id}>
              {categoryIndex === 1 ? (
                <p className="mb-5 flex items-center justify-center gap-2 text-center text-xs font-semibold text-burgundy-800 sm:text-sm">
                  <span aria-hidden="true" className="h-px w-8 bg-gold-300" />
                  Scroll down to explore more categories
                  <span aria-hidden="true" className="h-px w-8 bg-gold-300" />
                </p>
              ) : null}
              <DishCarousel category={category} />
            </div>
          ))}
        </div>

        <section aria-labelledby="regular-inclusions-title" className="mx-auto mt-5 max-w-2xl overflow-hidden rounded-2xl border border-gold-200 bg-cream-100 shadow-sm">
          <div className="p-3 sm:p-4">
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-400 text-burgundy-950">
                <Icon name="utensils" size={18} />
              </span>
              <h3 className="font-display text-xl font-bold text-burgundy-900" id="regular-inclusions-title">Included with Your Catering Package</h3>
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-3" data-testid="regular-inclusions-grid">
              {REGULAR_SHARED_INCLUSIONS.map((inclusion) => (
                <li className="flex min-h-10 items-center gap-2 rounded-lg border border-cream-300 bg-cream-50 px-2.5 py-2 text-xs font-semibold leading-4 text-ink-700" key={inclusion}>
                  <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-200 text-burgundy-900">
                    <Icon name="check" size={14} />
                  </span>
                  <span>{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-gold-200 px-3 py-3 text-center sm:px-4 lg:flex lg:items-center lg:justify-between lg:gap-4 lg:text-left">
            <p className="text-xs leading-5 text-ink-700 sm:text-sm">
              <strong className="text-burgundy-900">Need a substitution?</strong> Contact us to discuss changes; additional charges may apply.
            </p>
            <ButtonLink className="mt-3 shrink-0 lg:mt-0" external href={FACEBOOK_CTA.href} icon="facebook">
              Discuss Your Menu with Yhan’s
            </ButtonLink>
          </div>
        </section>
        <p className="mt-4 text-center text-sm leading-6 text-ink-700">{REGULAR_OVERFLOW_NOTE}</p>
      </Container>
    </section>
  );
}
