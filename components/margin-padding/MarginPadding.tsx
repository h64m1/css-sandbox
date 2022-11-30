import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { Size } from 'components/const/size';
import { StyledBox } from 'components/parts/StyledBox';
import { PropsWithChildren, useRef } from 'react';
import { Margin } from 'components/margin-padding/Margin';
import { useWindowState } from 'components/state/window-state';

export const MarginPadding = () => {
  const ref = useRef<HTMLDivElement>(null);

  // TODO: stateを作る
  const margin = 10;
  const padding = 20;

  const { width } = useWindowState();
  const height = Size.height.max;

  const { colors } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Margin
      height={height}
      width={width}
      backgroundColor={colors.orange[4]}
      ref={ref}
    >
      <Base
        height={height}
        width={width}
        backgroundColor={
          colorScheme === 'dark' ? colors.dark[6] : colors.gray[0]
        }
      >
        margin
      </Base>
    </Margin>
  );
};

interface Props {
  height: number;
  width: number;
  backgroundColor: string;
}

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
