import { NavLink } from 'react-router';
import { routes } from '@/app/routes';
import { navbarContent } from '@/content/navbar';
import { LocaleSelector } from '@/features/i18n/LocaleSelector';
import { ThemeSelector } from '@/features/theme/ThemeSelector';
import { Container } from './Container';

const navClassName = [
  'flex min-h-14 flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-line py-3 font-control text-sm',
  '[&_.feature-option-group]:text-sm',
  '[&_.feature-option-group]:font-medium',
  '[&_.feature-option-group]:tracking-[0.02em]',
].join(' ');

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  ['underline-offset-[0.18em]', isActive ? 'text-fg' : 'text-fg hover:text-blue'].join(
    ' ',
  );

export const Navbar = () => {
  return (
    <Container customStyle="sticky top-0 z-20 py-0">
      <header>
        <nav aria-label="Display controls" className={navClassName}>
          <div className="flex max-w-full flex-wrap items-center gap-x-4 gap-y-2">
            {navbarContent.map(item => (
              <NavLink
                className={navLinkClassName}
                key={item.route}
                to={routes[item.route]}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex max-w-full flex-wrap items-center justify-end gap-x-4 gap-y-2">
            <LocaleSelector />
            <ThemeSelector />
          </div>
        </nav>
      </header>
    </Container>
  );
};
