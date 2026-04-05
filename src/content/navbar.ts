export interface INavItem {
  name: string;
  path: string;
}

export const navItems: INavItem[] = [
  { name: '@src/www/[redacted].run', path: '/' },
  { name: 'm', path: '/me' },
  { name: 'p', path: '/projects' },
  { name: 'w', path: '/writings' },
  { name: 'b', path: '/pages' },
  { name: 's', path: '/stuff' },
];
