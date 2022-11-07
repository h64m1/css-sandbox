import { AppShell, MantineProvider } from '@mantine/core';
import { Header } from '../header/Header';
import { Nav } from '../nav/Nav';

export const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
      }}
    >
      <AppShell navbar={<Nav />} header={<Header />}>
        hello world
      </AppShell>
    </MantineProvider>
  );
};
