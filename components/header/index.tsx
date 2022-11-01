import { Header as MantineHeader, Text } from '@mantine/core';

export const Header = () => (
  <MantineHeader height={60} p="md">
    <Text size="xl" weight={700}>
      CSS sandbox
    </Text>
  </MantineHeader>
);
