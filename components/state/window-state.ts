import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type WindowState = {
  width: number;
  height: number;
};

const windowState = atom<WindowState>({
  key: 'windowState',
  default: { width: 0, height: 0 },
});

export const useWindowState = () => {
  return useRecoilValue(windowState);
};

export const useWindowMutators = () => {
  const state = useWindowState();
  const setState = useSetRecoilState(windowState);

  const changeWidth = useCallback(
    (width: { main: number; nav: number; aside: number }) => {
      const factor = 1.2;
      setState({
        width: Math.trunc(width.main - (width.nav + width.aside) * factor),
        height: state.height,
      });
    },
    [setState, state.height],
  );

  return { changeWidth };
};
