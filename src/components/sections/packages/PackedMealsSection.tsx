import { GALLERY } from '../../../data/gallery';
import { FACEBOOK_CTA } from '../../../data/navigation';
import {
  BREAKFAST_FOOD_PACK,
  LUNCH_DINNER_PACKED_MEALS,
  PACKED_MEAL_PRICE_RANGE,
  PACKED_MEALS_AUDIENCES,
  PACKED_MEALS_PENDING_DETAILS,
  type PackedMealDish,
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
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';
import { formatPhp } from '../../ui/Price';

type MealCardProps = {
  readonly meal: PackedMealDish;
  readonly showSampleBadge?: boolean;
};

function MealCard({ meal, showSampleBadge = false }: MealCardProps) {
  const mealImage = { ...GALLERY[meal.imageKey], alt: meal.imageAlt };

  return (
    <li className={`min-w-0 shrink-0 snap-start ${catalogCardWidth}`}>
      <article className={catalogCardClass}>
        <div className={catalogMediaClass} data-testid="packed-meal-media">
          {meal.imageIsFallback ? (
            <CatalogPlaceholder alt={meal.imageAlt} testId="packed-meal-placeholder" />
          ) : (
            <ResponsiveImage asset={mealImage} className="h-full" />
          )}
          {meal.badge ? (
            <Badge className="absolute right-2 top-2 !min-h-0 !rounded-md !px-2 !py-1 !text-[0.55rem] !leading-none !tracking-[0.08em]" tone="burgundy">
              ★ {meal.badge}
            </Badge>
          ) : null}
          {showSampleBadge && !meal.imageIsFallback && GALLERY[meal.imageKey].isPlaceholder ? (
            <Badge className="absolute right-2 top-2 !min-h-0 !rounded-md !px-2 !py-1 !text-[0.55rem] !leading-none !tracking-[0.08em]" tone="neutral">
              Sample image
            </Badge>
          ) : null}
        </div>
        <div className={catalogCardBodyClass} data-testid="packed-meal-card-body">
          <h4 className="font-display text-base font-bold leading-tight text-burgundy-900 sm:text-lg">
            {meal.name}
          </h4>
        </div>
      </article>
    </li>
  );
}

type MealCategoryProps = {
  readonly count: number;
  readonly description: string;
  readonly icon: 'clock' | 'utensils';
  readonly id: string;
  readonly isLast?: boolean;
  readonly name: string;
  readonly note?: string;
  readonly children: ReactNode;
};

function MealCategory({ children, count, description, icon, id, isLast = false, name, note }: MealCategoryProps) {
  return (
    <section aria-labelledby={id} className={`px-3 py-6 sm:px-5 sm:py-7 lg:px-6 ${isLast ? '' : 'border-b border-gold-200'}`}>
      <div className="flex items-center gap-3">
        <Icon aria-hidden="true" className="shrink-0 text-gold-600" name={icon} size={21} />
        <h3 className="shrink-0 font-display text-xl font-bold uppercase leading-none text-burgundy-900 sm:text-2xl" id={id}>
          {name}
        </h3>
        <span aria-hidden="true" className="h-px min-w-5 flex-1 bg-gold-300" />
        <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-500 sm:text-xs">
          {count} meals
        </span>
      </div>
      <p className="mt-2 text-xs leading-5 text-ink-700 sm:text-sm">{description}</p>
      {note ? (
        <p className="mt-1 flex items-center justify-center gap-1.5 text-center text-xs font-semibold text-burgundy-900 sm:text-sm">
          <Icon aria-hidden="true" className="shrink-0 text-gold-600" name="sparkle" size={15} />
          <span>{note}</span>
          <Icon aria-hidden="true" className="shrink-0 text-gold-600" name="sparkle" size={15} />
        </p>
      ) : null}
      {children}
    </section>
  );
}

export function PackedMealsSection() {
  return (
    <section aria-labelledby="packed-meals-title" className="bg-gradient-to-br from-cream-100 via-cream-50 to-gold-200/35 py-9 sm:py-10 lg:py-12" id="packed-meals">
      <Container>
        <SectionHeading
          description="Food packs available for breakfast, lunch, and dinner."
          id="packed-meals-title"
          title="Packed Meals"
        />
        <DecorativeDivider className="mt-4" />

        <div className="mt-6 overflow-hidden rounded-2xl border border-gold-200 bg-cream-50/75 shadow-md" data-testid="packed-meals-catalog">
          <MealCategory
            count={BREAKFAST_FOOD_PACK.options.length}
            description={BREAKFAST_FOOD_PACK.description}
            icon="clock"
            id="breakfast-food-pack-title"
            name={BREAKFAST_FOOD_PACK.name}
          >
            <ul className={catalogGridClass} data-testid="breakfast-meal-grid">
              {BREAKFAST_FOOD_PACK.options.map((meal) => (
                <MealCard meal={meal} showSampleBadge key={meal.id} />
              ))}
            </ul>
          </MealCategory>

          <MealCategory
            count={LUNCH_DINNER_PACKED_MEALS.length}
            description="Choose from our available packed meals for lunch or dinner."
            icon="utensils"
            id="lunch-dinner-food-packs-title"
            isLast
            name="Lunch & Dinner Food Packs"
            note="All meals include rice and vegetables."
          >
            <ul className={catalogGridClass} data-testid="packed-meal-grid">
              {LUNCH_DINNER_PACKED_MEALS.map((meal) => (
                <MealCard meal={meal} key={meal.id} />
              ))}
            </ul>
          </MealCategory>
        </div>

        <div className="mt-4 rounded-xl border border-gold-200 bg-gold-200/70 px-5 py-3 text-center">
          <p className="font-display text-3xl font-bold text-burgundy-900">
            {formatPhp(PACKED_MEAL_PRICE_RANGE[0])}–{formatPhp(PACKED_MEAL_PRICE_RANGE[1])}{' '}
            <span className="font-body text-base font-semibold">per pack</span>
          </p>
          <p className="mx-auto mt-1 max-w-3xl text-sm leading-6 text-ink-700">
            Final pricing may vary depending on the selected meal, quantity, and delivery arrangement.
          </p>
        </div>

        <div className="mx-auto mt-5 max-w-5xl overflow-hidden rounded-2xl border border-gold-200 bg-gradient-to-r from-cream-50 to-gold-200/30 shadow-sm sm:grid sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-stretch">
          <span aria-hidden="true" className="flex min-h-16 items-center justify-center bg-burgundy-900 px-4 text-gold-200 sm:min-h-full">
            <Icon name="phone" size={28} />
          </span>
          <div className="min-w-0 px-5 py-4 text-center sm:text-left">
            <p className="font-display text-lg font-bold leading-6 text-burgundy-900 sm:text-xl">
              Ideal for {PACKED_MEALS_AUDIENCES.join(', ').replace(/, ([^,]*)$/, ', and $1')}.
            </p>
            <p className="mt-1 text-sm leading-5 text-ink-700">{PACKED_MEALS_PENDING_DETAILS}</p>
          </div>
          <div className="flex items-center px-5 pb-5 sm:pl-0 sm:pb-0">
            <ButtonLink className="w-full shrink-0 sm:w-auto" external href={FACEBOOK_CTA.href} icon="facebook">
              Ask About Packed Meals
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
import type { ReactNode } from 'react';
