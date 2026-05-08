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
  const groupClassName = ['feature-option-group', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <div aria-label={ariaLabel} className={groupClassName} role="group">
      <span aria-hidden="true" className="feature-option-group__bracket">
        [
      </span>
      {options.map(option => {
        const isActive = option.value === value;

        return (
          <span
            className="feature-option-group__option-wrap"
            key={option.value}
          >
            <button
              aria-label={option.ariaLabel}
              aria-pressed={isActive}
              className="feature-option-group__option"
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
      <span aria-hidden="true" className="feature-option-group__bracket">
        ]
      </span>
    </div>
  );
}
