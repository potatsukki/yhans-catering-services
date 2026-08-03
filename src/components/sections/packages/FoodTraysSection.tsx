import { useRef } from 'react';

import { GALLERY } from '../../../data/gallery';
import { FACEBOOK_CTA } from '../../../data/navigation';
import {
  FOOD_TRAY,
  FOOD_TRAY_CATEGORIES,
  type FoodTrayCategory,
  type FoodTrayItem,
} from '../../../data/packages';
import { Badge } from '../../ui/Badge';
import { ButtonLink } from '../../ui/ButtonLink';
import {
  CatalogPlaceholder,
  catalogCardBodyClass,
  catalogCardClass,
  catalogCardWidth,
  catalogGridClass,
  catalogMediaClass,
} from '../../ui/CatalogCard';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';
import { ZoomableImage } from '../../ui/ZoomableImage';

function FoodTrayCard({ item }: { readonly item: FoodTrayItem }) {
  const image = { ...GALLERY[item.imageKey], alt: item.imageAlt };

  return (
    <li className={`min-w-0 shrink-0 snap-start ${catalogCardWidth}`}>
      <article className={catalogCardClass}>
        <div
          className={catalogMediaClass}
          data-testid="food-tray-media"
        >
          {item.imageIsFallback ? (
            <CatalogPlaceholder alt={item.imageAlt} testId="food-tray-placeholder" />
          ) : (
            <ZoomableImage asset={image} className="h-full" />
          )}
          {item.badge ? (
            <Badge className="absolute right-2 top-2 !min-h-0 !rounded-md !px-2 !py-1 !text-[0.55rem] !leading-none !tracking-[0.08em]" tone="burgundy">
              ★ {item.badge}
            </Badge>
          ) : null}
        </div>
        <div className={catalogCardBodyClass} data-testid="food-tray-card-body">
          <h4 className="font-display text-base font-bold leading-tight text-burgundy-900 sm:text-lg">
            {item.name}
          </h4>
        </div>
      </article>
    </li>
  );
}

type FoodTrayCategoryPanelProps = {
  readonly category: FoodTrayCategory;
  readonly categoryIndex: number;
  readonly categoryRef: (element: HTMLElement | null) => void;
  readonly goToCategory: (categoryIndex: number) => void;
};

function FoodTrayCategoryPanel({ category, categoryIndex, categoryRef, goToCategory }: FoodTrayCategoryPanelProps) {
  const countLabel = `${category.items.length} ${category.items.length === 1 ? 'dish' : 'dishes'}`;
  const previousCategory = FOOD_TRAY_CATEGORIES[categoryIndex - 1];
  const nextCategory = FOOD_TRAY_CATEGORIES[categoryIndex + 1];

  return (
    <section
      aria-labelledby={`food-tray-${category.id}-title`}
      className={`w-[88vw] max-w-[22rem] shrink-0 snap-start rounded-2xl border border-cream-300 bg-cream-50 p-3 shadow-[0_4px_18px_rgba(74,7,17,0.055)] sm:p-4 md:w-full md:max-w-none md:rounded-none md:border-x-0 md:border-t-0 md:bg-transparent md:p-5 md:shadow-none lg:p-6 ${categoryIndex === FOOD_TRAY_CATEGORIES.length - 1 ? 'md:border-b-0' : 'md:border-b md:border-gold-200'}`}
      data-testid={`food-tray-category-${category.id}`}
      ref={categoryRef}
    >
      <div className="flex items-center gap-3">
        <Icon aria-hidden="true" className="hidden shrink-0 text-gold-600 md:block" name={category.id === 'vegetables' ? 'leaf' : 'utensils'} size={21} />
        <h3 className="shrink-0 font-display text-xl font-bold uppercase leading-none text-burgundy-900 sm:text-2xl" id={`food-tray-${category.id}-title`}>
          {category.name}
        </h3>
        <span aria-hidden="true" className="h-px min-w-5 flex-1 bg-gold-300" />
        <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-500 sm:text-xs">
          {countLabel}
        </span>
      </div>
      <ul className={catalogGridClass} data-testid={`food-tray-grid-${category.id}`}>
        {category.items.map((item) => <FoodTrayCard item={item} key={item.id} />)}
      </ul>
      <div className="mt-2 flex min-h-9 items-center justify-between gap-2 md:hidden">
        {previousCategory ? (
          <button
            aria-label={`Go back to ${previousCategory.name} food tray category`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400 bg-cream-50 text-burgundy-900 shadow-sm transition-colors hover:bg-gold-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35"
            onClick={() => goToCategory(categoryIndex - 1)}
            type="button"
          >
            <Icon aria-hidden="true" className="rotate-180" name="chevronRight" size={18} />
          </button>
        ) : <span aria-hidden="true" className="h-10 w-10 shrink-0" />}
        <p className="flex-1 text-center text-[0.68rem] font-semibold text-burgundy-800">
          Swipe dishes or browse categories
        </p>
        {nextCategory ? (
          <button
            aria-label={`Go to next ${nextCategory.name} food tray category`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400 bg-cream-50 text-burgundy-900 shadow-sm transition-colors hover:bg-gold-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35"
            onClick={() => goToCategory(categoryIndex + 1)}
            type="button"
          >
            <Icon aria-hidden="true" name="chevronRight" size={18} />
          </button>
        ) : <span aria-hidden="true" className="h-10 w-10 shrink-0" />}
      </div>
    </section>
  );
}

export function FoodTraysSection() {
  const categoryRailRef = useRef<HTMLDivElement>(null);
  const categoryPanelRefs = useRef<Array<HTMLElement | null>>([]);

  const goToCategory = (categoryIndex: number) => {
    const rail = categoryRailRef.current;
    const targetCategory = categoryPanelRefs.current[categoryIndex];
    if (!rail || !targetCategory) {
      return;
    }

    const railBounds = rail.getBoundingClientRect();
    const categoryBounds = targetCategory.getBoundingClientRect();
    rail.scrollTo({
      behavior: 'smooth',
      left: rail.scrollLeft + categoryBounds.left - railBounds.left,
    });
  };

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

        <div className="mt-7 max-w-full overflow-hidden md:rounded-2xl md:border md:border-gold-200 md:bg-cream-50/75 md:shadow-md" data-testid="food-tray-catalog">
          <div
            className="horizontal-card-scroller flex max-w-full snap-x snap-mandatory items-start gap-3 overflow-x-auto pb-2 md:block md:overflow-visible md:pb-0"
            data-testid="food-tray-categories"
            ref={categoryRailRef}
          >
            {FOOD_TRAY_CATEGORIES.map((category, index) => (
              <FoodTrayCategoryPanel
                category={category}
                categoryIndex={index}
                categoryRef={(element) => {
                  categoryPanelRefs.current[index] = element;
                }}
                goToCategory={goToCategory}
                key={category.id}
              />
            ))}
          </div>
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
