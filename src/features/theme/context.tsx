import { createContext } from 'react';
import type { IThemeContext } from './interfaces';

export const ThemeContext = createContext<IThemeContext | null>(null);
