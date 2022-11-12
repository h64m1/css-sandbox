import { Navbar } from '@mantine/core';
import { IconSquareLetterM } from '@tabler/icons';
import { useNavState } from 'components/state/nav-state';
import { usePageUrl } from 'components/nav/hooks';
import { MenuButton } from 'components/nav/MenuButton';
import { PagePath } from 'components/nav/type';

const data = [
  {
    icon: <IconSquareLetterM size={16} />,
    color: 'blue',
    label: 'Margin & Padding',
    pagePath: PagePath.margin,
  },
];

export const Nav = () => {
  const { opened } = useNavState();
  const { pushRoute } = usePageUrl();

  const menus = data.map((menu) => (
    <Navbar.Section key={menu.label}>
      <MenuButton
        {...menu}
        opened={opened}
        onClick={() => pushRoute(menu.pagePath)}
      />
    </Navbar.Section>
  ));

  return (
    <Navbar
      width={{ base: opened ? 67 : 300 }}
      height={'100%'}
      p="xs"
      hidden
      hiddenBreakpoint="sm"
    >
      {menus}
    </Navbar>
  );
};
