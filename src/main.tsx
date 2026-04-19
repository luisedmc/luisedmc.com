import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { preloadDictionaries } from '@/features/i18n/loader';
import { getSnapshot } from '@/features/i18n/store';
import type { Namespace } from '@/features/i18n/types';
import { reportWebVitals } from '@/lib/web-vitals';
import { router } from './app/router';
import './index.css';

const initialLocale = getSnapshot();
const initialNamespaces: readonly Namespace[] =
  window.location.pathname === '/' ? ['home'] : ['errors'];

await preloadDictionaries(initialLocale, initialNamespaces);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

reportWebVitals(console.log);
