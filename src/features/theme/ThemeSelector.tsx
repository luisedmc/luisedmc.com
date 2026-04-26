import MoonAltLoopIcon from '~icons/line-md/moon-alt-loop';
import SunnyOutlineLoopIcon from '~icons/line-md/sunny-outline-loop';
import { useTheme } from './hooks';

const themeLabels = {
  light: 'Switch to light theme',
  dark: 'Switch to dark theme',
} as const;

export const ThemeSelector = () => {
  const { theme, switchTheme } = useTheme();
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const Icon = theme === 'dark' ? MoonAltLoopIcon : SunnyOutlineLoopIcon;

  return (
    <button
      type="button"
      onClick={switchTheme}
      aria-label={themeLabels[nextTheme]}
      className="theme-selector inline-flex cursor-pointer items-center gap-1 rounded-sm px-0.5 leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fg-muted"
    >
      {/* <span aria-hidden="true">[</span> */}
      <Icon aria-hidden="true" className="theme-selector__icon size-6 shrink-0" />
      {/* <span aria-hidden="true">]</span> */}
    </button>
  );
};
