import { Group, Header as MantineHeader } from '@mantine/core';
import { Icon } from 'components/header/theme/Icon';
import { TitleHeader } from 'components/header/TitleHeader';

export const Header = () => (
  <MantineHeader height={60} p="md">
    <Group position="apart">
      <TitleHeader />

      <Icon />
    </Group>
  </MantineHeader>
);
