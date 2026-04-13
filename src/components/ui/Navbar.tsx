import { Fragment } from 'react';
import { Link } from 'react-router';
import CompassLoopIcon from '~icons/line-md/compass-loop';
import { routes } from '@/app/routes';
import { navbarContent } from '@/content/navbar';
import { AlignmentSelector } from '@/features/alignment/AlignmentSelector';
import { ThemeSelector } from '@/features/theme/ThemeSelector';
import { Container } from './Container';

export const Navbar = () => {
  const [src, ...navigationItems] = navbarContent;
  const linkClassName = 'whitespace-nowrap text-inherit no-underline hover:underline';

  return (
    <Container size="full" customStyle="border-b">
      <header>
        <nav className="flex flex-nowrap items-center justify-between gap-2 overflow-x-auto whitespace-nowrap font-bold">
          <div className="flex shrink-0 items-center gap-1 text-xs sm:gap-2 sm:text-sm md:text-base">
            <Link className={linkClassName} to={routes[src.route]}>
              {src.label}
            </Link>
            {navigationItems.length > 0 ? (
              <span className="shrink-0">
                [{` `}
                {navigationItems.map((item, index) => (
                  <Fragment key={item.route}>
                    {index > 0 ? ' / ' : null}
                    <Link className={linkClassName} to={routes[item.route]}>
                      {item.label}
                    </Link>
                  </Fragment>
                ))}
                {` `}]
              </span>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <span
              aria-hidden="true"
              className="inline-flex items-center gap-0.5 leading-none"
            >
              <span>[</span>
              <CompassLoopIcon className="block size-[1.2rem] shrink-0 overflow-visible" />
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
