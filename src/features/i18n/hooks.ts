import { useSyncExternalStore } from 'react';
import { getDictionary } from './loader';
import { getServerSnapshot, getSnapshot, subscribe } from './store';
import type { DictionaryFor, Locale, Namespace } from './types';

export const useLocale = (): Locale => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export const useDictionary = <N extends Namespace>(namespace: N): DictionaryFor<N> => {
  const locale = useLocale();

  return getDictionary(locale, namespace);
};
