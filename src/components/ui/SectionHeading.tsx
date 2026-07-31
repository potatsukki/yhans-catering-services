import type { ElementType, ReactNode } from 'react';

export type SectionHeadingProps = {
  readonly title: ReactNode;
  readonly eyebrow?: ReactNode;
  readonly description?: ReactNode;
  readonly align?: 'left' | 'center';
  readonly as?: ElementType;
  readonly id?: string;
  readonly className?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = 'center',
  as: Heading = 'h2',
  id,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col gap-2 ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-burgundy-700">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-3xl font-bold leading-tight text-burgundy-900 sm:text-4xl" id={id}>
        {title}
      </Heading>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-ink-700 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
