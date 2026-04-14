import { Link } from 'react-router';
import { routes } from '@/app/routes';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer>
      <Container size="full" customStyle="flex justify-end">
        <Link className="text-xs" to={routes.changelog}>
          changelog
        </Link>
      </Container>
    </footer>
  );
};
