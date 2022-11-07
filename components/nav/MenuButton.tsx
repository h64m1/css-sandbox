import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';

interface Props {
  icon: React.ReactNode;
  label: string;
  color: string;
}

export const MenuButton = (props: Props) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={props.color} variant="light">
          {props.icon}
        </ThemeIcon>

        <Text size="sm">{props.label}</Text>
      </Group>
    </UnstyledButton>
  );
};
