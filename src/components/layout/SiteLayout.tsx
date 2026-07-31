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
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
    if (sections.length === 0) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-revealed'));
      return undefined;
    }

    sections.forEach((section, index) => {
      section.classList.add('scroll-reveal');
      section.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));
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
