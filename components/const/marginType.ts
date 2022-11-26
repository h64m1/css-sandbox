export const MarginType = {
  all: 'all', // change all margin together (e.g.) 'margin: 10'
  tb_lr: 'tb_lr', // tb | lr (e.g.) 'margin: 10 20'
  t_lr_b: 't_lr_b', // top | lr | bottom (e.g.) 'margin: 5 20 10'
  t_r_b_l: 't_r_b_l', // top | right | bottom | left (e.g.) 'margin: 10 5 20 10'
} as const;

export type MarginType = typeof MarginType[keyof typeof MarginType];

export const getMarginType = (value: string) => {
  switch (value) {
    case MarginType.all:
      return MarginType.all;

    case MarginType.tb_lr:
      return MarginType.tb_lr;

    case MarginType.t_lr_b:
      return MarginType.t_lr_b;

    case MarginType.t_r_b_l:
      return MarginType.t_r_b_l;

    default:
      return MarginType.all;
  }
};
