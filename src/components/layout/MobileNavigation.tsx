import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { NAVIGATION_ITEMS, PRIMARY_CTA } from '../../data/navigation';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ButtonLink } from '../ui/ButtonLink';
import { Icon } from '../ui/Icon';

export type MobileNavigationProps = {
  readonly className?: string;
};

export function MobileNavigation({ className = '' }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    firstLinkRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [closeMenu, isOpen]);

  return (
    <div className={`relative lg:hidden ${className}`}>
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-cream-300 bg-cream-50 text-burgundy-900 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/40"
        onClick={() => setIsOpen((current) => !current)}
        ref={menuButtonRef}
        type="button"
      >
        <Icon name={isOpen ? 'close' : 'menu'} size={24} />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 top-[76px] z-40 bg-ink-900/35" data-mobile-nav-backdrop data-testid="mobile-nav-backdrop">
          <div
            aria-label="Mobile navigation"
            className={`absolute left-0 right-0 top-0 border-t border-cream-300 bg-cream-50 px-4 pb-6 pt-4 shadow-xl ${reducedMotion ? '' : 'animate-[slideDown_180ms_ease-out]'}`}
            id="mobile-navigation"
            aria-modal="true"
            ref={panelRef}
            role="dialog"
          >
            <nav aria-label="Mobile primary navigation">
              <ul className="grid gap-1">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <li key={item.href}>
                    <NavLink
                      className={({ isActive }) =>
                        `flex min-h-12 items-center rounded-xl px-4 font-body text-base font-semibold transition-colors ${isActive ? 'bg-cream-200 text-burgundy-900' : 'text-ink-700 hover:bg-cream-100 hover:text-burgundy-900'}`
                      }
                      end={item.href === '/'}
                      onClick={closeMenu}
                      ref={index === 0 ? firstLinkRef : undefined}
                      to={item.href}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ButtonLink className="mt-4" external fullWidth href={PRIMARY_CTA.href}>
              {PRIMARY_CTA.label}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
