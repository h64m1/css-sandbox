import { MarginType } from 'components/const/marginType';
import { Select } from 'components/parts/Select';
import {
  useMarginTypeMutators,
  useMarginTypeState,
} from 'components/aside/margin/state/margin-type-state';

const data = [
  { value: MarginType.all, label: 'all' },
  { value: MarginType.tb_lr, label: 'vertical | horizontal' },
  { value: MarginType.t_lr_b, label: 'top | horizontal | bottom' },
  { value: MarginType.t_r_b_l, label: 'top | right | bottom | left' },
];

export const MarginSelect = () => {
  const { marginType } = useMarginTypeState();
  const { changeMarginType } = useMarginTypeMutators();

  return (
    <Select
      defaultValue={marginType}
      label="Margin type"
      data={data}
      onChange={changeMarginType}
    />
  );
};
