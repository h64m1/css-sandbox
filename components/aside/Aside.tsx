import { Aside as MantineAside } from '@mantine/core';
import { Margin } from 'components/aside/margin/Margin';

export const Aside = () => {
  return (
    <MantineAside
      hidden
      hiddenBreakpoint="md"
      width={{ sm: 200, lg: 300 }}
      p="md"
    >
      <Margin />
    </MantineAside>
  );
};
