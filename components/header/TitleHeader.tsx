import { Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Icon123 } from '@tabler/icons';
import { useNavMutators, useNavState } from '../state/nav-state';

export const TitleHeader = () => {
  const { toggleNavMenu } = useNavMutators();

  return (
    <Group>
      <Burger opened={false} size="sm" onClick={toggleNavMenu} />

      <Text size="xl" weight={700}>
        CSS sandbox
      </Text>
    </Group>
  );
};
