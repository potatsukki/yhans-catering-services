import type { ContactLink } from '../../types/content';
import { ExternalLink } from './ExternalLink';
import { Icon, type IconName } from './Icon';

export type ContactCardProps = {
  readonly contact: ContactLink;
  readonly title?: string;
  readonly description?: string;
  readonly icon?: IconName;
  readonly className?: string;
};

const iconByKind: Record<ContactLink['kind'], IconName> = {
  email: 'email',
  facebook: 'facebook',
  phone: 'phone',
};

export function ContactCard({
  contact,
  title = contact.label,
  description,
  icon = iconByKind[contact.kind],
  className = '',
}: ContactCardProps) {
  const content = (
    <>
      <Icon className="shrink-0 text-burgundy-800" name={icon} size={26} />
      <span className="flex min-w-0 flex-col gap-1">
        <span className="font-display text-xl font-bold text-burgundy-900">{title}</span>
        {description ? <span className="break-words text-sm leading-6 text-ink-700">{description}</span> : null}
      </span>
    </>
  );

  return contact.external ? (
    <ExternalLink
      aria-label={`${title} (opens in a new tab)`}
      className={`flex min-h-20 items-center gap-4 rounded-2xl border border-cream-300 bg-cream-50 p-4 shadow-sm transition-colors hover:border-gold-500 ${className}`}
      href={contact.href}
    >
      {content}
    </ExternalLink>
  ) : (
    <a
      className={`flex min-h-20 items-center gap-4 rounded-2xl border border-cream-300 bg-cream-50 p-4 shadow-sm transition-colors hover:border-gold-500 ${className}`}
      href={contact.href}
    >
      {content}
    </a>
  );
}

