import AlignCenterIcon from '~icons/line-md/align-center';
import AlignLeftIcon from '~icons/line-md/align-left';
import AlignRightIcon from '~icons/line-md/align-right';
import { Tooltip } from '@/components/ui/Tooltip';
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

const alignmentLabels: Record<Alignment, string> = {
  start: 'Switch to left alignment',
  center: 'Switch to centered alignment',
  end: 'Switch to right alignment',
};

export const AlignmentSelector = () => {
  const { alignment, switchAlignment } = useAlignment();
  const Icon = alignmentIcons[alignment];

  return (
    <button
      type="button"
      onClick={switchAlignment}
      aria-label={alignmentLabels[nextAlignment[alignment]]}
      className="alignment-selector inline-flex cursor-pointer items-center gap-1 rounded-sm px-0.5 leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fg-muted"
    >
      <Tooltip
        Icon={<Icon />}
        tooltipContent={alignmentLabels[nextAlignment[alignment]]}
        className="alignment-selector__icon size-6 shrink-0"
        orientation="bottom"
      />
    </button>
  );
};
