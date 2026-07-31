import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { GALLERY } from '../../data/gallery';
import { ResponsiveImage } from './ResponsiveImage';

describe('ResponsiveImage', () => {
  it('uses eager loading for an explicitly eager image and preserves geometry', () => {
    render(<ResponsiveImage asset={GALLERY.buffetHero} eager />);

    const image = screen.getByRole('img', { name: GALLERY.buffetHero.alt });
    expect(image).toHaveAttribute('loading', 'eager');
    expect(image).toHaveAttribute('width', String(GALLERY.buffetHero.width));
    expect(image).toHaveAttribute('height', String(GALLERY.buffetHero.height));
  });

  it('switches to the neutral fallback when an image fails', () => {
    render(<ResponsiveImage asset={GALLERY.buffetHero} />);

    const image = screen.getByRole('img', { name: GALLERY.buffetHero.alt });
    fireEvent.error(image);

    expect(screen.getByRole('img', { name: 'Image unavailable' })).toHaveAttribute('src', GALLERY.imageFallback.src);
  });

  it('accepts explicit source metadata and contain object-fit behavior', () => {
    render(
      <ResponsiveImage
        alt="Custom image"
        height={800}
        objectFit="contain"
        src="/custom-image.png"
        width={1200}
      />,
    );

    const image = screen.getByRole('img', { name: 'Custom image' });
    expect(image).toHaveAttribute('src', '/custom-image.png');
    expect(image).toHaveClass('object-contain');
    expect(image).toHaveAttribute('width', '1200');
    expect(image).toHaveAttribute('height', '800');
  });
});
