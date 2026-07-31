import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> & {
  readonly href: string;
  readonly children: ReactNode;
  readonly showNewTabHint?: boolean;
};

export function isNewTabHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function ExternalLink({
  href,
  children,
  className = '',
  showNewTabHint = true,
  ...props
}: ExternalLinkProps) {
  const opensNewTab = isNewTabHref(href);

  return (
    <a
      className={className}
      href={href}
      rel={opensNewTab ? 'noreferrer noopener' : undefined}
      target={opensNewTab ? '_blank' : undefined}
      {...props}
    >
      {children}
      {opensNewTab && showNewTabHint ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}

