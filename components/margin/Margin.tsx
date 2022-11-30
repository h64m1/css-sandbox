import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { createStyles } from '@mantine/styles';
import { Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: '100%',
    backgroundColor: theme.colors.blue[1],
  },
}));

export const Margin = () => {
  const { colors } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const { classes } = useStyles();

  return <Container className={classes.container}></Container>;
};
