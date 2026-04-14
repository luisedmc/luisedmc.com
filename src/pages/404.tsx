import type { ReactNode } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';
import { Container } from '@/components/ui/Container';

interface IErrorView {
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
  statusLabel: string;
}

const ErrorView = ({ title, subtitle, children, statusLabel }: IErrorView) => {
  return (
    <Container>
      <section aria-labelledby="error-page-title" className="space-y-2">
        <div className="space-y-1">
          <h1 id="error-page-title" className="text-base font-bold">
            {title}
          </h1>
          {subtitle}
        </div>

        {children}

        <p className="text-sm text-fg-muted">{statusLabel}</p>
      </section>
    </Container>
  );
};

export const NotFound = () => {
  return (
    <ErrorView
      statusLabel="HTTP 404 - File not found"
      subtitle={<p lang="ja">ページが見つかりません。</p>}
      title="The page cannot be found"
    >
      <p lang="ja">
        お探しのページは削除された可能性がありますので、名前が変更されたか、一時的に利用できなくなりました。
      </p>

      <p>
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
    </ErrorView>
  );
};

export const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />;
    }

    return (
      <ErrorView
        statusLabel={`HTTP ${error.status}${error.statusText ? ` - ${error.statusText}` : ''}`}
        subtitle={<p>An unexpected routing error occurred.</p>}
        title="Something went wrong"
      >
        {typeof error.data === 'string' ? <p>{error.data}</p> : null}
      </ErrorView>
    );
  }

  return (
    <ErrorView
      statusLabel="Application error"
      subtitle={<p>An unexpected application error occurred.</p>}
      title="Something went wrong"
    >
      {error instanceof Error ? <p>{error.message}</p> : null}
    </ErrorView>
  );
};
