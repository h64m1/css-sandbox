import { MarginAllSlider } from 'components/aside/margin/slider/MarginAllSlider';
import {
  MarginBottomSlider,
  MarginHorizontalSlider,
  MarginLeftSlider,
  MarginRightSlider,
  MarginTopSlider,
  MarginVerticalSlider,
} from 'components/aside/margin/slider/MarginEachSlider';
import { useMarginTypeState } from 'components/aside/margin/state/margin-type-state';
import { MarginType } from 'components/aside/margin/state/marginType';
import { SpaceLarge } from 'components/parts/space/Space';

export const MarginSliders = () => {
  const { marginType } = useMarginTypeState();

  return (
    <>
      {marginType === MarginType.all ? (
        <MarginAllSlider />
      ) : marginType === MarginType.tb_lr ? (
        <>
          <MarginVerticalSlider />

          <SpaceLarge />

          <MarginHorizontalSlider />
        </>
      ) : marginType === MarginType.t_lr_b ? (
        <>
          <MarginTopSlider />

          <SpaceLarge />

          <MarginHorizontalSlider />

          <SpaceLarge />

          <MarginBottomSlider />
        </>
      ) : marginType === MarginType.t_r_b_l ? (
        <>
          <MarginTopSlider />

          <SpaceLarge />

          <MarginRightSlider />

          <SpaceLarge />

          <MarginBottomSlider />

          <SpaceLarge />

          <MarginLeftSlider />
        </>
      ) : null}
    </>
  );
};
