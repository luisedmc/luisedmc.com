import type { ReactNode } from 'react';

const sizeClasses = {
  full: 'max-w-full',
  max: 'max-w-7xl',
  lg: 'max-w-5xl',
  md: 'max-w-3xl',
  sm: 'max-w-xl',
} as const;

interface IContainer {
  children: ReactNode;
  size?: keyof typeof sizeClasses;
  customSize?: { width?: string; height?: string };
  customStyle?: string;
  bare?: boolean;
}

export const Container = ({
  children,
  size = 'max',
  customSize,
  customStyle,
  bare = false,
}: IContainer) => {
  return (
    <div
      className={`${bare ? '' : 'mx-auto px-4'} ${customSize?.width ?? `w-full ${sizeClasses[size]}`} ${customSize?.height ?? ''} ${customStyle ?? ''}`}
    >
      {children}
    </div>
  );
};
