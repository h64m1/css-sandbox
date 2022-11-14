import { useElementSize } from '@mantine/hooks';
import { StyledBox } from 'components/parts/StyledBox';
import { PropsWithChildren } from 'react';

export const MarginPadding = () => {
  // TODO: stateを作る
  const height = 100;
  const width = 600;

  return (
    <Margin height={height} width={width}>
      margin padding
    </Margin>
  );
};

interface MarginProps {
  height: number;
  width: number;
}

const Margin = (props: PropsWithChildren<MarginProps>) => {
  const { ref, width, height } = useElementSize();

  return (
    <StyledBox height={props.height} width={props.width} ref={ref}>
      {props.children}
    </StyledBox>
  );
};
