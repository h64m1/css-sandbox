import { Size } from 'components/const/size';

export type Mark = {
  value: number;
  label: string;
};

export const getMarks = (): Mark[] => {
  return [20, 50, 80].map((e) => ({
    value: e * Size.width.scale,
    label: `${e}%`,
  }));
};
