import { Code } from '@mantine/core';
import { useMarginState } from 'components/state/margin-state';
import { MarginType } from 'components/aside/margin/state/marginType';
import { useMarginTypeState } from 'components/aside/margin/state/margin-type-state';

type MarginState = ReturnType<typeof useMarginState>;

export const MarginText = () => {
  const margin = useMarginState();
  const { marginType } = useMarginTypeState();

  const text = convertText(marginType, margin);

  return (
    <Code
      block
      sx={(theme) => ({
        border: `1px solid ${theme.colors.gray[4]}`,
        padding: '12px 0',
      })}
    >
      {text}
    </Code>
  );
};

const convertText = (marginType: MarginType, margin: MarginState) => {
  const marginAll = `{
  margin: ${margin.all};
}`;

  const marginTb_Lr = `{
  margin: ${margin.vertical} ${margin.horizontal};
}`;

  const marginT_LR_B = `{
  margin: ${margin.top} ${margin.horizontal} ${margin.bottom};
}`;

  const marginT_R_B_L = `{
  margin: ${margin.top} ${margin.right} ${margin.bottom} ${margin.left};
}`;

  switch (marginType) {
    case MarginType.all:
      return marginAll;

    case MarginType.tb_lr:
      return marginTb_Lr;

    case MarginType.t_lr_b:
      return marginT_LR_B;

    case MarginType.t_r_b_l:
      return marginT_R_B_L;
  }
};
