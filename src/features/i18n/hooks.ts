import { useEffect, useState, useSyncExternalStore } from 'react';
import { getCachedDictionary, loadDictionary } from './loader';
import { getServerSnapshot, getSnapshot, subscribe } from './store';
import type { DictionaryFor, Locale, Namespace } from './types';

interface IResolvedDictionaryState<N extends Namespace> {
  dictionary: DictionaryFor<N>;
  namespace: N;
}

export const useLocale = (): Locale => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export const useDictionary = <N extends Namespace>(namespace: N): DictionaryFor<N> => {
  const locale = useLocale();
  const cachedDictionary = getCachedDictionary(locale, namespace);
  const [resolvedDictionaryState, setResolvedDictionaryState] =
    useState<IResolvedDictionaryState<N> | null>(() => {
      if (cachedDictionary === null) {
        return null;
      }

      return { dictionary: cachedDictionary, namespace };
    });

  useEffect(() => {
    if (cachedDictionary) {
      return;
    }

    let isActive = true;

    void loadDictionary(locale, namespace).then(dictionary => {
      if (isActive) {
        setResolvedDictionaryState({ dictionary, namespace });
      }
    });

    return () => {
      isActive = false;
    };
  }, [cachedDictionary, locale, namespace]);

  if (cachedDictionary) {
    return cachedDictionary;
  }

  if (resolvedDictionaryState?.namespace === namespace) {
    return resolvedDictionaryState.dictionary;
  }

  throw loadDictionary(locale, namespace);
};
