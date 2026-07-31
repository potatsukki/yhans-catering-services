import { BUSINESS, CONTACT_LINKS, EMAIL_ADDRESS, PHONE_NUMBERS } from '../../../data/business';
import { Container } from '../../ui/Container';
import { ContactCard } from '../../ui/ContactCard';
import { DecorativeDivider } from '../../ui/DecorativeDivider';
import { Icon, type IconName } from '../../ui/Icon';
import { SectionHeading } from '../../ui/SectionHeading';

type ContactInfoCardProps = {
  readonly icon: IconName;
  readonly title: string;
  readonly children: React.ReactNode;
};

function ContactInfoCard({ icon, title, children }: ContactInfoCardProps) {
  return (
    <article className="flex min-h-20 items-start gap-3 rounded-xl border border-cream-300 bg-cream-50 p-4 shadow-sm">
      <Icon className="mt-1 shrink-0 text-burgundy-800" name={icon} size={26} />
      <span className="flex min-w-0 flex-col gap-1">
        <h3 className="font-display text-xl font-bold text-burgundy-900">{title}</h3>
        <span className="break-words text-sm leading-6 text-ink-700">{children}</span>
      </span>
    </article>
  );
}

export function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="bg-cream-50 py-11 sm:py-12 lg:py-14" id="contact">
      <Container>
        <SectionHeading
          description={`${BUSINESS.owner} · ${BUSINESS.role}`}
          id="contact-title"
          title="Contact Us"
        />
        <DecorativeDivider className="mt-4" />
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <ContactCard contact={CONTACT_LINKS[2]} description={PHONE_NUMBERS[0]} title="Phone / Viber" />
          <ContactCard contact={CONTACT_LINKS[3]} description={PHONE_NUMBERS[1]} title="Phone / Viber 2" />
          <ContactCard contact={CONTACT_LINKS[1]} description={EMAIL_ADDRESS} title="Email" />
          <ContactCard contact={CONTACT_LINKS[0]} description={BUSINESS.facebookDisplayName} title="Facebook" />
          <ContactInfoCard icon="clock" title="Business Hours">
            {BUSINESS.hours}
          </ContactInfoCard>
          <ContactInfoCard icon="cash" title="Payment Methods">
            {BUSINESS.paymentMethods.join(' · ')}
          </ContactInfoCard>
        </div>
      </Container>
    </section>
  );
}
