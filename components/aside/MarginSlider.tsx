import { Slider } from 'components/parts/Slider';
import { Size } from 'components/const/size';
import { getMarks } from 'components/aside/Mark';
import {
  useMarginMutators,
  useMarginState,
} from 'components/state/margin-state';

export const MarginSlider = () => {
  const margin = useMarginState();
  const { changeMarginAll } = useMarginMutators();

  const marks = getMarks(Size.width.scale);

  return (
    <Slider
      title="Margin"
      value={0}
      step={Size.width.step}
      min={Size.width.min}
      max={Size.width.max}
      labelScale={Size.width.scale}
      marks={marks}
      onChange={() => {}}
    />
  );
};
