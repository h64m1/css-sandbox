import { Box } from '@mantine/core';
import { forwardRef } from 'react';
import { PropsWithChildren } from 'react';

const defaultProps = {
  borderRadius: 2,
};

interface Props {
  height: number;
  width: number;
  backgroundColor?: string;
  border?: string;
  borderRadius?: number; // px
  marginTop?: number; // px
  marginBottom?: number; // px
  marginLeft?: number; // px
  marginRight?: number; // px
}

export const StyledBox = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (props: PropsWithChildren<Props>, ref) => {
    return (
      <Box
        ref={ref}
        sx={(theme) => ({
          backgroundColor: props.backgroundColor ?? theme.colors.blue[2],
          borderRadius: props.borderRadius ?? defaultProps.borderRadius,
          border: props.border,
          height: props.height,
          width: props.width,
          marginTop: props.marginTop ?? 0,
          marginBottom: props.marginBottom ?? 0,
          marginLeft: props.marginLeft ?? 0,
          marginRight: props.marginRight ?? 0,
        })}
      >
        {props.children}
      </Box>
    );
  },
);

StyledBox.displayName = 'StyledBox';
