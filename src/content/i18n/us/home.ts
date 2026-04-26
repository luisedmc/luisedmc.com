import type { HomeDictionary } from '@/features/i18n/types';

export const dictionary = {
  me: {
    title: 'me.',
    items: [
      "I'm Luis Eduardo Meduna Cabreira, a Computer Science undergraduate currently working as a Full-Stack Developer at [@redacted].",
      'Interested in performative software, low-level development, operating systems, minimalism, linux, neovim and microcontrollers.',
      "Right now, I'm focused on improving my React and design skills.",
    ],
    games: {
      prefix: 'I occasionally play',
      cs2Label: 'Counter-Strike 2',
      suffix: 'and single-player, story-focused games.',
    },
  },
  experience: {
    title: 'experience.',
    roles: [
      {
        name: 'Full-Stack Developer',
        company: '[@redacted]',
        period: 'Jan 2026 - present',
        current: true,
      },
    ],
  },
  projects: {
    title: 'projects.',
    projects: [
      {
        name: 'ghcmd',
        description: 'A Terminal User Interface for GitHub operations',
        link: 'https://github.com/luisedmc/ghcmd',
      },
      {
        name: 'dice',
        description: 'Creating a window through Wire Protocol',
        link: 'https://github.com/luisedmc/dice',
      },
    ],
  },
  configs: {
    title: 'configs.',
    configurations: [
      {
        name: 'infinite',
        description: 'My personal NixOS configuration with Hyprland and Nvidia',
        link: 'https://github.com/luisedmc/infinite',
      },
      {
        name: 'neovim',
        description: 'An exceptionally bad Neovim configuration',
        link: 'https://github.com/luisedmc/neov',
      },
    ],
  },
} as const satisfies HomeDictionary;
