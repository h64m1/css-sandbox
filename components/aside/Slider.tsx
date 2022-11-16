import { Slider as MantineSlider, Text } from '@mantine/core';

type Mark = {
  value: number;
  label: string;
};

interface Props {
  title: string;
  labelScale?: number;
  marks: Mark[];
}

export const Slider = (props: Props) => {
  const scale: number = props.labelScale ?? 1.0;

  return (
    <>
      <Text>{props.title}</Text>

      <MantineSlider label={(value) => value * scale} marks={props.marks} />
    </>
  );
};
