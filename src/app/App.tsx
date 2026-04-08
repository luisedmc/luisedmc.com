import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '@/components/ui/Navbar';
import { Providers } from './providers';

export const App = () => {
  return (
    <Providers>
      <Navbar />
      <Suspense fallback={<>loading...</>}>
        <Outlet />
      </Suspense>
    </Providers>
  );
};
