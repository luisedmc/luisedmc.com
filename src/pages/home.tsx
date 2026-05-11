import { Container } from '@/components/ui/Container';
// import { ParticleWave } from '@/components/ui/Particles';
import { useDictionary } from '@/features/i18n/hooks';
import { withLinkArrow } from '@/lib/link-label';

const sectionClassName = 'grid gap-[clamp(var(--space-4),3vw,var(--space-8))] py-1';
const sectionTitleClassName =
  'font-control text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.84] tracking-[-0.06em] text-fg';
const entryListClassName =
  'grid max-w-[46rem] gap-[clamp(var(--space-5),3vw,var(--space-8))]';
const entryClassName = 'grid gap-[var(--space-1)]';
const entryTitleClassName =
  'font-control text-[clamp(var(--text-xl),3.2vw,var(--text-3xl))] font-[650] leading-[0.98] tracking-[-0.035em]';
const entryDescriptionClassName =
  'max-w-[42rem] text-[clamp(var(--text-base),1.25vw,var(--text-lg))] leading-[1.35] text-muted';

export const Home = () => {
  const { me, experience, projects, configs } = useDictionary('home');

  return (
    <Container customStyle="space-y-14 sm:space-y-20">
      {/* <section aria-label="Particle field" className="pb-2">
        <ParticleWave />
      </section> */}

      <section aria-labelledby="home-me-title" className={sectionClassName}>
        <h1 id="home-me-title" className={sectionTitleClassName}>
          {me.title}
        </h1>

        <div className="max-w-3xl space-y-4 text-md">
          {me.items.map(item => (
            <p key={item}>{item}</p>
          ))}
          <p>
            <span>{me.games.prefix} </span>
            <img
              alt={me.games.cs2Label}
              className="inline h-10 w-10 brightness-0 dark:invert"
              src="/imgs/games/cs2_logo.ico"
            />
            <span> {me.games.suffix}</span>
          </p>
        </div>
      </section>

      <section aria-labelledby="home-experience-title" className={sectionClassName}>
        <h2 id="home-experience-title" className={sectionTitleClassName}>
          {experience.title}
        </h2>

        <div className={entryListClassName}>
          {experience.roles.map(role => (
            <article key={role.name} className={entryClassName}>
              <h3 className={entryTitleClassName}>{role.name}</h3>
              <p className={entryDescriptionClassName}>
                {role.company} / {role.period}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-projects-title" className={sectionClassName}>
        <h2 id="home-projects-title" className={sectionTitleClassName}>
          {projects.title}
        </h2>

        <div className={entryListClassName}>
          {projects.projects.map(project => (
            <article key={project.name} className={entryClassName}>
              <h3 className={entryTitleClassName}>
                <a href={project.link} rel="noopener noreferrer" target="_blank">
                  {withLinkArrow(project.name)}
                </a>
              </h3>
              <p className={entryDescriptionClassName}>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-configs-title" className={sectionClassName}>
        <h2 id="home-configs-title" className={sectionTitleClassName}>
          {configs.title}
        </h2>

        <div className={entryListClassName}>
          {configs.configurations.map(config => (
            <article key={config.name} className={entryClassName}>
              <h3 className={entryTitleClassName}>
                <a href={config.link} rel="noopener noreferrer" target="_blank">
                  {withLinkArrow(config.name)}
                </a>
              </h3>
              <p className={entryDescriptionClassName}>{config.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
};
