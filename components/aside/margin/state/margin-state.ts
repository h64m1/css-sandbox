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
  const state = useMarginState();
  const setState = useSetRecoilState(marginState);

  const changeMarginAll = (value: number) => {
    setState({ top: value, bottom: value, left: value, right: value });
  };

  const changeMarginVertical = (vertical: number) => {
    setState({ ...state, top: vertical, bottom: vertical });
  };

  const changeMarginHorizontal = (horizontal: number) => {
    setState({ ...state, left: horizontal, right: horizontal });
  };

  const changeMarginTop = (top: number) => {
    setState({ ...state, top });
  };

  const changeMarginBottom = (bottom: number) => {
    setState({ ...state, bottom });
  };

  const changeMarginLeft = (left: number) => {
    setState({ ...state, left });
  };

  const changeMarginRight = (right: number) => {
    setState({ ...state, right });
  };

  return {
    changeMarginAll,
    changeMarginVertical,
    changeMarginHorizontal,
    changeMarginTop,
    changeMarginBottom,
    changeMarginLeft,
    changeMarginRight,
  };
};
