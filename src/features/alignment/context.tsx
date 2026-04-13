import { createContext } from 'react';
import type { IAlignmentContext } from './interfaces';

export const AlignmentContext = createContext<IAlignmentContext | null>(null);
