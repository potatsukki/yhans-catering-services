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
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';

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
            <ResponsiveImage asset={image} className="h-full" />
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

function FoodTrayCategoryPanel({ category, isLast }: { readonly category: FoodTrayCategory; readonly isLast: boolean }) {
  const countLabel = `${category.items.length} ${category.items.length === 1 ? 'dish' : 'dishes'}`;

  return (
    <section
      aria-labelledby={`food-tray-${category.id}-title`}
      className={`px-3 py-6 sm:px-5 sm:py-7 lg:px-6 ${isLast ? '' : 'border-b border-gold-200'}`}
      data-testid={`food-tray-category-${category.id}`}
    >
      <div className="flex items-center gap-3">
        <Icon aria-hidden="true" className="shrink-0 text-gold-600" name={category.id === 'vegetables' ? 'leaf' : 'utensils'} size={21} />
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
            <ResponsiveImage asset={GALLERY[FOOD_TRAY.imageKey]} className="h-full" />
          </div>
        </div>

        <div
          className="mt-7 overflow-hidden rounded-2xl border border-gold-200 bg-cream-50/75 shadow-md"
          data-testid="food-tray-catalog"
        >
          {FOOD_TRAY_CATEGORIES.map((category, index) => (
            <FoodTrayCategoryPanel
              category={category}
              isLast={index === FOOD_TRAY_CATEGORIES.length - 1}
              key={category.id}
            />
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
