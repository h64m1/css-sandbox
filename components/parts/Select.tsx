import { Select as MantineSelect, SelectItem } from '@mantine/core';

interface Props {
  data: SelectItem[];
  label?: string;
  placeholder?: string;
}

export const Select = (props: Props) => (
  <MantineSelect
    label={props.label}
    placeholder={props.placeholder}
    data={props.data}
  />
);
