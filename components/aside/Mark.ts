export type Mark = {
  value: number;
  label: string;
};

export const getMarks = (scale: number): Mark[] => {
  return [20, 50, 80].map((e) => ({
    value: e * scale,
    label: `${e}%`,
  }));
};
