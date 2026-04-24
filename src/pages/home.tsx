import { Container } from '@/components/ui/Container';
import { ParticleWave } from '@/components/ui/Particles';
import { useDictionary } from '@/features/i18n/hooks';

export const Home = () => {
  const { hero, main } = useDictionary('home');

  return (
    <Container>
      <section>
        <ParticleWave />
        <h1>{hero.title}</h1>
        {hero.subtitle ? <p>{hero.subtitle}</p> : null}
        <p>{main.body}</p>
      </section>
    </Container>
  );
};
