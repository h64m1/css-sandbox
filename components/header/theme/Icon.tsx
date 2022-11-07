import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon } from '@tabler/icons';

export const Icon = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const handleClick = () => {
    toggleColorScheme();
  };

  return (
    <ActionIcon variant="default" color={colorScheme} onClick={handleClick}>
      <IconMoon strokeWidth={1} />
    </ActionIcon>
  );
};
