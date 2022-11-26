import { Space } from '@mantine/core';
import { MarginSelect } from 'components/aside/margin/MarginSelect';
import { MarginSlider } from 'components/aside/margin/MarginSlider';

export const Margin = () => {
  return (
    <>
      <MarginSelect />

      <Space h="xl" />

      <MarginSlider />
    </>
  );
};
