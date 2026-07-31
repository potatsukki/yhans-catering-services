import { Outlet, useLocation } from 'react-router-dom';

import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';
import { SkipLink } from './SkipLink';

export function SiteLayout() {
  const { pathname } = useLocation();
  useDocumentMeta(pathname);

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
