import { Badge } from './Badge';
import { Icon } from './Icon';

export const catalogCardWidth = [
  'w-[78vw] max-w-64',
  'max-[340px]:w-[82vw]',
  'sm:w-[calc((100%_-_2rem)/3)]',
  'sm:max-w-none',
  'md:w-[calc((100%_-_3rem)/4)]',
  'lg:w-[calc((100%_-_4rem)/5)]',
].join(' ');

export const catalogGridClass = 'horizontal-card-scroller mt-4 flex snap-x snap-mandatory items-stretch justify-start gap-3 overflow-x-auto pb-2 sm:gap-4 md:flex-wrap md:overflow-visible md:pb-0';
export const catalogCardClass = 'h-full overflow-hidden rounded-xl border border-gold-200 bg-cream-50 shadow-sm';
export const catalogMediaClass = 'relative aspect-[4/3] overflow-hidden border-b border-gold-200 bg-cream-200';
export const catalogCardBodyClass = 'flex h-20 items-center justify-center px-3 py-2 text-center';

type CatalogPlaceholderProps = {
  readonly alt: string;
  readonly testId?: string;
};

export function CatalogPlaceholder({ alt, testId }: CatalogPlaceholderProps) {
  return (
    <div
      aria-label={alt}
      className="flex h-full items-center justify-center bg-gradient-to-br from-cream-50 via-gold-100/70 to-gold-200/80"
      data-testid={testId}
      role="img"
    >
      <span
        aria-hidden="true"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-300 bg-cream-50/85 text-gold-600 shadow-sm"
      >
        <Icon name="utensils" size={23} />
      </span>
      <Badge className="absolute right-2 top-2 !min-h-0 !rounded-md !px-2 !py-1 !text-[0.5rem] !leading-none !tracking-[0.08em]" tone="neutral">
        Photo coming soon
      </Badge>
    </div>
  );
}
