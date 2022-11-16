import { Aside as MantineAside } from '@mantine/core';
import { Slider } from 'components/aside/Slider';
import { Size } from 'components/const/size';
import { useSizeMutators, useSizeState } from 'components/state/size-state';

export const Aside = () => {
  const { width } = useSizeState();
  const { changeWidth } = useSizeMutators();

  const marks = getMarks();

  return (
    <MantineAside
      hidden
      hiddenBreakpoint="md"
      width={{ sm: 200, lg: 300 }}
      p="md"
    >
      <Slider
        title="Width"
        value={width}
        step={Size.width.step}
        min={Size.width.min}
        max={Size.width.max}
        labelScale={Size.width.scale}
        marks={marks}
        onChange={changeWidth}
      />
    </MantineAside>
  );
};

const getMarks = () => {
  return [20, 50, 80].map((e) => ({
    value: e * Size.width.scale,
    label: `${e}%`,
  }));
};
