import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
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
        <ThemeIcon variant="default">
          <IconSquareLetterC />
        </ThemeIcon>

        <Text size="xl" weight={700}>
          CSS sandbox
        </Text>
      </Group>
    </UnstyledButton>
  );
};
