import type { Alignment } from './interfaces';

export const ALIGNMENT_STORAGE_KEY = 'alignment' as const;

export const DEFAULT_ALIGNMENT: Alignment = 'start';

export const ALIGNMENTS: readonly Alignment[] = ['start', 'center', 'end'] as const;
