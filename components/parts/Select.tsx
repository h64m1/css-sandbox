import { Select as MantineSelect, SelectItem } from '@mantine/core';

interface Props {
  data: SelectItem[];
  label?: string;
  placeholder?: string;
  defaultValue: string;
  onChange: (value: string) => void;
}

export const Select = (props: Props) => (
  <MantineSelect
    label={props.label}
    placeholder={props.placeholder}
    data={props.data}
    defaultValue={props.defaultValue}
    onChange={props.onChange}
  />
);
