import { Aside as MantineAside, Space } from '@mantine/core';
import { MarginSlider } from 'components/aside/MarginSlider';
import { Select } from 'components/parts/Select';

export const Aside = () => {
  return (
    <MantineAside
      hidden
      hiddenBreakpoint="md"
      width={{ sm: 200, lg: 300 }}
      p="md"
    >
      <Select label="Margin type" data={[{ value: 'test1', label: 'tblr' }]} />

      <Space h="xl" />

      <MarginSlider />
    </MantineAside>
  );
};
