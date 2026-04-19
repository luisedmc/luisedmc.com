import { Suspense } from 'react';
import { Outlet } from 'react-router';
import LoadingLoopIcon from '~icons/line-md/loading-loop';
import { Container } from '@/components/ui/Container';
import { Footer } from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Navbar';
import { Providers } from './providers';

export const App = () => {
  return (
    <Providers>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense
            fallback={
              <Container>
                <div
                  aria-label="Loading"
                  className="flex justify-center py-8"
                  role="status"
                >
                  <LoadingLoopIcon aria-hidden="true" className="size-4 shrink-0" />
                </div>
              </Container>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Providers>
  );
};
