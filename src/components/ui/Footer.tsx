import { socialLinks } from '@/content/social';
import { withLinkArrow } from '@/lib/link-label';
import { Container } from './Container';

const footerInnerClassName =
  'grid min-h-[clamp(24rem,42vw,36rem)] grid-cols-[minmax(0,1fr)_auto] gap-[clamp(var(--space-6),5vw,var(--space-16))] py-[clamp(var(--space-8),6vw,var(--space-20))] max-[900px]:grid-cols-1 max-[640px]:min-h-0 max-[640px]:pb-2';
const footerNavClassName =
  'flex flex-col items-start self-center gap-[clamp(var(--space-4),2.5vw,var(--space-8))]';
const footerLinkClassName =
  'w-fit max-w-full font-control text-[clamp(1.35rem,3.3vw,4.25rem)] font-bold leading-[0.92] tracking-[-0.045em] decoration-[0.05em] underline-offset-[0.1em] [overflow-wrap:anywhere]';
const footerDetailsClassName =
  'flex flex-col self-stretch justify-self-end gap-[var(--space-4)] font-mono text-xs leading-[1.2] tracking-[0.02em] text-muted uppercase rotate-180 [writing-mode:vertical-rl] max-[900px]:flex-row max-[900px]:justify-self-start max-[900px]:rotate-0 max-[900px]:[writing-mode:horizontal-tb] max-[640px]:items-center max-[640px]:justify-self-center max-[640px]:text-center max-[640px]:flex-col';
const footerDetailLineClassName = 'whitespace-nowrap';
const footerLegalClassName =
  'flex gap-[var(--space-4)] max-[640px]:items-center max-[640px]:flex-col';

export const Footer = () => {
  return (
    <footer className="mt-[clamp(var(--space-12),9vw,var(--space-24))] border-t border-fg">
      <Container customStyle={footerInnerClassName}>
        <nav aria-label="Social links" className={footerNavClassName}>
          {socialLinks.map(({ href, label }) => {
            const isExternal = href.startsWith('http');

            return (
              <a
                key={href}
                className={footerLinkClassName}
                href={href}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
              >
                {withLinkArrow(label)}
              </a>
            );
          })}
        </nav>

        <div className={footerDetailsClassName}>
          <span className={footerLegalClassName}>
            <span className={footerDetailLineClassName}>
              Made with time and a computer.
            </span>
            <span className={footerDetailLineClassName}>
              All rights reserved &copy; Luis E. M. Cabreira.
            </span>
          </span>
        </div>
      </Container>
    </footer>
  );
};
