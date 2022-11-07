import { Navbar } from '@mantine/core';
import { IconSquareLetterF } from '@tabler/icons';
import { MenuButton } from './MenuButton';

const data = [
  {
    icon: <IconSquareLetterF size={16} />,
    color: 'blue',
    label: 'Flex',
  },
];

export const Nav = () => {
  const menus = data.map((menu) => (
    <Navbar.Section key={menu.label}>
      <MenuButton {...menu} />
    </Navbar.Section>
  ));

  return (
    <Navbar width={{ base: 300 }} height={'100%'} p="md" hiddenBreakpoint="sm">
      {menus}
    </Navbar>
  );
};
