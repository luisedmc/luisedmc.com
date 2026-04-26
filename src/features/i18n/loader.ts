import type { DictionaryByNamespace, DictionaryFor, Locale, Namespace } from './types';

type DictionaryLoaderMap = {
  [L in Locale]: {
    [N in Namespace]: () => Promise<DictionaryByNamespace[N]>;
  };
};

type CacheKey = `${Locale}:${Namespace}`;

const dictionaries = {
  'en-US': {
    home: () => import('@/content/i18n/us/home').then(module => module.dictionary),
    errors: () => import('@/content/i18n/us/errors').then(module => module.dictionary),
  },
  'pt-BR': {
    home: () => import('@/content/i18n/br/home').then(module => module.dictionary),
    errors: () => import('@/content/i18n/br/errors').then(module => module.dictionary),
  },
} as const satisfies DictionaryLoaderMap;

const resolvedCache = new Map<CacheKey, DictionaryByNamespace[Namespace]>();
const inflightCache = new Map<CacheKey, Promise<DictionaryByNamespace[Namespace]>>();

const getCacheKey = (locale: Locale, namespace: Namespace): CacheKey =>
  `${locale}:${namespace}`;

export const getCachedDictionary = <N extends Namespace>(
  locale: Locale,
  namespace: N,
): DictionaryFor<N> | null => {
  const cached = resolvedCache.get(getCacheKey(locale, namespace));
  return (cached ?? null) as DictionaryFor<N> | null;
};

export const loadDictionary = <N extends Namespace>(
  locale: Locale,
  namespace: N,
): Promise<DictionaryFor<N>> => {
  const cacheKey = getCacheKey(locale, namespace);
  const cachedDictionary = resolvedCache.get(cacheKey);

  if (cachedDictionary) {
    return Promise.resolve(cachedDictionary as DictionaryFor<N>);
  }

  const inflightDictionary = inflightCache.get(cacheKey);

  if (inflightDictionary) {
    return inflightDictionary as Promise<DictionaryFor<N>>;
  }

  const dictionaryPromise = dictionaries[locale][namespace]()
    .then(dictionary => {
      const resolvedDictionary = dictionary as DictionaryFor<N>;

      resolvedCache.set(cacheKey, resolvedDictionary);
      inflightCache.delete(cacheKey);
      return resolvedDictionary;
    })
    .catch((error: unknown) => {
      inflightCache.delete(cacheKey);
      throw error;
    });

  inflightCache.set(
    cacheKey,
    dictionaryPromise as Promise<DictionaryByNamespace[Namespace]>,
  );

  return dictionaryPromise;
};

export const preloadDictionaries = async (
  locale: Locale,
  namespaces: readonly Namespace[],
): Promise<void> => {
  await Promise.all(namespaces.map(namespace => loadDictionary(locale, namespace)));
};
