import { Group, Header as MantineHeader, Text } from '@mantine/core';
import { Icon } from './theme/Icon';

export const Header = () => (
  <MantineHeader height={60} p="md">
    <Group position="apart">
      <Text size="xl" weight={700}>
        CSS sandbox
      </Text>

      <Icon />
    </Group>
  </MantineHeader>
);
