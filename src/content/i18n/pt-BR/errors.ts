import type { ErrorsDictionary } from '@/features/i18n/types';

export const dictionary = {
  notFound: {
    title: 'A pagina nao pode ser encontrada',
    subtitle: 'A pagina solicitada nao foi encontrada.',
    body: 'A pagina que voce procura pode ter sido removida, renomeada ou esta temporariamente indisponivel.',
    statusLabel: 'HTTP 404 - Arquivo nao encontrado',
  },
  route: {
    title: 'Algo deu errado',
    subtitle: 'Ocorreu um erro inesperado de roteamento.',
    statusLabelPrefix: 'HTTP',
  },
  application: {
    title: 'Algo deu errado',
    subtitle: 'Ocorreu um erro inesperado na aplicacao.',
    statusLabel: 'Erro da aplicacao',
  },
} as const satisfies ErrorsDictionary;
