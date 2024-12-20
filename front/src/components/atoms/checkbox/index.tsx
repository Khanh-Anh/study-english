import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import {
  Control,
  Controller,
  FieldValue,
  FieldValues,
  Path,
} from "react-hook-form";

interface OwnProps<Type extends FieldValues>
  extends Omit<CheckboxProps, "value"> {
  control: Control<FieldValue<Type>>;
  formField: Path<FieldValue<Type>>;
  value: boolean | number | string | null;
  label?: string;
}
export default function ControlledCheckbox<T extends FieldValues>({
  formField,
  control,
  ...props
}: OwnProps<T>): JSX.Element {
  return (
    <Controller
      control={control}
      name={formField}
      render={({ field }) => (
        props.label ? <FormControlLabel
          label={props.label}
          control={
            <Checkbox
              {...field}
              {...props}
              checked={field.value}
              value={field.value}
              required={props?.required}
              size={props?.size}
              onChange={field.onChange}
            />
          }
        /> : <Checkbox
          {...field}
          {...props}
          checked={field.value}
          value={field.value}
          disabled={props?.disabled}
          onChange={(event, value) => {
            field.onChange(value);
          }}
        />
      )}
    />
  );
}
