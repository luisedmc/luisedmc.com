import type { Locale } from './types';

type LocaleListener = () => void;

export const LOCALE_STORAGE_KEY = 'locale';
export const DEFAULT_LOCALE: Locale = 'en-US';
export const LOCALES = ['en-US', 'pt-BR'] as const satisfies readonly Locale[];

const NEXT_LOCALE: Record<Locale, Locale> = {
  'en-US': 'pt-BR',
  'pt-BR': 'en-US',
};

const listeners = new Set<LocaleListener>();

export const normalizeLocale = (value: string | null | undefined): Locale | null => {
  switch (value?.toLowerCase()) {
    case 'en-us':
      return 'en-US';
    case 'pt-br':
      return 'pt-BR';
    default:
      return null;
  }
};

const readDocumentLocale = (): Locale | null => {
  if (typeof document === 'undefined') {
    return null;
  }

  return normalizeLocale(document.documentElement.lang);
};

const readStoredLocale = (): Locale | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
  } catch {
    return null;
  }
};

const resolveInitialLocale = (): Locale => {
  return readDocumentLocale() ?? readStoredLocale() ?? DEFAULT_LOCALE;
};

const persistLocale = (locale: Locale): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // localStorage unavailable
  }
};

let currentLocale: Locale = resolveInitialLocale();

export const getSnapshot = (): Locale => currentLocale;

export const getServerSnapshot = (): Locale => DEFAULT_LOCALE;

export const subscribe = (listener: LocaleListener): (() => void) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const setLocale = (locale: Locale): void => {
  if (locale === currentLocale) {
    return;
  }

  currentLocale = locale;
  persistLocale(locale);

  for (const listener of listeners) {
    listener();
  }
};

export const switchLocale = (): void => {
  setLocale(NEXT_LOCALE[currentLocale]);
};
