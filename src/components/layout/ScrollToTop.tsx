import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { hash, key, pathname } = useLocation();

  useEffect(() => {
    if (typeof window.scrollTo !== 'function') return undefined;

    const frame = window.requestAnimationFrame(() => {
      const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (!target) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        return;
      }

      const headerHeight = document.querySelector<HTMLElement>('[data-site-header]')?.getBoundingClientRect().height ?? 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
      window.scrollTo({ top: Math.max(0, targetTop), left: 0, behavior: 'auto' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, key, pathname]);

  return null;
}
