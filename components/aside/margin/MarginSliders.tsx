import { useMarginTypeState } from 'components/aside/margin/state/margin-type-state';
import { MarginType } from 'components/const/marginType';
import {
  useMarginMutators,
  useMarginState,
} from 'components/aside/margin/state/margin-state';
import { MarginSlider } from 'components/aside/margin/MarginSlider';
import { Space } from '@mantine/core';

export const MarginSliders = () => {
  const { marginType } = useMarginTypeState();
  const { titles, margins, onChanges } = useMarginProps(marginType);

  return (
    <>
      {margins.map((margin, index) => {
        const title = titles[index];
        const onChange = onChanges[index];

        return (
          <>
            {index !== 0 && <Space h="lg" />}

            <MarginSlider
              key={index}
              title={title}
              margin={margin}
              onChange={onChange}
            />
          </>
        );
      })}
    </>
  );
};

const useMarginProps = (marginType: MarginType) => {
  const state = useMarginState();
  const mutators = useMarginMutators();

  switch (marginType) {
    case MarginType.all:
      return {
        titles: ['all'],
        margins: [state.top],
        onChanges: [mutators.changeMarginAll],
      };

    case MarginType.tb_lr:
      return {
        titles: ['vertical', 'horizontal'],
        margins: [state.top, state.left],
        onChanges: [
          mutators.changeMarginHorizontal,
          mutators.changeMarginVertical,
        ],
      };

    case MarginType.t_lr_b:
      return {
        titles: ['top', 'horizontal', 'bottom'],
        margins: [state.top, state.left, state.bottom],
        onChanges: [
          mutators.changeMarginTop,
          mutators.changeMarginHorizontal,
          mutators.changeMarginBottom,
        ],
      };

    case MarginType.t_r_b_l:
      return {
        titles: ['top', 'right', 'bottom', 'left'],
        margins: [state.top, state.right, state.bottom, state.left],
        onChanges: [
          mutators.changeMarginTop,
          mutators.changeMarginRight,
          mutators.changeMarginBottom,
          mutators.changeMarginLeft,
        ],
      };
  }
};
