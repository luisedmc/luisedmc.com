/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { App } from '@/app/App';

const Home = lazy(() => import('@/pages/home').then(m => ({ default: m.Home })));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [{ index: true, Component: Home }],
  },
]);
