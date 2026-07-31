import { useId, useState, type ReactNode } from 'react';

import { Icon } from './Icon';

export type AccordionProps = {
  readonly title: ReactNode;
  readonly children: ReactNode;
  readonly defaultOpen?: boolean;
  readonly className?: string;
};

export function Accordion({ title, children, defaultOpen = false, className = '' }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={`rounded-2xl border border-cream-300 bg-cream-50 ${className}`}>
      <h3>
        <button
          aria-controls={panelId}
          aria-expanded={open}
          className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-burgundy-900"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          <span>{title}</span>
          <Icon name={open ? 'chevronDown' : 'chevronRight'} size={20} />
        </button>
      </h3>
      <div className={open ? 'border-t border-cream-300 px-5 py-4 text-sm leading-6 text-ink-700' : 'hidden'} id={panelId}>
        {children}
      </div>
    </div>
  );
}

