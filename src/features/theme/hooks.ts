import { use } from 'react';
import { ThemeContext } from './context';
import type { IThemeContext } from './interfaces';

export const useTheme = (): IThemeContext => {
  const ctx = use(ThemeContext);
  if (ctx === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};
