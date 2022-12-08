import { MARGIN } from 'components/aside/margin/margin-const';
import { getMarks } from 'components/aside/Mark';
import { Slider } from 'components/parts/Slider';

interface Props {
  title: string;
  margin: number;
  onChange: (value: number) => void;
}

export const MarginSlider = (props: Props) => {
  const marks = getMarks(MARGIN.scale);

  return (
    <Slider
      title={props.title}
      value={props.margin}
      step={MARGIN.step}
      min={MARGIN.min}
      max={MARGIN.max}
      labelScale={MARGIN.scale}
      marks={marks}
      onChange={props.onChange}
    />
  );
};
