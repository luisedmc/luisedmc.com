export type Locale = 'en-US' | 'pt-BR';
export type Namespace = 'home' | 'errors';

export interface HomeDictionary {
  me: {
    title: string;
    items: readonly string[];
    games: {
      prefix: string;
      cs2Label: string;
      suffix: string;
    };
  };
  experience: {
    title: string;
    roles: {
      name: string;
      company: string;
      period: string;
      current: boolean;
    }[];
  };
  projects: {
    title: string;
    projects: {
      name: string;
      description: string;
      link: string;
    }[];
  };
  configs: {
    title: string;
    configurations: {
      name: string;
      description: string;
      link: string;
    }[];
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
