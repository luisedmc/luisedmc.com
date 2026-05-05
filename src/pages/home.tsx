import ArrowSmallRightIcon from '~icons/line-md/arrow-small-right';
import { Container } from '@/components/ui/Container';
import { ParticleWave } from '@/components/ui/Particles';
import { Tooltip } from '@/components/ui/Tooltip';
import { useDictionary } from '@/features/i18n/hooks';

export const Home = () => {
  const { me, experience, projects, configs } = useDictionary('home');
  const sectionClassName = 'mt-6 space-y-2';

  return (
    <Container>
      <section>
        <ParticleWave />
      </section>

      <section aria-labelledby="home-me-title" className={sectionClassName}>
        <h2
          id="home-me-title"
          className="inline-flex items-center gap-1 text-base font-bold"
        >
          <ArrowSmallRightIcon aria-hidden="true" className="size-5 shrink-0" />
          <span>{me.title}</span>
        </h2>

        <div className="space-y-4">
          {me.items.map(item => (
            <p key={item}>{item}</p>
          ))}
          <p>
            <span>{me.games.prefix} </span>
            <Tooltip
              alt={me.games.cs2Label}
              className="h-9 w-9 brightness-0 dark:invert"
              src="/imgs/games/cs2_logo.ico"
              tooltipContent={me.games.cs2Label}
            />
            <span> {me.games.suffix}</span>
          </p>
        </div>
      </section>

      <section aria-labelledby="home-experience-title" className={sectionClassName}>
        <h2
          id="home-experience-title"
          className="inline-flex items-center gap-1 text-base font-bold"
        >
          <ArrowSmallRightIcon aria-hidden="true" className="size-5 shrink-0" />
          <span>{experience.title}</span>
        </h2>

        <div className="space-y-4">
          {experience.roles.map(role => (
            <p key={role.name}>
              <span className="inline-flex items-center gap-2">
                {role.current ? (
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 animate-pulse rounded-full bg-green-500"
                  />
                ) : null}
                <span>{role.name}</span>
              </span>{' '}
              at {role.company} ({role.period})
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-projects-title" className={sectionClassName}>
        <h2
          id="home-projects-title"
          className="inline-flex items-center gap-1 text-base font-bold"
        >
          <ArrowSmallRightIcon aria-hidden="true" className="size-5 shrink-0" />
          <span>{projects.title}</span>
        </h2>

        <div className="space-y-4">
          {projects.projects.map(project => (
            <p key={project.name} className="flex items-baseline gap-2">
              <Tooltip
                href={project.link}
                linkLabel={project.name}
                tooltipContent={project.link}
              />
              <span
                aria-hidden="true"
                className="mb-1 min-w-4 flex-1 border-b border-dotted border-fg-muted/40"
              />
              <small className="min-w-0 text-right text-muted-foreground">
                {project.description}
              </small>
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-configs-title" className={sectionClassName}>
        <h2
          id="home-configs-title"
          className="inline-flex items-center gap-1 text-base font-bold"
        >
          <ArrowSmallRightIcon aria-hidden="true" className="size-5 shrink-0" />
          <span>{configs.title}</span>
        </h2>

        <div className="space-y-4">
          {configs.configurations.map(config => (
            <p key={config.name} className="flex items-baseline gap-2">
              <Tooltip
                href={config.link}
                linkLabel={config.name}
                tooltipContent={config.link}
              />
              <span
                aria-hidden="true"
                className="mb-1 min-w-4 flex-1 border-b border-dotted border-fg-muted/40"
              />
              <small className="min-w-0 text-right text-muted-foreground">
                {config.description}
              </small>
            </p>
          ))}
        </div>
      </section>
    </Container>
  );
};
