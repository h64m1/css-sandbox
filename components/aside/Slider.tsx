import { Slider as MantineSlider, Text } from '@mantine/core';

type Mark = {
  value: number;
  label: string;
};

interface Props {
  title: string;
  value: number;
  step: number;
  min: number;
  max: number;
  labelScale?: number;
  marks: Mark[];
  onChange: (value: number) => void;
}

export const Slider = (props: Props) => {
  const scale: number = props.labelScale ?? 1.0;

  return (
    <>
      <Text>{props.title}</Text>

      <MantineSlider
        step={props.step}
        min={props.min}
        max={props.max}
        value={props.value}
        marks={props.marks}
        onChange={props.onChange}
      />
    </>
  );
};
