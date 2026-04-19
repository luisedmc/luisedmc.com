import { Link } from 'react-router';
import { routes } from '@/app/routes';
import { navbarContent } from '@/content/navbar';
import { AlignmentSelector } from '@/features/alignment/AlignmentSelector';
import { LocaleSelector } from '@/features/i18n/LocaleSelector';
import { ThemeSelector } from '@/features/theme/ThemeSelector';
import { Container } from './Container';

export const Navbar = () => {
  const [src] = navbarContent;

  return (
    <Container size="full">
      <header>
        <nav className="flex min-h-12.5 items-center justify-between gap-1 px-3 py-2 text-md font-bold sm:gap-2 sm:text-lg">
          <Link to={routes[src.route]}>{src.label}</Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <LocaleSelector />
            <AlignmentSelector />
            <ThemeSelector />
          </div>
        </nav>
      </header>
    </Container>
  );
};
