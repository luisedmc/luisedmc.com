import {
  type FeatureOption,
  FeatureOptionGroup,
} from '@/components/ui/FeatureOptionGroup';
import { useLocale } from './hooks';
import { setLocale } from './store';
import type { Locale } from './types';

const localeOptions = [
  {
    value: 'en-US',
    label: 'En',
    ariaLabel: 'Set language to English (United States)',
  },
  {
    value: 'pt-BR',
    label: 'Pt',
    ariaLabel: 'Set language to Portuguese (Brazil)',
  },
] as const satisfies readonly FeatureOption<Locale>[];

export const LocaleSelector = () => {
  const locale = useLocale();

  return (
    <FeatureOptionGroup
      ariaLabel="Language options"
      className="locale-selector"
      onChange={setLocale}
      options={localeOptions}
      value={locale}
    />
  );
};
