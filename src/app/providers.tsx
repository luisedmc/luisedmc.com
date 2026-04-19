import type { ReactNode } from 'react';
import { AlignmentProvider } from '@/features/alignment/provider';
import { I18nProvider } from '@/features/i18n/provider';
import { ThemeProvider } from '@/features/theme/provider';

interface IProviders {
  children: ReactNode;
}

export const Providers = ({ children }: IProviders) => {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AlignmentProvider>{children}</AlignmentProvider>
      </ThemeProvider>
    </I18nProvider>
  );
};
