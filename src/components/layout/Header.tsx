import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { BUSINESS } from '../../data/business';
import { GALLERY } from '../../data/gallery';
import { NAVIGATION_ITEMS, PRIMARY_CTA } from '../../data/navigation';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { MobileNavigation } from './MobileNavigation';

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (frame.current !== null) return;

      frame.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;

        if (currentScrollY <= 24 || delta < -8) {
          setIsHidden(false);
        } else if (currentScrollY > 120 && delta > 8) {
          setIsHidden(true);
        }

        lastScrollY.current = currentScrollY;
        frame.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transform-gpu border-b border-gold-200 bg-cream-50 shadow-[0_2px_14px_rgba(74,7,17,0.05)] transition-transform duration-300 ease-out will-change-transform ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
      data-scroll-state={isHidden ? 'hidden' : 'visible'}
      data-site-header
      onFocusCapture={() => setIsHidden(false)}
    >
      <Container className="flex min-h-[84px] items-center justify-between gap-6 py-2">
        <NavLink aria-label={`${BUSINESS.name} home`} className="block w-[190px] shrink-0 sm:w-[235px] lg:w-[255px]" end to="/">
          <ResponsiveImage
            alt={GALLERY.logo.alt}
            eager
            height={GALLERY.logo.height}
            objectFit="contain"
            src={GALLERY.logo.src}
            width={GALLERY.logo.width}
          />
        </NavLink>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  className={({ isActive }) =>
                    `relative flex min-h-11 items-center px-1 font-body text-[0.9375rem] font-semibold transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:bg-burgundy-800 after:transition-all ${isActive ? 'text-burgundy-900 after:w-full' : 'text-ink-700 hover:text-burgundy-900 after:w-0 hover:after:w-full'}`
                  }
                  end={item.href === '/'}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ButtonLink className="px-6" external href={PRIMARY_CTA.href}>
            {PRIMARY_CTA.label}
          </ButtonLink>
        </nav>

        <MobileNavigation />
      </Container>
    </header>
  );
}
