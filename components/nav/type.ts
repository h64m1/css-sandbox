export const PagePath = {
  margin: 0,
} as const;

export type PagePathType = typeof PagePath[keyof typeof PagePath];
