import { ActionIcon, Group, Text, UnstyledButton } from '@mantine/core';
import { IconSquareLetterC } from '@tabler/icons';
import { usePageUrl } from 'components/nav/hooks';

export const TitleHeader = () => {
  const { pushRoute } = usePageUrl();

  const handleClick = () => {
    pushRoute();
  };

  return (
    <UnstyledButton onClick={handleClick}>
      <Group>
        <ActionIcon variant="default">
          <IconSquareLetterC />
        </ActionIcon>

        <Text size="xl" weight={700}>
          CSS sandbox
        </Text>
      </Group>
    </UnstyledButton>
  );
};
