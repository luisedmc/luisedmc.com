// import { AlignmentSelector } from '@/features/alignment/AlignmentSelector';
import { LocaleSelector } from '@/features/i18n/LocaleSelector';
import { ThemeSelector } from '@/features/theme/ThemeSelector';
import { Container } from './Container';

export const Navbar = () => {
  return (
    <Container customStyle="poster-page py-0">
      <header>
        <nav aria-label="Display controls" className="nav-shell nav-shell--poster">
          <div className="flex max-w-full flex-wrap items-start justify-end gap-x-4 gap-y-2">
            <LocaleSelector />
            {/* <AlignmentSelector /> */}
            <ThemeSelector />
          </div>
        </nav>
      </header>
    </Container>
  );
};
