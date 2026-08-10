import { useEffect, useRef, useState, type ImgHTMLAttributes, type SyntheticEvent } from 'react';

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
  onLoad,
  onError,
  ...props
}: ResponsiveImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const source = asset?.src ?? src ?? fallbackSrc;
  const sourceAlt = hasError ? fallbackAlt : asset?.alt ?? alt ?? '';
  const sourceWidth = asset?.width ?? width;
  const sourceHeight = asset?.height ?? height;

  useEffect(() => {
    setHasError(false);
    const image = imageRef.current;
    setIsLoaded(Boolean(image?.complete && image.naturalWidth > 0));
  }, [source]);

  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);
    }
    onError?.(event);
  };

  return (
    <span className={`relative block h-full w-full overflow-hidden ${!isLoaded ? 'image-skeleton' : ''}`}>
      <img
        {...props}
        ref={imageRef}
        alt={sourceAlt}
        aria-busy={isLoaded ? undefined : true}
        className={`h-auto w-full transition-opacity duration-200 ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        decoding="async"
        fetchPriority={eager ? 'high' : 'auto'}
        height={sourceHeight}
        loading={eager ? 'eager' : 'lazy'}
        onError={handleError}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        src={hasError ? fallbackSrc : source}
        width={sourceWidth}
      />
    </span>
  );
}
