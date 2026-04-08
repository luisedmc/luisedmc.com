import { useId } from 'react';
import { useTheme } from './hooks';
import { themeIcons, THEMES } from './themes';

export const ThemeSelector = () => {
  const { theme, switchTheme } = useTheme();
  const maskId = useId().replace(/:/g, '');
  const nextTheme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];

  return (
    <button
      type="button"
      onClick={switchTheme}
      aria-label={`Current theme: ${themeIcons[theme]}. Click to switch to ${themeIcons[nextTheme]}.`}
      data-theme-state={theme}
      className="theme-selector inline-flex items-center gap-0.5 rounded-sm px-0.5 leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fg-muted"
    >
      <span aria-hidden="true">[</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="theme-selector__icon size-[1.05rem] overflow-visible fill-current stroke-current cursor-pointer"
      >
        <mask id={maskId}>
          <rect width="100%" height="100%" fill="white" />
          <circle className="theme-selector__mask" cx="17" cy="8" r="5" fill="black" />
        </mask>

        <circle
          className="theme-selector__core"
          cx="12"
          cy="12"
          r="6"
          mask={`url(#${maskId})`}
        />

        <circle
          className="theme-selector__orbit"
          cx="12"
          cy="12"
          r="8"
          fill="none"
          strokeWidth="1.5"
          strokeDasharray="16 31"
          strokeLinecap="round"
        />

        <g className="theme-selector__beams" strokeWidth="1.75" strokeLinecap="round">
          <line x1="12" y1="1.5" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22.5" />
          <line x1="4.22" y1="4.22" x2="6" y2="6" />
          <line x1="18" y1="18" x2="19.78" y2="19.78" />
          <line x1="1.5" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22.5" y2="12" />
          <line x1="4.22" y1="19.78" x2="6" y2="18" />
          <line x1="18" y1="6" x2="19.78" y2="4.22" />
        </g>
      </svg>
      <span aria-hidden="true">]</span>
    </button>
  );
};
