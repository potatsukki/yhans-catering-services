import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Icon, type IconName } from './Icon';
import { ExternalLink, isNewTabHref } from './ExternalLink';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> & {
  readonly href: string;
  readonly children: ReactNode;
  readonly external?: boolean;
  readonly variant?: ButtonVariant;
  readonly icon?: IconName;
  readonly fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-burgundy-900 !text-cream-50 shadow-sm hover:bg-burgundy-800',
  secondary: 'bg-gold-500 !text-burgundy-950 shadow-sm hover:bg-gold-400',
  tertiary: 'border border-burgundy-800 bg-cream-50 !text-burgundy-900 hover:bg-cream-100',
};

function buttonLinkClassName(variant: ButtonVariant, fullWidth: boolean, className = '') {
  return `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-center font-body text-sm font-semibold leading-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40 ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;
}

export function ButtonLink({
  href,
  children,
  external = false,
  variant = 'primary',
  icon = 'arrowRight',
  fullWidth = false,
  className = '',
  ...props
}: ButtonLinkProps) {
  const classes = buttonLinkClassName(variant, fullWidth, className);
  const content = (
    <>
      <span>{children}</span>
      {icon ? <Icon name={icon} size={18} /> : null}
    </>
  );

  if (external || isNewTabHref(href)) {
    return (
      <ExternalLink href={href} className={classes} {...props}>
        {content}
      </ExternalLink>
    );
  }

  return (
    <Link className={classes} to={href} {...props}>
      {content}
    </Link>
  );
}
