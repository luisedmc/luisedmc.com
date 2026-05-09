import { socialLinks } from '@/content/social';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer className="footer-poster">
      <Container customStyle="poster-page footer-poster__inner">
        <nav aria-label="Social links" className="footer-poster__nav">
          {socialLinks.map(({ href, label }) => {
            const isExternal = href.startsWith('http');

            return (
              <a
                key={href}
                className={
                  isExternal
                    ? 'footer-poster__link link-external'
                    : 'footer-poster__link'
                }
                href={href}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="footer-poster__details">
          <span>Made with time and a computer.</span>
          <span>All rights reserved &copy; Luis E. M. Cabreira.</span>
        </div>
      </Container>
    </footer>
  );
};
