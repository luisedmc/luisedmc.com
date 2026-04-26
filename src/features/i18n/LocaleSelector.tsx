import LineMdMapMarkerAltLoop from '~icons/line-md/map-marker-alt-loop';
import { Tooltip } from '@/components/ui/Tooltip';
import { useLocale } from './hooks';
import { switchLocale } from './store';
import type { Locale } from './types';

const nextLocale: Record<Locale, Locale> = {
  'en-US': 'pt-BR',
  'pt-BR': 'en-US',
};

const localeLabels: Record<Locale, string> = {
  'en-US': 'Switch language to English (United States)',
  'pt-BR': 'Switch language to Portuguese (Brazil)',
};

export const LocaleSelector = () => {
  const locale = useLocale();
  const upcomingLocale = nextLocale[locale];

  return (
    <button
      type="button"
      onClick={switchLocale}
      aria-label={localeLabels[upcomingLocale]}
      className="locale-selector inline-flex cursor-pointer items-center gap-1 rounded-sm px-0.5 leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fg-muted"
    >
      <Tooltip
        Icon={<LineMdMapMarkerAltLoop />}
        tooltipContent={localeLabels[upcomingLocale]}
        className="locale-selector__icon size-6 shrink-0"
        orientation="bottom"
      />
    </button>
  );
};
