import { ColorScheme } from '@mantine/core';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type ThemeState = {
  colorScheme: ColorScheme;
};

const themeState = atom<ThemeState>({
  key: 'themeState',
  default: { colorScheme: 'light' },
});

export const useThemeState = () => {
  return useRecoilValue(themeState);
};

export const useThemeMutators = () => {
  const { colorScheme } = useThemeState();
  const setState = useSetRecoilState(themeState);

  const toggleColorScheme = (value?: ColorScheme) => {
    setState({
      colorScheme: value || (colorScheme === 'dark' ? 'light' : 'dark'),
    });
  };
  return { toggleColorScheme };
};
