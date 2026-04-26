import type { HomeDictionary } from '@/features/i18n/types';

export const dictionary = {
  me: {
    title: 'me.',
    items: [
      'Sou Luis Eduardo Meduna Cabreira, um estudante de Ciência da Computação atualmente trabalhando como Desenvolvedor Full-Stack na [@redacted].',
      'Tenho interesse em software performático, desenvolvimento de baixo nível, sistemas operacionais, minimalismo, linux, neovim e microcontroladores.',
      'no momento, estou focado em melhorar minhas habilidades com React e design.',
    ],
    games: {
      prefix: 'ocasionalmente jogo',
      cs2Label: 'Counter-Strike 2',
      suffix: 'e jogos single-player focados em história.',
    },
  },
  experience: {
    title: 'experiência.',
    roles: [
      {
        name: 'Desenvolvedor Full-Stack',
        company: '[@redacted]',
        period: 'Jan 2026 - presente',
        current: true,
      },
    ],
  },
  projects: {
    title: 'projetos.',
    projects: [
      {
        name: 'ghcmd',
        description: 'Uma interface de usuário de terminal para operações do GitHub',
        link: 'https://github.com/luisedmc/ghcmd',
      },
      {
        name: 'dice',
        description: 'Criando uma janela através do Wire Protocol',
        link: 'https://github.com/luisedmc/dice',
      },
    ],
  },
  configs: {
    title: 'configs.',
    configurations: [
      {
        name: 'infinite',
        description: 'Minha configuração pessoal para NixOS com Hyprland e Nvidia',
        link: 'https://github.com/luisedmc/infinite',
      },
      {
        name: 'neovim',
        description: 'Uma configuração excepcionalmente ruim para o Neovim',
        link: 'https://github.com/luisedmc/neov',
      },
    ],
  },
} as const satisfies HomeDictionary;
