export type Address = string;
export type Stash = string;

export type NominatorConfig = {
  seed: string,
  maxNominations: number,
};

export type BooleanResult = [boolean|null, string|null];
export type NumberResult = [number|null, string|null];
