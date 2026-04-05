import type { Metric } from 'web-vitals';

export const reportWebVitals = (onReport?: (metric: Metric) => void) => {
  if (!onReport) return;

  import('web-vitals').then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
    onCLS(onReport);
    onINP(onReport);
    onLCP(onReport);
    onFCP(onReport);
    onTTFB(onReport);
  });
};
