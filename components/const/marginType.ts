export const MarginType = {
  all: 0, // change all margin together (e.g.) 'margin: 10'
  tb_lr: 1, // tb | lr (e.g.) 'margin: 10 20'
  t_lr_b: 2, // top | lr | bottom (e.g.) 'margin: 5 20 10'
  t_r_b_l: 3, // top | right | bottom | left (e.g.) 'margin: 10 5 20 10'
} as const;
