import { Size } from 'components/const/size';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type SizeState = {
  width: number;
};

const sizeState = atom<SizeState>({
  key: 'sizeState',
  default: { width: Size.width.max },
});

export const useSizeState = () => {
  return useRecoilValue(sizeState);
};

export const useSizeMutators = () => {
  const setState = useSetRecoilState(sizeState);

  const changeWidth = (value?: number) => {
    setState({
      width: value || 0,
    });
  };
  return { changeWidth };
};
