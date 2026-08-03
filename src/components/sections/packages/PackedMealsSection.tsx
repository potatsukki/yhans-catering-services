import type { ReactNode } from 'react';

import { GALLERY } from '../../../data/gallery';
import { FACEBOOK_CTA } from '../../../data/navigation';
import {
  BREAKFAST_FOOD_PACK,
  LUNCH_DINNER_PACKED_MEALS,
  PACKED_MEAL_PRICE_RANGE,
  type PackedMealDish,
} from '../../../data/packages';
import { Badge } from '../../ui/Badge';
import { ButtonLink } from '../../ui/ButtonLink';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon, type IconName } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';
import { ZoomableImage } from '../../ui/ZoomableImage';
import { formatPhp } from '../../ui/Price';

const packedMealBenefits = [
  { icon: 'utensils', text: 'Individually packed meals' },
  { icon: 'clock', text: 'Available for breakfast, lunch, and dinner' },
  { icon: 'building', text: 'Suitable for bulk and corporate orders' },
] as const satisfies readonly { readonly icon: IconName; readonly text: string }[];

type MealMenuProps = {
  readonly children?: ReactNode;
  readonly description: string;
  readonly id: string;
  readonly meals: readonly PackedMealDish[];
  readonly name: string;
  readonly testId: string;
};

function MealMenu({ children, description, id, meals, name, testId }: MealMenuProps) {
  return (
    <section aria-labelledby={id} className="px-5 py-7 sm:px-7 sm:py-8 lg:px-9">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Choose your meal</p>
          <h3 className="mt-1 font-display text-2xl font-bold text-burgundy-900 sm:text-3xl" id={id}>
            {name}
          </h3>
          <p className="mt-1 text-sm leading-6 text-ink-700">{description}</p>
        </div>
        <span className="rounded-full border border-gold-300 bg-gold-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-burgundy-900">
          {meals.length} meals
        </span>
      </div>
      {children}
      <ul className="mt-5 grid gap-x-7 sm:grid-cols-2 lg:grid-cols-3" data-testid={testId}>
        {meals.map((meal, index) => (
          <li className="flex min-h-12 items-center gap-3 border-b border-gold-200 py-3" key={meal.id}>
            <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-200 font-display text-sm font-bold text-burgundy-900">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="min-w-0 font-semibold text-ink-800">{meal.name}</span>
            {meal.badge ? (
              <Badge className="ml-auto !min-h-0 shrink-0 !rounded-md !px-2 !py-1 !text-[0.55rem] !leading-none !tracking-[0.08em]" tone="burgundy">
                {meal.badge}
              </Badge>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PackedMealsSection() {
  const priceLabel = `${formatPhp(PACKED_MEAL_PRICE_RANGE[0])}–${formatPhp(PACKED_MEAL_PRICE_RANGE[1])}`;

  return (
    <section aria-labelledby="packed-meals-title" className="bg-gradient-to-br from-cream-100 via-cream-50 to-gold-200/35 py-12 sm:py-14 lg:py-16" id="packed-meals">
      <Container>
        <SectionHeading
          description="Convenient food packs available for breakfast, lunch, dinner, meetings, seminars, offices, and group orders."
          id="packed-meals-title"
          title="Packed Meals"
        />
        <DecorativeDivider className="mt-4" />

        <article className="mt-7 overflow-hidden rounded-3xl border border-gold-200 bg-cream-50 shadow-lg lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,1fr)]" data-testid="packed-meals-feature">
          <div className="self-center overflow-hidden">
            <ZoomableImage asset={GALLERY.packedMealsGroupOrder} className="aspect-[4/3] h-auto w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-6 py-8 sm:px-8 lg:px-9 lg:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700">Food packs for group orders</p>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-burgundy-900 sm:text-4xl">
              Freshly Packed and Ready to Serve
            </h3>
            <p className="mt-4 text-sm leading-7 text-ink-700 sm:text-base">
              Convenient individually packed meals prepared for offices, call center accounts, meetings, seminars, business events, and other group occasions.
            </p>

            <ul className="mt-5 space-y-3">
              {packedMealBenefits.map((benefit) => (
                <li className="flex items-center gap-3 text-sm font-semibold text-ink-800" key={benefit.text}>
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-200 text-burgundy-900">
                    <Icon name={benefit.icon} size={17} />
                  </span>
                  {benefit.text}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-gold-200 pt-5">
              <p className="font-display text-4xl font-bold text-burgundy-900">
                {priceLabel} <span className="font-body text-sm font-semibold text-ink-700">per pack</span>
              </p>
              <p className="mt-2 text-xs leading-5 text-ink-600">
                Final pricing may vary depending on the selected meal, order quantity, delivery location, and arrangement.
              </p>
              <ButtonLink className="mt-5 w-full sm:w-auto" external href={FACEBOOK_CTA.href} icon="facebook">
                Ask About Packed Meals
              </ButtonLink>
            </div>
          </div>
        </article>

        <div className="mt-7 overflow-hidden rounded-3xl border border-gold-200 bg-cream-50/90 shadow-md" data-testid="packed-meals-catalog">
          <MealMenu
            description={BREAKFAST_FOOD_PACK.description}
            id="breakfast-food-pack-title"
            meals={BREAKFAST_FOOD_PACK.options}
            name={BREAKFAST_FOOD_PACK.name}
            testId="breakfast-meal-grid"
          />
          <div className="border-t border-gold-200">
            <MealMenu
              description="Choose from our available packed meals for lunch or dinner."
              id="lunch-dinner-food-packs-title"
              meals={LUNCH_DINNER_PACKED_MEALS}
              name="Lunch & Dinner Food Packs"
              testId="packed-meal-grid"
            >
              <p className="mt-4 rounded-xl border border-gold-300 bg-gold-100 px-4 py-3 text-sm font-bold text-burgundy-900">
                All lunch and dinner food packs include rice and vegetables.
              </p>
            </MealMenu>
          </div>
        </div>

        <aside className="mt-7 overflow-hidden rounded-2xl border border-gold-300 bg-gradient-to-r from-burgundy-950 to-burgundy-900 text-cream-50 shadow-lg sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center" aria-label="Packed meal pricing and inquiry">
          <div className="px-6 py-6 sm:px-8">
            <p className="font-display text-3xl font-bold text-gold-200">
              {priceLabel} <span className="font-body text-sm font-semibold text-cream-100">per pack</span>
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-cream-100/90">
              Final pricing may vary depending on the selected meal, quantity, delivery arrangement, and location.
            </p>
            <p className="mt-1 max-w-3xl text-sm font-semibold leading-6 text-gold-100">
              Ideal for offices, call center accounts, meetings, seminars, business events, and group orders.
            </p>
          </div>
          <div className="px-6 pb-6 sm:py-6 sm:pl-0 sm:pr-8">
            <ButtonLink className="w-full shrink-0 ring-1 ring-cream-50/80 sm:w-auto" external href={FACEBOOK_CTA.href} icon="facebook" variant="secondary">
              Ask About Packed Meals
            </ButtonLink>
          </div>
        </aside>
      </Container>
    </section>
  );
}
