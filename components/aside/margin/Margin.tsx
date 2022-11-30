import { Space } from '@mantine/core';
import { MarginSelect } from 'components/aside/margin/MarginSelect';
import { MarginSliders } from 'components/aside/margin/MarginSliders';

export const Margin = () => {
  return (
    <>
      <MarginSelect />

      <Space h="xl" />

      <MarginSliders />
    </>
  );
};