import { Navbar } from '@mantine/core';
import { IconSquareLetterM } from '@tabler/icons';
import { usePageUrl } from 'components/nav/hooks';
import { MenuButton } from 'components/nav/MenuButton';
import { PagePath } from 'components/nav/type';
import { forwardRef } from 'react';

const data = [
  {
    icon: <IconSquareLetterM size={16} />,
    color: 'blue',
    label: 'Margin & Padding',
    pagePath: PagePath.margin,
  },
];

export const Nav = forwardRef<HTMLDivElement>((_, ref) => {
  const { pushRoute } = usePageUrl();

  const menus = data.map((menu) => (
    <Navbar.Section key={menu.label} ref={ref}>
      <MenuButton {...menu} onClick={() => pushRoute(menu.pagePath)} />
    </Navbar.Section>
  ));

  return (
    <Navbar
      width={{ sm: 300 }}
      height={'100%'}
      p="xs"
      hidden
      hiddenBreakpoint="sm"
    >
      {menus}
    </Navbar>
  );
});

Nav.displayName = 'Nav';
