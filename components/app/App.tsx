import { AppShell } from '@mantine/core';
import { Header } from '../header/Header';
import { Nav } from '../nav/Nav';

export const App = () => (
  <AppShell navbar={<Nav />} header={<Header />}>
    hello world
  </AppShell>
);
