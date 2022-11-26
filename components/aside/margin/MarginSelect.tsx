import { getMarginType, MarginType } from 'components/const/marginType';
import { Select } from 'components/parts/Select';
import { useState } from 'react';

const data = [
  { value: MarginType.all, label: 'all' },
  { value: MarginType.tb_lr, label: 'vertical | horizontal' },
  { value: MarginType.t_lr_b, label: 'top | horizontal | bottom' },
  { value: MarginType.t_r_b_l, label: 'top | right | bottom | left' },
];

export const MarginSelect = () => {
  const [marginType, setMarginType] = useState<MarginType>(MarginType.all);

  const handleChange = (value: string) => {
    const type = getMarginType(value);
    setMarginType(type);
  };

  return (
    <Select
      defaultValue={marginType}
      label="Margin type"
      data={data}
      onChange={handleChange}
    />
  );
};
