import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { ZoomableImage } from './ZoomableImage';

const testImage = {
  src: '/test-food.webp',
  alt: 'A prepared catering dish',
  width: 1200,
  height: 900,
};

describe('ZoomableImage', () => {
  it('opens a minimal accessible viewer and closes with Escape', async () => {
    const user = userEvent.setup();
    render(<ZoomableImage asset={testImage} />);

    const trigger = screen.getByRole('button', { name: `Open larger image of ${testImage.alt}` });
    await user.click(trigger);

    const viewer = screen.getByRole('dialog', { name: `${testImage.alt} image viewer` });
    expect(viewer).toBeInTheDocument();
    expect(within(viewer).getByRole('img', { name: testImage.alt })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close image viewer' })).toBeInTheDocument();
    expect(screen.queryByText('Image preview')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Zoom in' })).not.toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes from its close button', async () => {
    const user = userEvent.setup();
    render(<ZoomableImage asset={testImage} />);

    await user.click(screen.getByRole('button', { name: `Open larger image of ${testImage.alt}` }));
    await user.click(screen.getByRole('button', { name: 'Close image viewer' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
