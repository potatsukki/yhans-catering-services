import { NavLink } from 'react-router-dom';

import { BUSINESS } from '../../data/business';
import { GALLERY } from '../../data/gallery';
import { NAVIGATION_ITEMS, PRIMARY_CTA } from '../../data/navigation';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { MobileNavigation } from './MobileNavigation';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-cream-300/80 bg-cream-50/95 backdrop-blur" data-site-header>
      <Container className="flex min-h-[76px] items-center justify-between gap-6 py-3">
        <NavLink aria-label={`${BUSINESS.name} home`} className="block w-[180px] shrink-0 sm:w-[220px]" end to="/">
          <ResponsiveImage
            alt={GALLERY.logo.alt}
            eager
            height={GALLERY.logo.height}
            objectFit="contain"
            src={GALLERY.logo.src}
            width={GALLERY.logo.width}
          />
        </NavLink>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-7">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  className={({ isActive }) =>
                    `relative flex min-h-11 items-center px-1 font-body text-sm font-semibold transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:bg-burgundy-800 after:transition-all ${isActive ? 'text-burgundy-900 after:w-full' : 'text-ink-700 hover:text-burgundy-900 after:w-0 hover:after:w-full'}`
                  }
                  end={item.href === '/'}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ButtonLink external href={PRIMARY_CTA.href}>
            {PRIMARY_CTA.label}
          </ButtonLink>
        </nav>

        <MobileNavigation />
      </Container>
    </header>
  );
}
