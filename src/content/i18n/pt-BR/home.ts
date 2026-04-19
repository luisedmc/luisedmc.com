import type { HomeDictionary } from '@/features/i18n/types';

export const dictionary = {
  hero: {
    title: 'la vamos nos de novo www.[redacted].run v3',
    subtitle: '',
  },
  main: {
    body: 'ola do body da pagina',
  },
} as const satisfies HomeDictionary;
