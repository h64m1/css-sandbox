import { Aside as MantineAside } from '@mantine/core';
import { Margin } from 'components/aside/margin/Margin';
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
      <Margin />
    </MantineAside>
  );
});

Aside.displayName = 'Aside';
