import MoonAltLoopIcon from '~icons/line-md/moon-alt-loop';
import SunnyOutlineLoopIcon from '~icons/line-md/sunny-outline-loop';
import { useTheme } from './hooks';

export const ThemeSelector = () => {
  const { theme, switchTheme } = useTheme();
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const Icon = theme === 'dark' ? MoonAltLoopIcon : SunnyOutlineLoopIcon;

  return (
    <button
      type="button"
      onClick={switchTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      className="theme-selector inline-flex items-center gap-0.5 rounded-sm px-0.5 leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fg-muted"
    >
      <span aria-hidden="true">[</span>
      <Icon aria-hidden="true" className="theme-selector__icon size-[1.2rem] shrink-0" />
      <span aria-hidden="true">]</span>
    </button>
  );
};
