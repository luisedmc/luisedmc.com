import { socialLinks } from '@/content/social';
import { withLinkArrow } from '@/lib/link-label';
import { Container } from './Container';

const posterWidthClassName =
  'w-[min(100%_-_clamp(1rem,4vw,4rem),1440px)] max-[640px]:w-[min(100%_-_1rem,100%)]';
const footerInnerClassName =
  'grid min-h-[clamp(24rem,42vw,36rem)] grid-cols-[minmax(0,1fr)_auto] gap-[clamp(var(--space-6),5vw,var(--space-16))] py-[clamp(var(--space-8),6vw,var(--space-20))] max-[900px]:grid-cols-1 max-[640px]:min-h-0';
const footerNavClassName =
  'flex flex-col items-start self-center gap-[clamp(var(--space-4),2.5vw,var(--space-8))]';
const footerLinkClassName =
  'w-fit font-control text-[clamp(2.4rem,6.8vw,7.5rem)] font-bold leading-[0.82] tracking-[-0.06em] decoration-[0.05em] underline-offset-[0.1em]';
const footerDetailsClassName =
  'flex flex-col self-stretch justify-self-end gap-[var(--space-4)] font-mono text-xs leading-[1.2] tracking-[0.02em] text-muted uppercase rotate-180 [writing-mode:vertical-rl] max-[900px]:flex-row max-[900px]:justify-self-start max-[900px]:rotate-0 max-[900px]:[writing-mode:horizontal-tb]';
const footerLegalClassName = 'flex gap-[var(--space-4)] max-[900px]:flex-row';

export const Footer = () => {
  return (
    <footer className="mt-[clamp(var(--space-12),9vw,var(--space-24))] border-t border-fg">
      <Container
        customSize={{ width: posterWidthClassName }}
        customStyle={footerInnerClassName}
      >
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
          <span>Best viewed on a desktop display.</span>
          <span className={footerLegalClassName}>
            <span>Made with time and a computer.</span>
            <span>All rights reserved &copy; Luis E. M. Cabreira.</span>
          </span>
        </div>
      </Container>
    </footer>
  );
};
