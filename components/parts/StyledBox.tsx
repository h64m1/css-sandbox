import { Box } from '@mantine/core';
import { forwardRef } from 'react';
import { PropsWithChildren } from 'react';

const defaultProps = {
  borderRadius: 2,
};

interface Props {
  backgroundColor?: string;
  border?: string;
  borderRadius?: number; // px
  height: number;
  width: number;
}

export const StyledBox = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (props: PropsWithChildren<Props>, ref) => {
    return (
      <Box
        ref={ref}
        sx={(theme) => ({
          // TODO: backgroundColorもpropsにする
          backgroundColor: props.backgroundColor ?? theme.colors.blue[2],
          borderRadius: props.borderRadius ?? defaultProps.borderRadius,
          border: props.border,
          height: props.height,
          width: props.width,
        })}
      >
        {props.children}
      </Box>
    );
  },
);

StyledBox.displayName = 'StyledBox';
