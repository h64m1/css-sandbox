import { Slider } from 'components/aside/Slider';
import { useSizeMutators, useSizeState } from 'components/state/size-state';
import { Size } from 'components/const/size';
import { Mark } from 'components/aside/Mark';

interface Props {
  marks: Mark[];
}

export const Width = (props: Props) => {
  const { width } = useSizeState();
  const { changeWidth } = useSizeMutators();

  return (
    <Slider
      title="Width"
      value={width}
      step={Size.width.step}
      min={Size.width.min}
      max={Size.width.max}
      labelScale={Size.width.scale}
      marks={props.marks}
      onChange={changeWidth}
    />
  );
};
