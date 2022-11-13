import { Box } from '@mantine/core';

const defaultProps = {
  borderRadius: 2,
};

interface Props {
  borderRadius?: number; // px
  height: number;
  width: number;
}

export const StyledBox = (props: Props) => {
  return (
    <Box
      sx={(theme) => ({
        // TODO: backgroundColorもpropsにする
        backgroundColor: theme.colors.blue[2],
        borderRadius: props.borderRadius ?? defaultProps.borderRadius,
        height: props.height,
        width: props.width,
      })}
    >
      test
    </Box>
  );
};
