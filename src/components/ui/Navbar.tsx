// import { AlignmentSelector } from '@/features/alignment/AlignmentSelector';
import { LocaleSelector } from '@/features/i18n/LocaleSelector';
import { ThemeSelector } from '@/features/theme/ThemeSelector';
import { Container } from './Container';

const navClassName = [
  'flex min-h-[clamp(4.25rem,8vw,7rem)] items-center justify-end py-3 font-control max-[640px]:min-h-[3.75rem] max-[640px]:py-2',
  '[&_.feature-option-group]:gap-x-[clamp(0.2rem,0.8vw,0.6rem)]',
  '[&_.feature-option-group]:text-[clamp(1.75rem,4.6vw,4.75rem)]',
  '[&_.feature-option-group]:font-bold',
  '[&_.feature-option-group]:leading-[0.85]',
  '[&_.feature-option-group]:tracking-[-0.055em]',
  'max-[640px]:[&_.feature-option-group]:text-[clamp(1.45rem,9.4vw,2.55rem)]',
  'max-[640px]:[&_.feature-option-group]:tracking-[-0.035em]',
  '[&_.feature-option-group-bracket]:hidden',
  '[&_.feature-option-group-option]:pt-[0.02em]',
  '[&_.feature-option-group-option]:pb-[0.1em]',
].join(' ');

export const Navbar = () => {
  return (
    <Container customStyle="py-0">
      <header>
        <nav aria-label="Display controls" className={navClassName}>
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
