import { Container } from '@/components/ui/Container';
// import { ParticleWave } from '@/components/ui/Particles';
import { Tooltip } from '@/components/ui/Tooltip';
import { useDictionary } from '@/features/i18n/hooks';
import { withLinkArrow } from '@/lib/link-label';

export const Home = () => {
  const { me, experience, projects, configs } = useDictionary('home');
  const sectionClassName = 'home-section';
  const sectionTitleClassName = 'home-section-title';

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
            <Tooltip
              alt={me.games.cs2Label}
              className="inline h-10 w-10 brightness-0 dark:invert"
              src="/imgs/games/cs2_logo.ico"
              tooltipContent={me.games.cs2Label}
            />
            <span> {me.games.suffix}</span>
          </p>
        </div>
      </section>

      <section aria-labelledby="home-experience-title" className={sectionClassName}>
        <h2 id="home-experience-title" className={sectionTitleClassName}>
          {experience.title}
        </h2>

        <div className="home-entry-list">
          {experience.roles.map(role => (
            <article key={role.name} className="home-entry">
              <h3 className="home-entry-title">{role.name}</h3>
              <p className="home-entry-description">
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

        <div className="home-entry-list">
          {projects.projects.map(project => (
            <article key={project.name} className="home-entry">
              <h3 className="home-entry-title">
                <a
                  className="link-external"
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {withLinkArrow(project.name)}
                </a>
              </h3>
              <p className="home-entry-description">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-configs-title" className={sectionClassName}>
        <h2 id="home-configs-title" className={sectionTitleClassName}>
          {configs.title}
        </h2>

        <div className="home-entry-list">
          {configs.configurations.map(config => (
            <article key={config.name} className="home-entry">
              <h3 className="home-entry-title">
                <a
                  className="link-external"
                  href={config.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {withLinkArrow(config.name)}
                </a>
              </h3>
              <p className="home-entry-description">{config.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
};
