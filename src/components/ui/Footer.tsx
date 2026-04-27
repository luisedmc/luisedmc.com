// import { Link } from 'react-router';
import ComputerIcon from '~icons/line-md/computer';
import EmailIcon from '~icons/line-md/email';
import LineMdFileDocument from '~icons/line-md/file-document';
import GithubIcon from '~icons/line-md/github';
import HeartIcon from '~icons/line-md/heart';
import LinkedinIcon from '~icons/line-md/linkedin';
// import { routes } from '@/app/routes';
import { socialLinks } from '@/content/social';
import { Container } from './Container';
import { Tooltip } from './Tooltip';

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: EmailIcon,
  resume: LineMdFileDocument,
} as const;

export const Footer = () => {
  return (
    <footer>
      <Container customStyle="mt-8 flex flex-col items-center gap-1 pb-2">
        <nav aria-label="Social links" className="flex items-center justify-center gap-1">
          {socialLinks.map(({ href, id, label }) => {
            const Icon = socialIcons[id];

            return (
              <a
                key={id}
                aria-label={label}
                className="inline-flex size-8 items-center justify-center rounded-sm leading-none transition-colors hover:text-fg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fg-muted"
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Tooltip
                  Icon={<Icon />}
                  tooltipContent={label}
                  className="size-5 shrink-0"
                />
              </a>
            );
          })}
        </nav>
        <div className="flex flex-col items-center justify-center gap-0.5 text-center text-sm text-fg-muted">
          <span className="inline-flex items-center gap-1">
            Made with
            <HeartIcon aria-hidden="true" className="size-4 shrink-0" />
            and
            <ComputerIcon aria-hidden="true" className="size-4 shrink-0" />
          </span>
          <span>All rights reserved &copy; Luis Eduardo Meduna 2026</span>
          {/* <Link className="text-fg" to={routes.changelog}>
            changelog
          </Link> */}
        </div>
      </Container>
    </footer>
  );
};
