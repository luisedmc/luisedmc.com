import { dictionary as brErrorsDictionary } from '@/content/i18n/br/errors';
import { dictionary as brHomeDictionary } from '@/content/i18n/br/home';
import { dictionary as usErrorsDictionary } from '@/content/i18n/us/errors';
import { dictionary as usHomeDictionary } from '@/content/i18n/us/home';
import type { DictionaryByNamespace, DictionaryFor, Locale, Namespace } from './types';

type DictionaryMap = {
  [L in Locale]: {
    [N in Namespace]: DictionaryByNamespace[N];
  };
};

const dictionaries = {
  'en-US': {
    home: usHomeDictionary,
    errors: usErrorsDictionary,
  },
  'pt-BR': {
    home: brHomeDictionary,
    errors: brErrorsDictionary,
  },
} as const satisfies DictionaryMap;

export const getDictionary = <N extends Namespace>(
  locale: Locale,
  namespace: N,
): DictionaryFor<N> => {
  return dictionaries[locale][namespace] as DictionaryFor<N>;
};
