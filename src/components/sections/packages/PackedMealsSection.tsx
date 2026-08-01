import {
  PACKED_MEAL_IMAGE_KEYS,
  PACKED_MEAL_PRICE_RANGE,
  PACKED_MEALS,
  PACKED_MEALS_AUDIENCES,
  PACKED_MEALS_PENDING_DETAILS,
} from '../../../data/packages';
import { GALLERY } from '../../../data/gallery';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';
import { formatPhp } from '../../ui/Price';

export function PackedMealsSection() {
  return (
    <section aria-labelledby="packed-meals-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14" id="packed-meals">
      <Container>
        <SectionHeading
          description="Separately offered food packs for breakfast, lunch, and dinner."
          id="packed-meals-title"
          title="Packed Meals"
        />
        <DecorativeDivider className="mt-4" />
        <div className="horizontal-card-scroller -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0" data-testid="packed-meals-scroller">
          {PACKED_MEALS.map((meal) => (
            <article className="w-[84vw] max-w-[22rem] shrink-0 snap-start overflow-hidden rounded-xl border border-cream-300 bg-cream-50 shadow-sm md:w-auto md:max-w-none" key={meal.id}>
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                <ResponsiveImage asset={GALLERY[PACKED_MEAL_IMAGE_KEYS[meal.id]]} />
                {GALLERY[PACKED_MEAL_IMAGE_KEYS[meal.id]].isPlaceholder ? (
                  <span className="absolute bottom-3 right-3 rounded-full bg-cream-50/90 px-3 py-1 font-body text-xs font-semibold text-ink-700">
                    Sample image
                  </span>
                ) : null}
              </div>
              <div className="flex min-h-40 flex-col gap-2 p-4">
                <h3 className="font-display text-xl font-bold text-burgundy-900">{meal.name}</h3>
                <p className="text-sm leading-6 text-ink-700">{meal.description}</p>
                {meal.sampleMenu ? (
                  <ul className="grid gap-1 text-sm leading-6 text-ink-700">
                    {meal.sampleMenu.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-gold-200 px-5 py-3 text-center">
          <p className="font-display text-3xl font-bold text-burgundy-900">
            {formatPhp(PACKED_MEAL_PRICE_RANGE[0])}–{formatPhp(PACKED_MEAL_PRICE_RANGE[1])}{' '}
            <span className="font-body text-base font-semibold">per pack</span>
          </p>
        </div>
        <p className="mt-6 text-center text-sm leading-6 text-ink-700">
          Ideal for {PACKED_MEALS_AUDIENCES.join(', ').replace(/, ([^,]*)$/, ', and $1')}.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-6 text-ink-700">{PACKED_MEALS_PENDING_DETAILS}</p>
      </Container>
    </section>
  );
}
