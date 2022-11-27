import { getMarks } from 'components/aside/Mark';
import { Margin } from 'components/const/margin';
import { Slider } from 'components/parts/Slider';

interface Props {
  title: string;
  margin: number;
  onChange: (value: number) => void;
}

export const MarginSlider = (props: Props) => {
  const marks = getMarks(Margin.scale);

  return (
    <Slider
      title={props.title}
      value={props.margin}
      step={Margin.step}
      min={Margin.min}
      max={Margin.max}
      labelScale={Margin.scale}
      marks={marks}
      onChange={props.onChange}
    />
  );
};
