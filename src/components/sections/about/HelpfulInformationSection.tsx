import { HELPFUL_INFORMATION } from '../../../data/booking';
import { Container } from '../../ui/Container';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon, type IconName } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';

const HELPFUL_ICON_BY_ID: Record<string, IconName> = {
  'direct-inquiries': 'message',
  'custom-quotations': 'badge',
  'add-ons-partners': 'sparkle',
  'corporate-orders': 'building',
};

export function HelpfulInformationSection() {
  return (
    <section aria-labelledby="helpful-information-title" className="bg-cream-100 py-11 sm:py-12 lg:py-14" id="helpful-information">
      <Container>
        <SectionHeading id="helpful-information-title" title="Helpful Information" />
        <DecorativeDivider className="mt-4" />
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {HELPFUL_INFORMATION.map((item) => (
            <article className="rounded-xl border border-cream-300 bg-cream-50 p-4 shadow-sm" key={item.id}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-200 text-burgundy-800">
                <Icon name={HELPFUL_ICON_BY_ID[item.id] ?? 'sparkle'} size={26} />
              </span>
              <h3 className="mt-3 font-display text-xl font-bold leading-tight text-burgundy-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-5 text-ink-700">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
