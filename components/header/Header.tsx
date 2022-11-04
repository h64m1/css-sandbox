import { Group, Header as MantineHeader, Text, ThemeIcon } from '@mantine/core';
import { IconMoon, IconMoon2, IconSun } from '@tabler/icons';

export const Header = () => (
  <MantineHeader height={60} p="md">
    <Group position="apart">
      <Text size="xl" weight={700}>
        CSS sandbox
      </Text>

      <ThemeIcon variant="default" color="dark">
        <IconMoon strokeWidth={1} />
      </ThemeIcon>
    </Group>
  </MantineHeader>
);
