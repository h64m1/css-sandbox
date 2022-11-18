import { Aside as MantineAside } from '@mantine/core';
import { getMarks } from 'components/aside/Mark';
import { Width } from 'components/aside/Width';

export const Aside = () => {
  const marks = getMarks();

  return (
    <MantineAside
      hidden
      hiddenBreakpoint="md"
      width={{ sm: 200, lg: 300 }}
      p="md"
    >
      <Width marks={marks} />
    </MantineAside>
  );
};
