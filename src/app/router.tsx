import { createBrowserRouter } from 'react-router';
import { App } from '@/app/App';
import { routes } from '@/app/routes';
import { ErrorBoundary, NotFound } from '@/pages/404';
import { Home } from '@/pages/home';

export const router = createBrowserRouter([
  {
    path: routes.home,
    Component: App,
    children: [
      {
        ErrorBoundary,
        children: [
          { index: true, Component: Home },
          { path: '*', Component: NotFound },
        ],
      },
    ],
  },
]);
