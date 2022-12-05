import { Space } from '@mantine/core';
import { MarginSelect } from 'components/aside/margin/select/MarginSelect';
import { MarginSliders } from 'components/aside/margin/slider/MarginSliders';

export const MarginAside = () => {
  return (
    <>
      <MarginSelect />

      <Space h="xl" />

      <MarginSliders />
    </>
  );
};
