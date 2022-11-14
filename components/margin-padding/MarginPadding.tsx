import { useMantineTheme } from '@mantine/styles';
import { StyledBox } from 'components/parts/StyledBox';
import { forwardRef, useRef } from 'react';
import { PropsWithChildren } from 'react';

export const MarginPadding = () => {
  const ref = useRef<HTMLDivElement>(null);

  // TODO: stateを作る
  const height = 100;
  const width = 600;
  const margin = 10;
  const padding = 20;
  const { colors } = useMantineTheme();

  return (
    <Margin
      height={height}
      width={width}
      backgroundColor={colors.orange[4]}
      ref={ref}
    >
      <Padding
        height={height - margin}
        width={width - margin}
        backgroundColor={colors.green[4]}
      >
        <Base
          height={height - margin - padding}
          width={width - margin - padding}
          backgroundColor={colors.gray[0]}
        >
          margin padding
        </Base>
      </Padding>
    </Margin>
  );
};

interface Props {
  height: number;
  width: number;
  backgroundColor: string;
}

const Margin = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (props: PropsWithChildren<Props>, ref) => {
    return (
      <StyledBox
        height={props.height}
        width={props.width}
        backgroundColor={props.backgroundColor}
        ref={ref}
      >
        {props.children}
      </StyledBox>
    );
  },
);

Margin.displayName = 'Margin';

const Padding = (props: PropsWithChildren<Props>) => {
  return (
    <StyledBox
      height={props.height}
      width={props.width}
      backgroundColor={props.backgroundColor}
    >
      {props.children}
    </StyledBox>
  );
};

const Base = (props: PropsWithChildren<Props>) => {
  return (
    <StyledBox
      height={props.height}
      width={props.width}
      backgroundColor={props.backgroundColor}
    >
      {props.children}
    </StyledBox>
  );
};
