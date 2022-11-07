import { AppShell, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Header } from '../header/Header';
import { Nav } from '../nav/Nav';
import { useThemeMutators, useThemeState } from '../state/theme-state';

export const App = () => {
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
        <AppShell navbar={<Nav />} header={<Header />}>
          hello world
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
