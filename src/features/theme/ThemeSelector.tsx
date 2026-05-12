import {
  type FeatureOption,
  FeatureOptionGroup,
} from '@/components/ui/FeatureOptionGroup';
import { useTheme } from './hooks';
import type { Theme } from './interfaces';

const themeOptions = [
  {
    value: 'light',
    label: 'Light',
    ariaLabel: 'Set theme to light',
  },
  {
    value: 'dark',
    label: 'Dark',
    ariaLabel: 'Set theme to dark',
  },
] as const satisfies readonly FeatureOption<Theme>[];

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <FeatureOptionGroup
      ariaLabel="Theme options"
      className="theme-selector"
      onChange={setTheme}
      options={themeOptions}
      value={theme}
    />
  );
};
