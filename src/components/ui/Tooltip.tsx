import {
  cloneElement,
  type ComponentType,
  isValidElement,
  type ReactElement,
  type SVGProps,
  useId,
} from 'react';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type IconElement = ReactElement<SVGProps<SVGSVGElement>>;
type TooltipIcon = IconComponent | IconElement;
type TooltipOrientation = 'top' | 'bottom' | 'left' | 'right';

interface BaseTooltipProps {
  tooltipContent: string;
  orientation?: TooltipOrientation;
  focusable?: boolean;
  className?: string;
  tooltipClassName?: string;
}

type TooltipProps = BaseTooltipProps &
  (
    | {
        alt: string;
        src: string;
        width?: number;
        height?: number;
        Icon?: never;
        iconLabel?: never;
      }
    | {
        Icon: TooltipIcon;
        iconLabel?: string;
        alt?: never;
        src?: never;
        width?: never;
        height?: never;
      }
  );

const isIconElement = (Icon: TooltipIcon): Icon is IconElement =>
  isValidElement<SVGProps<SVGSVGElement>>(Icon);

const tooltipOrientationClassNames: Record<TooltipOrientation, string> = {
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  bottom: 'top-full left-1/2 mt-2 -translate-x-1/2',
  left: 'right-full top-1/2 mr-2 -translate-y-1/2',
  right: 'left-full top-1/2 ml-2 -translate-y-1/2',
};

export const Tooltip = (props: TooltipProps) => {
  const { tooltipContent, orientation = 'top', className, tooltipClassName } = props;
  const tooltipId = useId();
  const isFocusable = props.focusable ?? 'src' in props;

  const imageClassName = [
    'block h-auto max-w-none transition-[filter] duration-150',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const tooltipClassNames = [
    'pointer-events-none absolute z-20 hidden whitespace-nowrap rounded-[2px] bg-[#0a0a0a] px-3 py-2 font-sans text-[12px] leading-none text-white opacity-0 shadow-[0_6px_16px_rgb(0_0_0/0.35)] transition-opacity duration-150 group-hover/tooltip:block group-hover/tooltip:opacity-100 group-focus-visible/tooltip:block group-focus-visible/tooltip:opacity-100',
    tooltipOrientationClassNames[orientation],
    tooltipClassName ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const iconClassName = [
    'block shrink-0 transition-[filter] duration-150',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const tooltipTarget = (() => {
    if ('src' in props) {
      return (
        <img
          alt={props.alt}
          className={imageClassName}
          height={props.height}
          src={props.src}
          width={props.width}
        />
      );
    }

    const accessibleIconProps = {
      'aria-label': props.iconLabel ?? tooltipContent,
      className: iconClassName,
      role: 'img',
    } satisfies SVGProps<SVGSVGElement>;

    if (isIconElement(props.Icon)) {
      return cloneElement(props.Icon, {
        ...accessibleIconProps,
        className: [iconClassName, props.Icon.props.className ?? '']
          .filter(Boolean)
          .join(' '),
      });
    }

    const Icon = props.Icon;

    return <Icon {...accessibleIconProps} />;
  })();

  return (
    <span
      aria-describedby={tooltipId}
      className="group/tooltip relative inline-flex items-center align-middle focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fg-muted"
      tabIndex={isFocusable ? 0 : undefined}
    >
      {tooltipTarget}
      <span id={tooltipId} role="tooltip" className={tooltipClassNames}>
        {tooltipContent}
      </span>
    </span>
  );
};
