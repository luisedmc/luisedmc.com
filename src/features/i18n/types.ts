export type Locale = 'en-US' | 'pt-BR';
export type Namespace = 'home' | 'errors';

export interface HomeDictionary {
  hero: {
    title: string;
    subtitle: string;
  };
  main: {
    body: string;
  };
}

export interface ErrorsDictionary {
  notFound: {
    title: string;
    subtitle: string;
    body: string;
    statusLabel: string;
  };
  route: {
    title: string;
    subtitle: string;
    statusLabelPrefix: string;
  };
  application: {
    title: string;
    subtitle: string;
    statusLabel: string;
  };
}

export interface DictionaryByNamespace {
  home: HomeDictionary;
  errors: ErrorsDictionary;
}

export type DictionaryFor<N extends Namespace> = DictionaryByNamespace[N];
