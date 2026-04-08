export type Theme = 'light' | 'dark';

export interface IThemeContext {
  readonly theme: Theme;
  readonly setTheme: (theme: Theme) => void;
  readonly switchTheme: () => void;
}
