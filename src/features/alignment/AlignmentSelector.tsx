import AlignCenterIcon from '~icons/line-md/align-center';
import AlignLeftIcon from '~icons/line-md/align-left';
import AlignRightIcon from '~icons/line-md/align-right';
import { useAlignment } from './hooks';
import type { Alignment } from './interfaces';

const nextAlignment: Record<Alignment, Alignment> = {
  start: 'center',
  center: 'end',
  end: 'start',
};

const alignmentIcons = {
  start: AlignLeftIcon,
  center: AlignCenterIcon,
  end: AlignRightIcon,
} as const;

export const AlignmentSelector = () => {
  const { alignment, switchAlignment } = useAlignment();
  const Icon = alignmentIcons[alignment];

  return (
    <button
      type="button"
      onClick={switchAlignment}
      aria-label={`Switch to ${nextAlignment[alignment]} alignment`}
      className="alignment-selector inline-flex items-center gap-0.5 rounded-sm px-0.5 leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fg-muted"
    >
      <span aria-hidden="true">[</span>
      <Icon
        aria-hidden="true"
        className="alignment-selector__icon size-[1.2rem] shrink-0"
      />
      <span aria-hidden="true">]</span>
    </button>
  );
};
