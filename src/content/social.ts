export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/luisedmc',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luiseduardomedunacabreira/',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:luiseduardomc019@gmail.com',
  },
  {
    id: 'resume',
    label: 'Resume',
    href: '#',
  },
] as const;

export type SocialLinkId = (typeof socialLinks)[number]['id'];
