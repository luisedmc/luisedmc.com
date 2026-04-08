import { navItems } from '@/content/navbar';
import { ThemeSelector } from '@/features/theme/ThemeSelector';
import { Container } from './Container';

export const Navbar = () => {
  return (
    <Container size="full" bare>
      <header>
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>{navItems[0].name}</span>
            <span>
              [{' '}
              {navItems
                .slice(1)
                .map(i => i.name)
                .join(' / ')}{' '}
              ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>[&mdash;]</span>
            <ThemeSelector />
            <span>[X]</span>
          </div>
        </nav>
      </header>
    </Container>
  );
};
