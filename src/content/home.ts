interface IHomeContent {
  hero: {
    title: string;
    subtitle: string;
  };

  main: {
    body: string;
  };
}

export const homeContent = {
  hero: { title: 'oh shit here we go again www.[redacted].run v3', subtitle: '' },

  main: { body: 'hello from body' },
} as const satisfies IHomeContent;
