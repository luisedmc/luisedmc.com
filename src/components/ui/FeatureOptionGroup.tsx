export interface FeatureOption<TValue extends string> {
  readonly value: TValue;
  readonly label: string;
  readonly ariaLabel?: string;
}

interface IFeatureOptionGroup<TValue extends string> {
  readonly ariaLabel: string;
  readonly value: TValue;
  readonly options: readonly FeatureOption<TValue>[];
  readonly onChange: (value: TValue) => void;
  readonly className?: string;
}

export function FeatureOptionGroup<TValue extends string>({
  ariaLabel,
  value,
  options,
  onChange,
  className,
}: IFeatureOptionGroup<TValue>) {
  const groupClassName = [
    'feature-option-group',
    'inline-flex items-center gap-x-1 font-control text-[clamp(1.75rem,4.6vw,4.75rem)] font-bold leading-none tracking-[-0.055em] text-fg whitespace-nowrap',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div aria-label={ariaLabel} className={groupClassName} role="group">
      <span
        aria-hidden="true"
        className="feature-option-group-bracket select-none text-muted"
      >
        [
      </span>
      {options.map(option => {
        const isActive = option.value === value;
        const optionClassName = [
          'feature-option-group-option',
          'appearance-none border border-transparent px-[0.16em] py-[0.04em] [font:inherit] leading-none transition-[color,transform] duration-200 ease-out',
          isActive
            ? 'cursor-default border-transparent text-fg hover:border-transparent hover:text-fg'
            : 'cursor-pointer text-muted hover:-translate-y-[0.03em] hover:text-fg',
        ].join(' ');

        return (
          <span
            className="feature-option-group-option-wrap inline-flex items-center"
            key={option.value}
          >
            <button
              aria-label={option.ariaLabel}
              aria-pressed={isActive}
              className={optionClassName}
              onClick={() => {
                if (!isActive) {
                  onChange(option.value);
                }
              }}
              type="button"
            >
              {option.label}
            </button>
          </span>
        );
      })}
      <span
        aria-hidden="true"
        className="feature-option-group-bracket select-none text-muted"
      >
        ]
      </span>
    </div>
  );
}
