import type { GrazingPackage, ImageAsset, RegularPackage } from '../../types/content';
import { Badge } from './Badge';
import { Icon } from './Icon';
import { Price } from './Price';
import { ResponsiveImage } from './ResponsiveImage';

export type PackageCardProps = {
  readonly packageData: RegularPackage | GrazingPackage;
  readonly image?: ImageAsset;
  readonly className?: string;
};

export function PackageCard({ packageData, image, className = '' }: PackageCardProps) {
  const isRegularPackage = 'pricePhp' in packageData;
  const bestSellerDish = !isRegularPackage && packageData.isBestSeller ? packageData.bestSellerDish : undefined;

  return (
    <article className={`overflow-hidden rounded-2xl border border-cream-300 bg-cream-50 shadow-sm ${className}`}>
      {image ? (
        <div className="aspect-[4/3] overflow-hidden bg-cream-200">
          <ResponsiveImage asset={image} />
        </div>
      ) : null}
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-bold text-burgundy-900">{packageData.name}</h3>
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
        <ul className="grid gap-2 text-sm leading-6 text-ink-700">
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
