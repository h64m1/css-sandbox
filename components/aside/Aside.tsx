import { Aside as MantineAside } from '@mantine/core';
import { WidthSlider } from 'components/aside/WidthSlider';

const Section = MantineAside.Section;

export const Aside = () => {
  return (
    <MantineAside
      hidden
      hiddenBreakpoint="md"
      width={{ sm: 200, lg: 300 }}
      p="md"
    >
      <WidthSlider />
    </MantineAside>
  );
};
