import { Navbar } from '@mantine/core';

export const Nav = () => (
  <Navbar width={{ base: 300 }} height={'100%'} p="md" hiddenBreakpoint="sm">
    <Navbar.Section>navbar 1</Navbar.Section>
    <Navbar.Section>navbar 2</Navbar.Section>
    <Navbar.Section>navbar 3</Navbar.Section>
  </Navbar>
);
