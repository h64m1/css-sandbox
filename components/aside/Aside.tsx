import { Aside as MantineAside, Space } from '@mantine/core';
import { Height } from 'components/aside/Height';
import { Width } from 'components/aside/Width';

export const Aside = () => {
  return (
    <MantineAside
      hidden
      hiddenBreakpoint="md"
      width={{ sm: 200, lg: 300 }}
      p="md"
    >
      <Width />

      <Space h="xl" />

      <Height />
    </MantineAside>
  );
};
