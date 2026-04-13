import { useContext } from 'react';
import { AlignmentContext } from './context';
import type { IAlignmentContext } from './interfaces';

export const useAlignment = (): IAlignmentContext => {
  const ctx = useContext(AlignmentContext);
  if (ctx === null) {
    throw new Error('useAlignment must be used within an AlignmentProvider');
  }
  return ctx;
};
