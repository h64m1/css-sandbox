import { useMantineTheme } from '@mantine/styles';
import { createStyles } from '@mantine/styles';
import { ColorSwatch, Container, Group } from '@mantine/core';
import { useMarginState } from 'components/state/margin-state';

const useStyles = createStyles((theme) => ({
  container: {
    height: '100%',
    margin: 0,
    padding: 0,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }`,
  },
}));

const numberOfBox = Array.from({ length: 4 }).map((_, i) => i);

export const Margin = () => {
  const { colors } = useMantineTheme();
  const { classes } = useStyles();

  const margin = useMarginState();

  const swatches = (offset: number) =>
    Object.keys(colors).flatMap((color) => {
      if (color !== 'dark') return [];

      return numberOfBox.map((i) => (
        <ColorSwatch
          key={`${color}_${i + offset}`}
          color={colors[color][i]}
          size={100}
          radius={0}
          sx={{
            marginTop: margin.top,
            marginBottom: margin.bottom,
            marginLeft: margin.left,
            marginRight: margin.right,
            color: colors.gray[0],
            transition: 'all .3s ease-out',
          }}
        >
          {colors[color][i]}
        </ColorSwatch>
      ));
    });

  return (
    <Container className={classes.container}>
      <Group noWrap spacing={0}>
        {swatches(0)}
      </Group>

      <Group noWrap spacing={0}>
        {swatches(4)}
      </Group>
    </Container>
  );
};
