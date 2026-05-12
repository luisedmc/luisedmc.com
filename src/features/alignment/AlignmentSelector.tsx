import {
  type FeatureOption,
  FeatureOptionGroup,
} from '@/components/ui/FeatureOptionGroup';
import { useAlignment } from './hooks';
import type { Alignment } from './interfaces';

const alignmentOptions = [
  {
    value: 'start',
    label: 'Left',
    ariaLabel: 'Set alignment to left',
  },
  {
    value: 'center',
    label: 'Center',
    ariaLabel: 'Set alignment to center',
  },
  {
    value: 'end',
    label: 'Right',
    ariaLabel: 'Set alignment to right',
  },
] as const satisfies readonly FeatureOption<Alignment>[];

export const AlignmentSelector = () => {
  const { alignment, setAlignment } = useAlignment();

  return (
    <FeatureOptionGroup
      ariaLabel="Alignment options"
      className="alignment-selector"
      onChange={setAlignment}
      options={alignmentOptions}
      value={alignment}
    />
  );
};
