import { GALLERY } from '../../../data/gallery';
import { FACEBOOK_CTA } from '../../../data/navigation';
import { GRAZING_TABLE_OFFER } from '../../../data/packages';
import { ButtonLink } from '../../ui/ButtonLink';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon, type IconName } from '../../ui/Icon';
import { Price } from '../../ui/Price';
import { ResponsiveImage } from '../../ui/ResponsiveImage';
import { SectionHeading } from '../../ui/SectionHeading';

const offerFacts = [
  { label: 'Price', icon: 'cash', kind: 'price' },
  { label: 'Minimum order', icon: 'users', kind: 'minimum' },
  { label: 'Final total', icon: 'presentation', kind: 'total' },
  { label: 'Setup included', icon: 'utensils', kind: 'setup' },
] as const satisfies readonly { label: string; icon: IconName; kind: 'price' | 'minimum' | 'total' | 'setup' }[];

export function GrazingTableSection() {
  return (
    <section
      aria-labelledby="grazing-table-title"
      className="relative isolate overflow-hidden bg-cream-100 py-11 sm:py-12 lg:py-14"
      id="grazing-table"
    >
      <span aria-hidden="true" className="absolute -left-28 top-36 -z-10 h-72 w-72 rounded-full border-[3rem] border-gold-200/30" />
      <span aria-hidden="true" className="absolute -right-20 bottom-20 -z-10 h-56 w-56 rounded-full bg-burgundy-900/5" />

      <Container className="relative">
        <SectionHeading
          description={GRAZING_TABLE_OFFER.description}
          id="grazing-table-title"
          title={GRAZING_TABLE_OFFER.title}
        />
        <DecorativeDivider className="mt-4" />

        <dl className="mx-auto mt-6 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-gold-200 bg-cream-50 shadow-sm lg:grid-cols-4">
          {offerFacts.map((fact, index) => (
            <div
              className={`flex min-h-32 flex-col items-center justify-center gap-2 px-3 py-5 text-center sm:px-5 ${
                index % 2 === 0 ? 'border-r border-gold-200' : ''
              } ${index < 2 ? 'border-b border-gold-200 lg:border-b-0' : ''} ${
                index > 0 ? 'lg:border-l lg:border-gold-200' : 'lg:border-r-0'
              }`}
              key={fact.kind}
            >
              <Icon className="text-gold-600" name={fact.icon} size={30} />
              <dt className="sr-only">{fact.label}</dt>
              <dd className="flex min-h-11 items-center justify-center font-semibold leading-5 text-ink-800">
                {fact.kind === 'price' ? (
                  <Price amount={GRAZING_TABLE_OFFER.pricePerGuestPhp} suffix="per guest" />
                ) : null}
                {fact.kind === 'minimum' ? (
                  <span>Minimum<br /><strong className="text-burgundy-900">{GRAZING_TABLE_OFFER.minimumGuests} guests</strong></span>
                ) : null}
                {fact.kind === 'total' ? GRAZING_TABLE_OFFER.totalNote : null}
                {fact.kind === 'setup' ? GRAZING_TABLE_OFFER.setupNote : null}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-5 aspect-[16/9] max-w-7xl overflow-hidden rounded-2xl border border-gold-200 bg-cream-200 shadow-sm sm:aspect-[16/7] lg:aspect-[16/5]">
          <ResponsiveImage asset={GALLERY[GRAZING_TABLE_OFFER.imageKey]} className="h-full" />
        </div>

        <div className="mx-auto mt-5 max-w-7xl rounded-2xl border border-gold-200 bg-cream-50 px-5 py-6 shadow-sm sm:px-7 lg:px-10 lg:py-7">
          <div className="flex items-center justify-center gap-3 text-gold-600">
            <span aria-hidden="true" className="hidden h-px w-12 bg-gold-400 sm:block" />
            <Icon name="utensils" size={26} />
            <h3 className="font-display text-2xl font-bold text-burgundy-900 sm:text-3xl">Grazing Table Inclusions</h3>
            <span aria-hidden="true" className="hidden h-px w-12 bg-gold-400 sm:block" />
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3" data-testid="grazing-table-inclusions">
            {GRAZING_TABLE_OFFER.inclusions.map((item) => (
              <li className="flex min-w-0 items-start gap-3 text-sm leading-5 text-ink-800 sm:text-base sm:leading-6" key={item}>
                <Icon className="mt-0.5 shrink-0 text-gold-600" name="check" size={18} />
                <span className="min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-center text-center">
          <ButtonLink external href={FACEBOOK_CTA.href} icon="message">
            Ask About This Grazing Table
          </ButtonLink>
          <p className="mt-3 text-sm text-ink-700">Let&apos;s create a memorable experience for your event.</p>
        </div>
      </Container>
    </section>
  );
}
