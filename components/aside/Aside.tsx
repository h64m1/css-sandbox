import { Aside as MantineAside } from '@mantine/core';
import { MarginAside } from 'components/aside/margin/MarginAside';
import { forwardRef } from 'react';

export const Aside = forwardRef<HTMLElement>((_, ref) => {
  return (
    <MantineAside
      hidden
      hiddenBreakpoint="md"
      width={{ sm: 200, lg: 300 }}
      p="md"
      ref={ref}
    >
      <MarginAside />
    </MantineAside>
  );
});

Aside.displayName = 'Aside';
