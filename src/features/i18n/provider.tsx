import { useLayoutEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocale } from './hooks';
import type { Locale } from './types';

interface II18nProvider {
  children: ReactNode;
}

const syncLocaleToDOM = (locale: Locale): void => {
  const root = document.documentElement;
  root.lang = locale;
  root.dir = 'ltr';
};

export const I18nProvider = ({ children }: II18nProvider) => {
  const locale = useLocale();

  useLayoutEffect(() => {
    syncLocaleToDOM(locale);
  }, [locale]);

  return <>{children}</>;
};
