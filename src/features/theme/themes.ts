import type { Theme } from './interfaces';

export const THEME_STORAGE_KEY = 'theme' as const;

export const DEFAULT_THEME: Theme = 'dark';

export const THEMES: readonly Theme[] = ['light', 'dark'] as const;

export const themeIcons: Record<Theme, string> = {
  light: 'light',
  dark: 'dark',
};
