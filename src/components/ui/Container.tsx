import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type ContainerProps<T extends ElementType = 'div'> = {
  readonly as?: T;
  readonly children: ReactNode;
  readonly className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>;

export function Container<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  ...props
}: ContainerProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={`mx-auto w-full max-w-[1240px] px-4 sm:px-5 md:px-8 lg:px-10 xl:px-12 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

