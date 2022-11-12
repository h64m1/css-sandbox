import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';

interface Props {
  icon: React.ReactNode;
  label: string;
  color: string;
  opened: boolean;
  onClick: () => void;
}

export const MenuButton = (props: Props) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.md,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
      onClick={props.onClick}
    >
      <Group>
        <ThemeIcon color={props.color} variant="light">
          {props.icon}
        </ThemeIcon>

        {!props.opened && <Text size="sm">{props.label}</Text>}
      </Group>
    </UnstyledButton>
  );
};
