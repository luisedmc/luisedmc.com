import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ALIGNMENT_STORAGE_KEY, ALIGNMENTS, DEFAULT_ALIGNMENT } from './alignments';
import { AlignmentContext } from './context';
import type { Alignment } from './interfaces';

const getInitialAlignment = (): Alignment => {
  try {
    const stored = localStorage.getItem(ALIGNMENT_STORAGE_KEY);
    if (stored === 'start' || stored === 'center' || stored === 'end') return stored;
  } catch {
    // localStorage unavailable
  }

  return DEFAULT_ALIGNMENT;
};

const applyAlignmentToDOM = (alignment: Alignment): void => {
  document.documentElement.dataset.alignment = alignment;
};

interface IAlignmentProvider {
  children: ReactNode;
}

export const AlignmentProvider = ({ children }: IAlignmentProvider) => {
  const [alignment, setAlignmentState] = useState<Alignment>(getInitialAlignment);
  const alignmentRef = useRef<Alignment>(alignment);

  useLayoutEffect(() => {
    applyAlignmentToDOM(alignmentRef.current);
  }, []);

  const setAlignment = useCallback((next: Alignment) => {
    alignmentRef.current = next;
    applyAlignmentToDOM(next);
    setAlignmentState(next);
    localStorage.setItem(ALIGNMENT_STORAGE_KEY, next);
  }, []);

  const switchAlignment = useCallback(() => {
    const index = ALIGNMENTS.indexOf(alignmentRef.current);
    const next = ALIGNMENTS[(index + 1) % ALIGNMENTS.length];
    setAlignment(next);
  }, [setAlignment]);

  return (
    <AlignmentContext value={{ alignment, setAlignment, switchAlignment }}>
      {children}
    </AlignmentContext>
  );
};
