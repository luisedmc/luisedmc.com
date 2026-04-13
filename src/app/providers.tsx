import type { ReactNode } from 'react';
import { AlignmentProvider } from '@/features/alignment/provider';
import { ThemeProvider } from '@/features/theme/provider';

interface IProviders {
  children: ReactNode;
}

export const Providers = ({ children }: IProviders) => {
  return (
    <ThemeProvider>
      <AlignmentProvider>{children}</AlignmentProvider>
    </ThemeProvider>
  );
};
