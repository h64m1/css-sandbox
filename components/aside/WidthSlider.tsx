import { Slider, Text } from '@mantine/core';

export const WidthSlider = () => {
  return (
    <>
      <Text>Width</Text>

      <Slider
        label={(value) => value * 6}
        marks={[
          { value: 20, label: '30%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </>
  );
};
