import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

export const Icon = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const handleClick = () => {
    toggleColorScheme();
  };

  return (
    <ActionIcon variant="default" color={colorScheme} onClick={handleClick}>
      {colorScheme === 'dark' ? (
        <IconSun strokeWidth={1} />
      ) : (
        <IconMoonStars strokeWidth={1} />
      )}
    </ActionIcon>
  );
};
