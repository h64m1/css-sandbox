import { AppShell, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Aside } from 'components/aside/Aside';
import { Header } from 'components/header/Header';
import { Nav } from 'components/nav/Nav';
import { useThemeMutators, useThemeState } from 'components/state/theme-state';
import { PropsWithChildren } from 'react';

export const MainProvider = (props: PropsWithChildren) => {
  const { colorScheme } = useThemeState();
  const { toggleColorScheme } = useThemeMutators();

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
        <AppShell navbar={<Nav />} header={<Header />} aside={<Aside />}>
          {props.children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
