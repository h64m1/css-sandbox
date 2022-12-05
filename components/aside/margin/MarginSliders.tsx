import { Space } from '@mantine/core';
import { MarginAllSlider } from 'components/aside/margin/MarginAllSlider';
import {
  MarginBottomSlider,
  MarginHorizontalSlider,
  MarginLeftSlider,
  MarginRightSlider,
  MarginTopSlider,
  MarginVerticalSlider,
} from 'components/aside/margin/MarginEachSlider';
import { useMarginTypeState } from 'components/aside/margin/state/margin-type-state';
import { MarginType } from 'components/aside/margin/state/marginType';

export const MarginSliders = () => {
  const { marginType } = useMarginTypeState();

  return (
    <>
      {marginType === MarginType.all ? (
        <MarginAllSlider />
      ) : marginType === MarginType.tb_lr ? (
        <>
          <MarginVerticalSlider />

          <Space h="lg" />

          <MarginHorizontalSlider />
        </>
      ) : marginType === MarginType.t_lr_b ? (
        <>
          <MarginTopSlider />

          <Space h="lg" />

          <MarginHorizontalSlider />

          <Space h="lg" />

          <MarginBottomSlider />
        </>
      ) : marginType === MarginType.t_r_b_l ? (
        <>
          <MarginTopSlider />

          <Space h="lg" />

          <MarginRightSlider />

          <Space h="lg" />

          <MarginBottomSlider />

          <Space h="lg" />

          <MarginLeftSlider />
        </>
      ) : null}
    </>
  );
};
