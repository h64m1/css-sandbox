import { Select } from 'components/parts/Select';
import { useState } from 'react';

type MarginType = 'all' | 'tb_lr' | 't_lr_b' | 't_r_b_l';

const data = [
  { value: 'all', label: 'all' },
  { value: 'tb_lr', label: 'vertical | horizontal' },
  { value: 't_lr_b', label: 'top | horizontal | bottom' },
  { value: 't_r_b_l', label: 'top | right | bottom | left' },
];

export const MarginSelect = () => {
  const [marginType, setMarginType] = useState<MarginType>('all');

  return <Select label="Margin type" data={data} />;
};
