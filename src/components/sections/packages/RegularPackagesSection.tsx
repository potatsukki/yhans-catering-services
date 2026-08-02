import { useRef, useState } from 'react';

import {
  MENU_CATEGORIES,
  REGULAR_OVERFLOW_NOTE,
  REGULAR_SHARED_INCLUSIONS,
  type MenuCategoryId,
  type MenuDish,
  type MenuSelections,
} from '../../../data/packages';
import { GALLERY } from '../../../data/gallery';
import { FACEBOOK_CTA } from '../../../data/navigation';
import { Badge } from '../../ui/Badge';
import { ButtonLink } from '../../ui/ButtonLink';
import {
  catalogCardBodyClass,
  catalogCardClass,
  catalogCardWidth,
  catalogMediaClass,
} from '../../ui/CatalogCard';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon } from '../../ui/Icon';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';

type DishCardProps = {
  readonly categoryId: MenuCategoryId;
  readonly dish: MenuDish;
  readonly selected: boolean;
  readonly onSelect: (categoryId: MenuCategoryId, dishId: string) => void;
};

function DishCard({ categoryId, dish, selected, onSelect }: DishCardProps) {
  const image = GALLERY[dish.imageKey];

  return (
    <label
      className={`group relative flex shrink-0 snap-start cursor-pointer flex-col transition duration-200 hover:border-gold-400 hover:shadow-md has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-focus/35 ${catalogCardClass} ${catalogCardWidth} ${
        selected ? 'border-burgundy-800 ring-2 ring-burgundy-800/15' : 'border-cream-300 hover:border-gold-400'
      }`}
      data-selected={selected ? 'true' : 'false'}
    >
      <input
        checked={selected}
        className="sr-only"
        name={`menu-${categoryId}`}
        onChange={() => undefined}
        onClick={(event) => {
          if (selected) {
            event.preventDefault();
          }
          onSelect(categoryId, dish.id);
        }}
        type="radio"
        value={dish.id}
      />
      <span className={catalogMediaClass}>
        <ResponsiveImage asset={image} className="h-full transition-transform duration-200 group-hover:scale-[1.025]" />
        <span className="absolute left-1.5 top-1.5 flex max-w-[calc(100%-0.75rem)] flex-wrap gap-1">
          {dish.isBestSeller ? <Badge tone="gold" className="min-h-5 px-1.5 py-0 text-[0.55rem]">Best Seller</Badge> : null}
          {dish.imageIsTemporary ? <Badge tone="neutral" className="min-h-5 px-1.5 py-0 text-[0.55rem]">Sample image</Badge> : null}
        </span>
      </span>
      <span className={`${catalogCardBodyClass} flex-1 text-xs font-semibold leading-4 text-ink-700 sm:text-sm`} data-testid="custom-menu-card-body">
        {dish.name}
      </span>
      <span
        aria-hidden={selected ? undefined : true}
        className={`flex h-7 shrink-0 items-center justify-center gap-1 border-t px-1.5 text-[0.68rem] font-bold ${
          selected
            ? 'border-burgundy-800/20 bg-burgundy-900 text-cream-50'
            : 'border-transparent bg-transparent text-transparent'
        }`}
      >
        {selected ? <Icon aria-hidden="true" name="check" size={15} /> : null}
        {selected ? 'Selected' : 'Not selected'}
      </span>
    </label>
  );
}

