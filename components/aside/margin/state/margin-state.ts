import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type MarginState = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

const marginState = atom<MarginState>({
  key: 'marginState',
  default: { top: 0, bottom: 0, left: 0, right: 0 },
});

export const useMarginState = () => {
  return useRecoilValue(marginState);
};

export const useMarginMutators = () => {
  const margin = useMarginState();
  const setState = useSetRecoilState(marginState);

  const changeMarginAll = (value?: number) => {
    setState({
      top: value ?? margin.top,
      bottom: value ?? margin.bottom,
      left: value ?? margin.left,
      right: value ?? margin.right,
    });
  };

  return { changeMarginAll };
};
