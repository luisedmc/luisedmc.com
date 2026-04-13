import { Container } from '@/components/ui/Container';
import { homeContent } from '@/content/home';

export const Home = () => {
  const { hero, main } = homeContent;

  return (
    <Container>
      <section>
        <h1>{hero.title}</h1>
        <p>{main.body}</p>
      </section>
    </Container>
  );
};
