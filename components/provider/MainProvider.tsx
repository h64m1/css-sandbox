import { AppShell, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { Aside } from 'components/aside/Aside';
import { Header } from 'components/header/Header';
import { Nav } from 'components/nav/Nav';
import { useThemeMutators, useThemeState } from 'components/state/theme-state';
import { useWindowMutators } from 'components/state/window-state';
import { PropsWithChildren, useEffect } from 'react';

export const MainProvider = (props: PropsWithChildren) => {
  const { colorScheme } = useThemeState();
  const { toggleColorScheme } = useThemeMutators();

  const header = useElementSize();
  const nav = useElementSize();
  const aside = useElementSize();

  const { changeWidth } = useWindowMutators();

  useEffect(() => {
    changeWidth({ main: header.width, nav: nav.width, aside: aside.width });
  }, [header.width, nav.width, aside.width, changeWidth]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <AppShell
          navbar={<Nav ref={nav.ref} />}
          header={<Header ref={header.ref} />}
          aside={<Aside ref={aside.ref} />}
        >
          {props.children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
