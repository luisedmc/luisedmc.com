import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '@/components/ui/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<>loading...</>}>
        <Outlet />
      </Suspense>
    </>
  );
};
