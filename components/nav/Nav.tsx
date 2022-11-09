import { Navbar } from '@mantine/core';
import { IconSquareLetterF } from '@tabler/icons';
import { useNavState } from '../state/nav-state';
import { MenuButton } from './MenuButton';

const data = [
  {
    icon: <IconSquareLetterF size={16} />,
    color: 'blue',
    label: 'Flex',
  },
];

export const Nav = () => {
  const { opened } = useNavState();

  const menus = data.map((menu) => (
    <Navbar.Section key={menu.label}>
      <MenuButton {...menu} opened={opened} />
    </Navbar.Section>
  ));

  return (
    <Navbar
      width={{ base: opened ? 70 : 300 }}
      height={'100%'}
      p="xs"
      hiddenBreakpoint="sm"
    >
      {menus}
    </Navbar>
  );
};
