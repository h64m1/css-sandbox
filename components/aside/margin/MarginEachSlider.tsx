import { MarginSlider } from 'components/aside/margin/MarginSlider';
import {
  marginSelectors,
  useSetMarginBottom,
  useSetMarginHorizontal,
  useSetMarginLeft,
  useSetMarginRight,
  useSetMarginTop,
  useSetMarginVertical,
} from 'components/state/margin-state';

export const MarginTopSlider = () => {
  const { useTop } = marginSelectors;
  const { changeMargin } = useSetMarginTop();

  return <MarginSlider title="top" margin={useTop()} onChange={changeMargin} />;
};

export const MarginBottomSlider = () => {
  const { useBottom } = marginSelectors;
  const { changeMargin } = useSetMarginBottom();

  return (
    <MarginSlider title="bottom" margin={useBottom()} onChange={changeMargin} />
  );
};

export const MarginLeftSlider = () => {
  const { useLeft } = marginSelectors;
  const { changeMargin } = useSetMarginLeft();

  return (
    <MarginSlider title="left" margin={useLeft()} onChange={changeMargin} />
  );
};

export const MarginRightSlider = () => {
  const { useRight } = marginSelectors;
  const { changeMargin } = useSetMarginRight();

  return (
    <MarginSlider title="right" margin={useRight()} onChange={changeMargin} />
  );
};

export const MarginHorizontalSlider = () => {
  const { useHorizontal } = marginSelectors;
  const { changeMargin } = useSetMarginHorizontal();

  return (
    <MarginSlider
      title="horizontal"
      margin={useHorizontal()}
      onChange={changeMargin}
    />
  );
};

export const MarginVerticalSlider = () => {
  const { useVertical } = marginSelectors;
  const { changeMargin } = useSetMarginVertical();

  return (
    <MarginSlider
      title="vertical"
      margin={useVertical()}
      onChange={changeMargin}
    />
  );
};
