import type { ErrorsDictionary } from '@/features/i18n/types';

export const dictionary = {
  notFound: {
    title: 'The page cannot be found',
    subtitle: 'The page you requested could not be located.',
    body: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    statusLabel: 'HTTP 404 - File not found',
  },
  route: {
    title: 'Something went wrong',
    subtitle: 'An unexpected routing error occurred.',
    statusLabelPrefix: 'HTTP',
  },
  application: {
    title: 'Something went wrong',
    subtitle: 'An unexpected application error occurred.',
    statusLabel: 'Application error',
  },
} as const satisfies ErrorsDictionary;
