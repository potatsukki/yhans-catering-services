import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';
import { SkipLink } from './SkipLink';

export function SiteLayout() {
  const { pathname } = useLocation();
  useDocumentMeta(pathname);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        'main > section, main article, [data-scroll-reveal]',
      ),
    );
    if (targets.length === 0) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return undefined;
    }

    targets.forEach((el) => {
      if (!el.classList.contains('scroll-reveal') && !el.classList.contains('is-revealed')) {
        el.classList.add('scroll-reveal');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;

          // Calculate stagger delay based on index relative to parent container
          const parent = target.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children).filter((c) =>
              c.classList.contains('scroll-reveal'),
            );
            const siblingIndex = siblings.indexOf(target);
            if (siblingIndex > 0) {
              target.style.setProperty('--reveal-delay', `${Math.min(siblingIndex * 100, 400)}ms`);
            }
          }

          target.classList.add('is-revealed');
          observer.unobserve(target);
        });
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.05 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900">
      <SkipLink />
      <Header />
      <ScrollToTop />
      <main className="min-h-[50vh]" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
