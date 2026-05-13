import { use } from 'react';
import { AlignmentContext } from './context';
import type { IAlignmentContext } from './interfaces';

export const useAlignment = (): IAlignmentContext => {
  const ctx = use(AlignmentContext);
  if (ctx === null) {
    throw new Error('useAlignment must be used within an AlignmentProvider');
  }
  return ctx;
};
