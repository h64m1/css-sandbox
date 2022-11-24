import { Slider } from 'components/parts/Slider';
import { useSizeMutators, useSizeState } from 'components/state/size-state';
import { Size } from 'components/const/size';
import { getMarks } from 'components/aside/Mark';

export const Height = () => {
  const { height } = useSizeState();
  const { changeHeight } = useSizeMutators();

  const marks = getMarks(Size.height.scale);

  return (
    <Slider
      title="Height"
      value={height}
      step={Size.height.step}
      min={Size.height.min}
      max={Size.height.max}
      labelScale={Size.height.scale}
      marks={marks}
      onChange={changeHeight}
    />
  );
};
