import type { GrazingPackage, ImageAsset, RegularPackage } from '../../types/content';
import { Badge } from './Badge';
import { Icon } from './Icon';
import { Price } from './Price';
import { ResponsiveImage } from './ResponsiveImage';

export type PackageCardProps = {
  readonly packageData: RegularPackage | GrazingPackage;
  readonly image?: ImageAsset;
  readonly layout?: 'split' | 'stacked';
  readonly showBestSellerBadge?: boolean;
  readonly className?: string;
};

export function PackageCard({ packageData, image, layout = 'split', showBestSellerBadge = true, className = '' }: PackageCardProps) {
  const isRegularPackage = 'pricePhp' in packageData;
  const bestSellerDish = showBestSellerBadge && !isRegularPackage && packageData.isBestSeller ? packageData.bestSellerDish : undefined;

  return (
    <article className={`overflow-hidden rounded-xl border border-cream-300 bg-cream-50 shadow-[0_4px_16px_rgba(74,7,17,0.07)] ${layout === 'split' ? 'lg:grid lg:grid-cols-[0.78fr_1.22fr]' : ''} ${className}`}>
      {image ? (
        <div className={`overflow-hidden bg-cream-200 [&_img]:h-full ${layout === 'split' ? 'aspect-[16/10] lg:aspect-auto lg:min-h-full' : 'aspect-[16/7] sm:aspect-[16/8] xl:aspect-[16/7]'}`}>
          <ResponsiveImage asset={image} className="h-full" />
        </div>
      ) : null}
      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-burgundy-900 sm:text-2xl lg:text-xl">{packageData.name}</h3>
        </div>
        {isRegularPackage ? (
          <div className="flex flex-col gap-1">
            <Price amount={packageData.pricePhp} />
            <p className="text-sm font-semibold text-ink-700">Good for {packageData.guestCapacity} guests</p>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <Price amount={packageData.pricePerGuestPhp} suffix="per guest" />
            <p className="text-sm font-semibold text-ink-700">Minimum {packageData.minimumGuests} guests</p>
          </div>
        )}
        <ul className="grid gap-1.5 text-sm leading-5 text-ink-700">
          {packageData.dishes.map((dish) => (
            <li className="flex items-start gap-2" key={dish}>
              <Icon className="mt-1 shrink-0 text-gold-600" name="check" size={16} />
              <span className="flex min-w-0 flex-wrap items-center gap-2">
                <span>{dish}</span>
                {bestSellerDish === dish ? <Badge tone="gold">Best seller</Badge> : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
