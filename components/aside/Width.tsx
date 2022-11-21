import { Slider } from 'components/aside/Slider';
import { useSizeMutators, useSizeState } from 'components/state/size-state';
import { Size } from 'components/const/size';
import { getMarks } from 'components/aside/Mark';

export const Width = () => {
  const { width } = useSizeState();
  const { changeWidth } = useSizeMutators();

  const marks = getMarks(Size.width.scale);

  return (
    <Slider
      title="Width"
      value={width}
      step={Size.width.step}
      min={Size.width.min}
      max={Size.width.max}
      labelScale={Size.width.scale}
      marks={marks}
      onChange={changeWidth}
    />
  );
};
