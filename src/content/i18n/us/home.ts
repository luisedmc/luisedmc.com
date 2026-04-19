import type { HomeDictionary } from '@/features/i18n/types';

export const dictionary = {
  hero: {
    title: 'oh shit here we go again www.[redacted].run v3',
    subtitle: '',
  },
  main: {
    body: 'hello from body',
  },
} as const satisfies HomeDictionary;
