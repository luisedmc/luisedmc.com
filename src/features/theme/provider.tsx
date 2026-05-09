import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext } from './context';
import type { Theme } from './interfaces';
import { DEFAULT_THEME, THEME_STORAGE_KEY, THEMES } from './themes';

const getInitialTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // localStorage unavailable
  }
  return DEFAULT_THEME;
};

const applyThemeToDOM = (theme: Theme): void => {
  const doc = document.documentElement;
  doc.classList.remove('dark', 'light');
  doc.classList.add(theme);
};

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const themeRef = useRef<Theme>(theme);

  useLayoutEffect(() => {
    applyThemeToDOM(themeRef.current);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    themeRef.current = next;
    applyThemeToDOM(next);
    setThemeState(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  }, []);

  const switchTheme = useCallback(() => {
    const idx = THEMES.indexOf(themeRef.current);
    const next = THEMES[(idx + 1) % THEMES.length];
    setTheme(next);
  }, [setTheme]);

  return <ThemeContext value={{ theme, setTheme, switchTheme }}>{children}</ThemeContext>;
};
