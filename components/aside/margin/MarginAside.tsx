import { Divider, Space } from '@mantine/core';
import { MarginSelect } from 'components/aside/margin/select/MarginSelect';
import { MarginSliders } from 'components/aside/margin/slider/MarginSliders';
import { MarginText } from 'components/aside/margin/text/MarginText';

export const MarginAside = () => {
  return (
    <>
      <MarginText />

      <Divider
        sx={{
          marginTop: 24,
          marginBottom: 12,
        }}
      />

      <>
        <MarginSelect />

        <Space h="xl" />

        <MarginSliders />
      </>
    </>
  );
};
