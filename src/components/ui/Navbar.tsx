import { Link } from 'react-router';
import CompassLoopIcon from '~icons/line-md/compass-loop';
import { navbarContent } from '@/content/navbar';
import { AlignmentSelector } from '@/features/alignment/AlignmentSelector';
import { ThemeSelector } from '@/features/theme/ThemeSelector';
import { Container } from './Container';

export const Navbar = () => {
  const [src] = navbarContent;

  return (
    <Container size="full">
      <header>
        <nav className="flex min-h-12.5 items-center justify-between gap-1 px-3 py-2 text-md font-bold sm:gap-2 sm:text-lg">
          <Link to={src.route}>{src.label}</Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <span
              aria-hidden="true"
              className="inline-flex items-center gap-1 leading-none"
            >
              <span>[</span>
              <CompassLoopIcon className="block size-6 shrink-0 overflow-visible" />
              <span>]</span>
            </span>
            <AlignmentSelector />
            <ThemeSelector />
          </div>
        </nav>
      </header>
    </Container>
  );
};
