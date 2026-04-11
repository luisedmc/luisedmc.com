import { Container } from '@/components/ui/Container';
import { homeContent } from '@/content/home';

export const Home = () => {
  const { hero, main } = homeContent;

  return (
    <Container bare customStyle="bg-blue-800">
      <section>
        <h1>{hero.title}</h1>
      </section>

      <section>
        <p>{main.body}</p>
      </section>
    </Container>
  );
};
