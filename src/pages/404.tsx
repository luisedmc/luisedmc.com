import type { ReactNode } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';
import { Container } from '@/components/ui/Container';
import { useDictionary } from '@/features/i18n/hooks';

interface IErrorView {
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
  statusLabel: string;
}

const ErrorView = ({ title, subtitle, children, statusLabel }: IErrorView) => {
  return (
    <Container size="md">
      <section
        aria-labelledby="error-page-title"
        className="space-y-4 border-t border-line py-6"
      >
        <div className="space-y-3">
          <h1 id="error-page-title" className="text-xl font-semibold leading-tight">
            {title}
          </h1>
          {subtitle}
          {children}
        </div>

        <p className="text-meta">{statusLabel}</p>
      </section>
    </Container>
  );
};

export const NotFound = () => {
  const { notFound } = useDictionary('errors');

  return (
    <ErrorView
      statusLabel={notFound.statusLabel}
      subtitle={<p>{notFound.subtitle}</p>}
      title={notFound.title}
    >
      <p>{notFound.body}</p>
    </ErrorView>
  );
};

export const ErrorBoundary = () => {
  const error = useRouteError();
  const { application, route } = useDictionary('errors');

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />;
    }

    return (
      <ErrorView
        statusLabel={`${route.statusLabelPrefix} ${error.status}${error.statusText ? ` - ${error.statusText}` : ''}`}
        subtitle={<p>{route.subtitle}</p>}
        title={route.title}
      >
        {typeof error.data === 'string' ? <p>{error.data}</p> : null}
      </ErrorView>
    );
  }

  return (
    <ErrorView
      statusLabel={application.statusLabel}
      subtitle={<p>{application.subtitle}</p>}
      title={application.title}
    >
      {error instanceof Error ? <p>{error.message}</p> : null}
    </ErrorView>
  );
};
