export type Alignment = 'start' | 'center' | 'end';

export interface IAlignmentContext {
  readonly alignment: Alignment;
  readonly setAlignment: (alignment: Alignment) => void;
  readonly switchAlignment: () => void;
}
