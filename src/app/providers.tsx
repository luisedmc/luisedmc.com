import type { ReactNode } from 'react';
import { ThemeProvider } from '@/features/theme/provider';

interface IProviders {
  children: ReactNode;
}

export const Providers = ({ children }: IProviders) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
