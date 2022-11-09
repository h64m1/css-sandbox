import { Burger, Group, Header as MantineHeader, Text } from '@mantine/core';
import { Icon } from './theme/Icon';
import { TitleHeader } from './TitleHeader';

export const Header = () => (
  <MantineHeader height={60} p="md">
    <Group position="apart">
      <TitleHeader />

      <Icon />
    </Group>
  </MantineHeader>
);
