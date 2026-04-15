import type { RouteId } from '@/app/routes';

export interface INavbarItem {
  label: string;
  route: RouteId;
}

export const navbarContent = [
  { label: '@/www/[redacted].run', route: 'home' },
  { label: 'm', route: 'me' },
  { label: 'p', route: 'projects' },
  { label: 'w', route: 'writings' },
  // { label: 'b', route: 'books' },
  // { label: 's', route: 'stuff' },
] as const satisfies readonly INavbarItem[];