export function RegularPackagesSection() {
  const [selections, setSelections] = useState<MenuSelections>({});
  const categoryRailRef = useRef<HTMLDivElement>(null);
  const categoryCardRefs = useRef<Array<HTMLFieldSetElement | null>>([]);
  const selectedCount = MENU_CATEGORIES.filter((category) => selections[category.id]).length;
  const isComplete = selectedCount === MENU_CATEGORIES.length;

  const selectDish = (categoryId: MenuCategoryId, dishId: string) => {
    setSelections((current) => {
      if (current[categoryId] === dishId) {
        const nextSelections = { ...current };
        delete nextSelections[categoryId];
        return nextSelections;
      }
      return { ...current, [categoryId]: dishId };
    });
  };

  const goToCategory = (categoryIndex: number) => {
    const rail = categoryRailRef.current;
    const targetCategory = categoryCardRefs.current[categoryIndex];
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
    <section aria-labelledby="regular-packages-title" className="overflow-x-clip bg-gradient-to-br from-cream-100 via-cream-50 to-gold-200/35 py-9 sm:py-10 lg:py-11" id="regular-packages">
      <Container>
        <SectionHeading
          description="Choose one dish from each category for 50 guests."
          id="regular-packages-title"
          title="Customize Your Catering Menu"
        />
        <DecorativeDivider className="mt-3" />

        <div className="mt-6 max-w-full overflow-hidden md:rounded-2xl md:border md:border-gold-200 md:bg-cream-50/75 md:shadow-md">
          <div
            className="horizontal-card-scroller flex max-w-full snap-x snap-mandatory items-start gap-3 overflow-x-auto pb-2 md:block md:overflow-visible md:pb-0"
            data-testid="custom-menu-categories"
            ref={categoryRailRef}
          >
            {MENU_CATEGORIES.map((category, categoryIndex) => (
            <fieldset
              className={`min-w-0 w-[88vw] max-w-[22rem] shrink-0 snap-start rounded-2xl border border-cream-300 bg-cream-50 p-3 shadow-[0_4px_18px_rgba(74,7,17,0.055)] sm:p-4 md:w-full md:max-w-none md:rounded-none md:border-x-0 md:border-t-0 md:bg-transparent md:p-5 md:shadow-none lg:p-6 ${categoryIndex === MENU_CATEGORIES.length - 1 ? 'md:border-b-0' : 'md:border-b md:border-gold-200'}`}
              data-testid={`menu-category-${category.id}`}
              key={category.id}
              ref={(element) => {
                categoryCardRefs.current[categoryIndex] = element;
              }}
            >
              <legend className="sr-only">{category.name}: choose one dish</legend>
              <div className="flex items-center gap-3">
                <Icon aria-hidden="true" className="hidden shrink-0 text-gold-600 md:block" name={category.id === 'vegetables' ? 'leaf' : 'utensils'} size={21} />
                <h3 className="shrink-0 font-display text-[1.35rem] font-bold uppercase leading-none text-burgundy-900 sm:text-2xl">{category.name}</h3>
                <span aria-hidden="true" className="hidden h-px min-w-5 flex-1 bg-gold-300 md:block" />
                <p className="ml-auto shrink-0 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-gold-600 sm:text-xs">
                  {category.dishes.length} choices · Choose 1
                </p>
              </div>
              <div className="horizontal-card-scroller mt-4 flex min-w-0 snap-x snap-mandatory items-stretch justify-start gap-3 overflow-x-auto pb-1 sm:gap-4 md:flex-wrap md:overflow-visible md:pb-0" data-testid={`menu-dishes-${category.id}`}>
                {category.dishes.map((dish) => (
                  <DishCard
                    categoryId={category.id}
                    dish={dish}
                    key={dish.id}
                    onSelect={selectDish}
                    selected={selections[category.id] === dish.id}
                  />
                ))}
              </div>
              <div className="mt-2 flex min-h-9 items-center justify-between gap-2 md:hidden">
                {categoryIndex > 0 ? (
                  <button
                    aria-label={`Go back to ${MENU_CATEGORIES[categoryIndex - 1].name} category`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400 bg-cream-50 text-burgundy-900 shadow-sm transition-colors hover:bg-gold-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35"
                    onClick={() => goToCategory(categoryIndex - 1)}
                    type="button"
                  >
                    <Icon aria-hidden="true" className="rotate-180" name="chevronRight" size={18} />
                  </button>
                ) : <span aria-hidden="true" className="h-9 w-9 shrink-0" />}
                <p className="flex-1 text-center text-[0.68rem] font-semibold text-burgundy-800">
                  Swipe to browse dishes
                </p>
                {categoryIndex < MENU_CATEGORIES.length - 1 ? (
                  <button
                    aria-label={`Go to next ${MENU_CATEGORIES[categoryIndex + 1].name} category`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400 bg-cream-50 text-burgundy-900 shadow-sm transition-colors hover:bg-gold-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35"
                    onClick={() => goToCategory(categoryIndex + 1)}
                    type="button"
                  >
                    <Icon aria-hidden="true" name="chevronRight" size={18} />
                  </button>
                ) : <span aria-hidden="true" className="h-9 w-9 shrink-0" />}
              </div>
            </fieldset>
            ))}
          </div>
        </div>

        <section aria-labelledby="menu-choices-title" className="mt-5 overflow-hidden rounded-2xl border border-gold-200 bg-cream-100 shadow-sm" data-testid="menu-choices-summary">
          <div className="border-b border-gold-200 bg-burgundy-950 px-4 py-3 text-cream-50 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-5">
            <h3 className="font-display text-2xl font-bold" id="menu-choices-title">Your Choices</h3>
            <div aria-live="polite" className="mt-1 sm:mt-0 sm:text-right">
              <p className="text-sm font-semibold">{selectedCount} of {MENU_CATEGORIES.length} categories selected</p>
              {isComplete ? <p className="text-xs font-bold text-gold-200">Your menu guide is complete.</p> : null}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2">
            <dl className="grid gap-2 p-3 sm:grid-cols-2">
              {MENU_CATEGORIES.map((category) => {
                const selectedDish = category.dishes.find((dish) => dish.id === selections[category.id]);
                return (
                  <div className="flex min-w-0 items-center gap-2 rounded-lg border border-cream-300 bg-cream-50 px-3 py-2" key={category.id}>
                    <dt className="shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-burgundy-800">{category.summaryLabel}</dt>
                    <dd className={`min-w-0 truncate text-xs font-semibold ${selectedDish ? 'text-ink-900' : 'text-ink-500'}`} data-testid={`choice-${category.id}`} title={selectedDish?.name ?? 'Not selected yet'}>
                      {selectedDish?.name ?? 'Not selected yet'}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <div className="border-t border-gold-200 p-3 lg:border-l lg:border-t-0" data-testid="regular-inclusions-panel">
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-400 text-burgundy-950">
                  <Icon name="utensils" size={18} />
                </span>
                <h3 className="font-display text-xl font-bold text-burgundy-900">Included with Your Catering Package</h3>
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-2" data-testid="regular-inclusions-grid">
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
