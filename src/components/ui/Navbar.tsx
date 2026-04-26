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
    <Container>
      <header>
        <nav className="flex min-h-12.5 items-center justify-between pt-2">
          <Link className="flex cursor-pointer items-center" to={routes[src.route]}>
            <img src="/favicon.svg" alt="" className="size-6 shrink-0" />
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <LocaleSelector />
            <AlignmentSelector />
            <ThemeSelector />
          </div>
        </nav>
      </header>
    </Container>
  );
};
