import type { ReactNode } from 'react';

export type CtaBandProps = {
  readonly title: ReactNode;
  readonly description?: ReactNode;
  readonly actions: ReactNode;
  readonly className?: string;
};

export function CtaBand({ title, description, actions, className = '' }: CtaBandProps) {
  return (
    <section className={`overflow-hidden bg-burgundy-900 text-cream-50 ${className}`}>
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-4 py-8 sm:px-5 md:flex-row md:items-center md:justify-between md:px-8 md:py-10 lg:px-10 xl:px-12">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          {description ? <p className="mt-2 text-sm leading-6 text-cream-100 sm:text-base">{description}</p> : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">{actions}</div>
      </div>
    </section>
  );
}

