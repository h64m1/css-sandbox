import { Burger, Group, Text } from '@mantine/core';
import { useNavMutators } from 'components/state/nav-state';

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
