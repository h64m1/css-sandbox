import { Group, Header as MantineHeader } from '@mantine/core';
import { Icon } from 'components/header/theme/Icon';
import { TitleHeader } from 'components/header/TitleHeader';
import { forwardRef } from 'react';

interface Props {}

export const Header = forwardRef<HTMLElement>((_, ref) => (
  <MantineHeader height={60} p="md" ref={ref}>
    <Group position="apart">
      <TitleHeader />

      <Icon />
    </Group>
  </MantineHeader>
));

Header.displayName = 'Header';
