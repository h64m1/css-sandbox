export const PagePath = {
  home: 0,
  margin: 1,
} as const;

export type PagePathType = typeof PagePath[keyof typeof PagePath];
