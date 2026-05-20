export const socialLinks = [
  {
    id: 'resume',
    label: 'Resume',
    href: '#',
  },
  {
    id: 'github',
    label: 'github.com/luisedmc',
    // label: 'GitHub',
    href: 'https://github.com/luisedmc',
  },
  {
    id: 'linkedin',
    label: 'in/luiseduardomedunacabreira',
    // label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luiseduardomedunacabreira/',
  },
  {
    id: 'email',
    label: 'luiseduardomc019@gmail.com',
    // label: 'Email',
    href: 'mailto:luiseduardomc019@gmail.com',
  },
] as const;

export type SocialLinkId = (typeof socialLinks)[number]['id'];
