// import { AlignmentSelector } from '@/features/alignment/AlignmentSelector';
import { LocaleSelector } from '@/features/i18n/LocaleSelector';
import { ThemeSelector } from '@/features/theme/ThemeSelector';
import { Container } from './Container';

export const Navbar = () => {
  return (
    <Container>
      <header>
        <nav className="flex min-h-12.5 items-center justify-end pt-2">
          <div className="flex max-w-full flex-wrap items-center justify-end gap-x-3 gap-y-2 sm:gap-x-4">
            <LocaleSelector />
            {/* <AlignmentSelector /> */}
            <ThemeSelector />
          </div>
        </nav>
      </header>
    </Container>
  );
};
