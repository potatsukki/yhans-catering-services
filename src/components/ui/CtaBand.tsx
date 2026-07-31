import type { ReactNode } from 'react';

export type CtaBandProps = {
  readonly title: ReactNode;
  readonly description?: ReactNode;
  readonly actions: ReactNode;
  readonly className?: string;
};

export function CtaBand({ title, description, actions, className = '' }: CtaBandProps) {
  return (
    <section className={`overflow-hidden border-y border-gold-500/30 bg-burgundy-900 text-cream-50 ${className}`}>
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-5 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-[2rem]">{title}</h2>
          {description ? <p className="mt-2 text-sm leading-6 text-cream-100 sm:text-base">{description}</p> : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">{actions}</div>
      </div>
    </section>
  );
}
