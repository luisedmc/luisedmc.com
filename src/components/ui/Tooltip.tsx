import {
  type AnchorHTMLAttributes,
  cloneElement,
  type ComponentType,
  isValidElement,
  type ReactElement,
  type SVGProps,
  useId,
} from 'react';
import { withLinkArrow } from '@/lib/link-label';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type IconElement = ReactElement<SVGProps<SVGSVGElement>>;
type TooltipIcon = IconComponent | IconElement;
type TooltipOrientation = 'top' | 'bottom' | 'left' | 'right';
type TooltipLinkTarget = AnchorHTMLAttributes<HTMLAnchorElement>['target'];

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
        href?: never;
        linkLabel?: never;
        target?: never;
        rel?: never;
      }
    | {
        Icon: TooltipIcon;
        iconLabel?: string;
        alt?: never;
        src?: never;
        width?: never;
        height?: never;
        href?: never;
        linkLabel?: never;
        target?: never;
        rel?: never;
      }
    | {
        href: string;
        linkLabel: string;
        target?: TooltipLinkTarget;
        rel?: string;
        alt?: never;
        src?: never;
        width?: never;
        height?: never;
        Icon?: never;
        iconLabel?: never;
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
  const isLink = 'href' in props;

  const imageClassName = [
    'inline-block h-auto max-w-none transition-[filter]',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const tooltipFocusClassName = isLink
    ? 'group-focus-within/tooltip:block group-focus-within/tooltip:opacity-100'
    : 'group-focus-visible/tooltip:block group-focus-visible/tooltip:opacity-100';

  const tooltipClassNames = [
    'pointer-events-none absolute z-20 hidden whitespace-nowrap rounded-none border border-fg bg-bg px-2 py-1 font-control text-[12px] leading-none text-fg opacity-0 transition-opacity group-hover/tooltip:block group-hover/tooltip:opacity-100',
    tooltipFocusClassName,
    tooltipOrientationClassNames[orientation],
    tooltipClassName ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const iconClassName = [
    'block shrink-0 transition-[filter]',
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

    if ('href' in props) {
      const target = props.target ?? '_blank';
      const rel = props.rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);

      return (
        <a
          aria-describedby={tooltipId}
          className={className}
          href={props.href}
          rel={rel}
          target={target}
        >
          {withLinkArrow(props.linkLabel)}
        </a>
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
      aria-describedby={isLink ? undefined : tooltipId}
      className="group/tooltip relative inline-flex items-center align-middle focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-offset-[3px] focus-visible:outline-red"
      tabIndex={!isLink && isFocusable ? 0 : undefined}
    >
      {tooltipTarget}
      <span id={tooltipId} role="tooltip" className={tooltipClassNames}>
        {tooltipContent}
      </span>
    </span>
  );
};
