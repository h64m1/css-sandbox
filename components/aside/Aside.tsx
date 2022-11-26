import { Aside as MantineAside, Space } from '@mantine/core';
import { MarginSlider } from 'components/aside/margin/MarginSlider';
import { MarginSelect } from 'components/aside/margin/MarginSelect';

export const Aside = () => {
  return (
    <MantineAside
      hidden
      hiddenBreakpoint="md"
      width={{ sm: 200, lg: 300 }}
      p="md"
    >
      <MarginSelect />

      <Space h="xl" />

      <MarginSlider />
    </MantineAside>
  );
};
