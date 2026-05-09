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
    'inline-flex items-center gap-x-3 text-fg font-ui text-[48px] font-semibold leading-none whitespace-nowrap',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div aria-label={ariaLabel} className={groupClassName} role="group">
      <span
        aria-hidden="true"
        className="feature-option-group__bracket select-none text-muted"
      >
        [
      </span>
      {options.map(option => {
        const isActive = option.value === value;
        const optionClassName = [
          'feature-option-group__option',
          'appearance-none border px-1.5 py-0.5 [font:inherit] transition-[background-color,border-color,color] duration-[120ms] focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-offset-2 focus-visible:outline-red',
          isActive
            ? 'cursor-default rounded-full border-fg bg-fg text-bg focus-visible:border-fg focus-visible:text-bg'
            : 'cursor-pointer rounded-none border-transparent bg-transparent text-muted hover:text-blue focus-visible:border-red focus-visible:text-fg',
        ].join(' ');

        return (
          <span
            className="feature-option-group__option-wrap inline-flex items-center"
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
        className="feature-option-group__bracket select-none text-muted"
      >
        ]
      </span>
    </div>
  );
}
