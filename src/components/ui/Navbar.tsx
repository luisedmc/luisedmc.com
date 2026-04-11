import { Fragment } from 'react';
import { Link } from 'react-router';
import { routes } from '@/app/routes';
import { navbarContent } from '@/content/navbar';
import { ThemeSelector } from '@/features/theme/ThemeSelector';
import { Container } from './Container';

export const Navbar = () => {
  const [src, ...navigationItems] = navbarContent;
  const linkClassName = 'text-inherit no-underline hover:underline';

  return (
    <Container size="full" bare>
      <header>
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link className={linkClassName} to={routes[src.route]}>
              {src.label}
            </Link>
            {navigationItems.length > 0 ? (
              <span>
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
