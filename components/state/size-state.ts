import { Size } from 'components/const/size';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type SizeState = {
  width: number;
  height: number;
};

const sizeState = atom<SizeState>({
  key: 'sizeState',
  default: { width: Size.width.max, height: Size.height.max },
});

export const useSizeState = () => {
  return useRecoilValue(sizeState);
};

export const useSizeMutators = () => {
  const size = useSizeState();
  const setState = useSetRecoilState(sizeState);

  const changeWidth = (value?: number) => {
    setState({
      width: value ?? size.width,
      height: size.height,
    });
  };

  const changeHeight = (value?: number) => {
    setState({
      width: size.width,
      height: value ?? size.height,
    });
  };

  return { changeWidth, changeHeight };
};
