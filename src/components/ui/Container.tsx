import type { ReactNode } from 'react';

const sizeClasses = {
  full: 'container-page',
  xl: 'container-page',
  lg: 'container-page',
  md: 'container-reading',
  sm: 'container-narrow',
} as const;

interface IContainer {
  children: ReactNode;
  size?: keyof typeof sizeClasses;
  customSize?: { width?: string; height?: string };
  customStyle?: string;
}

export const Container = ({
  children,
  size = 'full',
  customSize,
  customStyle,
}: IContainer) => {
  const className = [
    'ui-container ui-container--aligned',
    customSize?.width ?? sizeClasses[size],
    customSize?.height ?? '',
    customStyle ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={className}>{children}</div>;
};
