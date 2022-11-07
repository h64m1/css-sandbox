import { Aside as MantineAside } from '@mantine/core';

const Section = MantineAside.Section;

export const Aside = () => {
  return (
    <MantineAside
      hidden
      hiddenBreakpoint="sm"
      width={{ sm: 200, lg: 300 }}
      p="md"
    >
      <Section>aside1</Section>
      <Section>aside2</Section>
      <Section>aside3</Section>
    </MantineAside>
  );
};
