import { useState, type ImgHTMLAttributes, type SyntheticEvent } from 'react';

import { GALLERY } from '../../data/gallery';
import type { ImageAsset } from '../../types/content';

export type ResponsiveImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt' | 'width' | 'height' | 'loading' | 'onError'
> & {
  readonly asset?: ImageAsset;
  readonly src?: string;
  readonly alt?: string;
  readonly width?: number;
  readonly height?: number;
  readonly eager?: boolean;
  readonly fallbackSrc?: string;
  readonly fallbackAlt?: string;
  readonly objectFit?: 'cover' | 'contain';
  readonly onError?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
};

export function ResponsiveImage({
  asset,
  src,
  alt,
  width,
  height,
  eager = false,
  fallbackSrc = GALLERY.imageFallback.src,
  fallbackAlt = 'Image unavailable',
  objectFit = 'cover',
  className = '',
  onError,
  ...props
}: ResponsiveImageProps) {
  const [hasError, setHasError] = useState(false);
  const source = asset?.src ?? src ?? fallbackSrc;
  const sourceAlt = hasError ? fallbackAlt : asset?.alt ?? alt ?? '';
  const sourceWidth = asset?.width ?? width;
  const sourceHeight = asset?.height ?? height;

  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);
    }
    onError?.(event);
  };

  return (
    <img
      {...props}
      alt={sourceAlt}
      aria-busy={hasError ? undefined : false}
      className={`h-auto w-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} ${className}`}
      decoding="async"
      fetchPriority={eager ? 'high' : 'auto'}
      height={sourceHeight}
      loading={eager ? 'eager' : 'lazy'}
      onError={handleError}
      src={hasError ? fallbackSrc : source}
      width={sourceWidth}
    />
  );
}

