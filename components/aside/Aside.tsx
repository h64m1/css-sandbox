import { Aside as MantineAside } from '@mantine/core';
import { Slider } from 'components/aside/Slider';

export const Aside = () => {
  return (
    <MantineAside
      hidden
      hiddenBreakpoint="md"
      width={{ sm: 200, lg: 300 }}
      p="md"
    >
      <Slider
        title="Width"
        marks={[
          { value: 20, label: '30%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </MantineAside>
  );
};
