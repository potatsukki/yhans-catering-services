import { createBrowserRouter } from 'react-router-dom';

import { SiteLayout } from '../components/layout/SiteLayout';
import { AboutContactPage } from '../pages/AboutContactPage';
import { EventsPage } from '../pages/EventsPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PackagesPage } from '../pages/PackagesPage';

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/packages',
        element: <PackagesPage />,
      },
      {
        path: '/about-contact',
        element: <AboutContactPage />,
      },
      {
        path: '/events',
        element: <EventsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
