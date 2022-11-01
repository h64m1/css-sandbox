import { AppShell, Navbar } from '@mantine/core';
import { Header } from '../header';
import { Nav } from '../nav';

export const App = () => (
  <AppShell navbar={<Nav />} header={<Header />}>
    hello world
  </AppShell>
);
