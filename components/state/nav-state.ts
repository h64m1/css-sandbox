import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type NavState = {
  opened: boolean;
};

const navState = atom<NavState>({
  key: 'navState',
  default: { opened: false },
});

export const useNavState = () => {
  return useRecoilValue(navState);
};

export const useNavMutators = () => {
  const setState = useSetRecoilState(navState);

  const toggleNavMenu = () => {
    setState((prev) => {
      return { opened: !prev.opened };
    });
  };

  return { toggleNavMenu };
};
