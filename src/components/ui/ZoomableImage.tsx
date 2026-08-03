import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from 'react';
import { createPortal } from 'react-dom';

import type { ImageAsset } from '../../types/content';
import { Icon } from './Icon';
import { ResponsiveImage } from './ResponsiveImage';

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const SCALE_STEP = 0.5;

type Point = { readonly x: number; readonly y: number };
type Transform = { readonly scale: number; readonly x: number; readonly y: number };

function clampScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

function transformAtScale(current: Transform, nextScale: number): Transform {
  const scale = clampScale(nextScale);
  return scale === MIN_SCALE ? { scale, x: 0, y: 0 } : { ...current, scale };
}

function pointerDistance(points: readonly Point[]) {
  return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
}

type ImageLightboxProps = {
  readonly asset: ImageAsset;
  readonly onClose: () => void;
};

export function ImageLightbox({ asset, onClose }: ImageLightboxProps) {
  const [transform, setTransform] = useState<Transform>({ scale: 1, x: 0, y: 0 });
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const pointersRef = useRef(new Map<number, Point>());
  const pinchRef = useRef<{ distance: number; scale: number } | null>(null);
  const lastPanPointRef = useRef<Point | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === '+' || event.key === '=') {
        event.preventDefault();
        setTransform((current) => transformAtScale(current, current.scale + SCALE_STEP));
        return;
      }

      if (event.key === '-') {
        event.preventDefault();
        setTransform((current) => transformAtScale(current, current.scale - SCALE_STEP));
        return;
      }

      if (event.key === '0') {
        event.preventDefault();
        setTransform({ scale: 1, x: 0, y: 0 });
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)');
        if (!focusableElements?.length) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const setScale = (nextScale: number) => {
    setTransform((current) => transformAtScale(current, nextScale));
  };

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    setScale(transform.scale + (event.deltaY < 0 ? SCALE_STEP : -SCALE_STEP));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture?.(event.pointerId);
    const point = { x: event.clientX, y: event.clientY };
    pointersRef.current.set(event.pointerId, point);
    lastPanPointRef.current = point;

    const points = [...pointersRef.current.values()];
    if (points.length === 2) {
      pinchRef.current = { distance: pointerDistance(points), scale: transform.scale };
    }
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointersRef.current.has(event.pointerId)) {
      return;
    }

    const nextPoint = { x: event.clientX, y: event.clientY };
    pointersRef.current.set(event.pointerId, nextPoint);
    const points = [...pointersRef.current.values()];

    if (points.length === 2 && pinchRef.current) {
      const nextScale = clampScale(
        pinchRef.current.scale * (pointerDistance(points) / pinchRef.current.distance),
      );
      setTransform((current) => nextScale === MIN_SCALE
        ? { scale: nextScale, x: 0, y: 0 }
        : { ...current, scale: nextScale });
      return;
    }

    if (points.length === 1 && transform.scale > MIN_SCALE && lastPanPointRef.current) {
      const previousPoint = lastPanPointRef.current;
      setTransform((current) => ({
        ...current,
        x: current.x + nextPoint.x - previousPoint.x,
        y: current.y + nextPoint.y - previousPoint.y,
      }));
      lastPanPointRef.current = nextPoint;
    }
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(event.pointerId);
    pinchRef.current = null;
    lastPanPointRef.current = [...pointersRef.current.values()][0] ?? null;
  };

  return createPortal(
    <div
      aria-label={`${asset.alt} image viewer`}
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-2 backdrop-blur-md sm:p-5"
      data-testid="image-lightbox"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      ref={dialogRef}
    >
      <div
        className="relative flex max-h-[calc(100dvh-1rem)] w-full max-w-6xl touch-none select-none items-center justify-center overflow-hidden sm:max-h-[calc(100dvh-2.5rem)]"
        onDoubleClick={() => setScale(transform.scale === MIN_SCALE ? 2 : MIN_SCALE)}
        onPointerCancel={handlePointerEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onWheel={handleWheel}
      >
        <button
          aria-label="Close image viewer"
          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/75 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 sm:right-4 sm:top-4"
          onClick={onClose}
          onPointerDown={(event) => event.stopPropagation()}
          ref={closeButtonRef}
          type="button"
        >
          <Icon name="close" size={23} />
        </button>
        <div
          className="flex max-h-full max-w-full items-center justify-center overflow-hidden rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] will-change-transform sm:rounded-2xl"
          style={{ transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})` }}
        >
          <ResponsiveImage
            asset={asset}
            className="max-h-[calc(100dvh-1rem)] max-w-full select-none sm:max-h-[calc(100dvh-2.5rem)]"
            draggable={false}
            eager
            objectFit="contain"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}

type ZoomableImageProps = {
  readonly asset: ImageAsset;
  readonly className?: string;
};

export function ZoomableImage({ asset, className = '' }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeViewer = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <>
      <button
        aria-label={`Open larger image of ${asset.alt}`}
        className="relative block h-full w-full cursor-zoom-in focus-visible:z-10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-focus/60"
        onClick={() => setIsOpen(true)}
        ref={triggerRef}
        type="button"
      >
        <ResponsiveImage asset={asset} className={className} />
      </button>
      {isOpen ? <ImageLightbox asset={asset} onClose={closeViewer} /> : null}
    </>
  );
}
