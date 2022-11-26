import { StyledBox } from 'components/parts/StyledBox';
import { useMarginState } from 'components/aside/margin/state/margin-state';
import { forwardRef, PropsWithChildren } from 'react';

interface Props {
  height: number;
  width: number;
  backgroundColor: string;
}

export const Margin = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (props: PropsWithChildren<Props>, ref) => {
    const margin = useMarginState();

    return (
      <StyledBox
        height={props.height}
        width={props.width}
        backgroundColor={props.backgroundColor}
        marginTop={margin.top}
        marginBottom={margin.bottom}
        marginLeft={margin.left}
        marginRight={margin.right}
        ref={ref}
      >
        {props.children}
      </StyledBox>
    );
  },
);

Margin.displayName = 'Margin';
