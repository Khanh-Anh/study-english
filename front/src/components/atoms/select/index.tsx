import { MenuItem, Select, SelectProps } from "@mui/material";
import {
  Control,
  Controller,
  FieldValue,
  FieldValues,
  Path,
} from "react-hook-form";

interface OwnProps<Type extends FieldValues>
  extends Omit<SelectProps, "children"> {
  control: Control<FieldValue<Type>>;
  formField: Path<FieldValue<Type>>;
  options: { label: string; value: string; icon?: JSX.Element }[];
}
export default function ControlledSelect<T extends FieldValues>({
  formField,
  control,
  options,
  ...props
}: OwnProps<T>): JSX.Element {
  return (
    <Controller
      control={control}
      name={formField}
      render={({ field }) => (
        <Select
          {...field}
          {...props}
          renderValue={(value) => `${options.find(item => item.value === value)?.label}`}
        >
          {options.map((item, index) => (
            <MenuItem value={item.value} key={index}>
              {item.icon}{' '}{item.label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
}
