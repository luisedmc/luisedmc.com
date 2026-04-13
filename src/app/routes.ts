export const routes = {
  home: '/',
  me: '/me',
  projects: '/projects',
  writings: '/writings',
  // books: '/books',
  // stuff: '/stuff',
} as const;

export type RouteId = keyof typeof routes;
