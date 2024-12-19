import { TextField, TextFieldProps } from "@mui/material";
import { ReactNode, FocusEvent } from "react";
import {
  Control,
  Controller,
  FieldValue,
  FieldValues,
  Path,
} from "react-hook-form";

interface InputProps {
  onChange?: (value: any) => void;
  onBlur?: (e: FocusEvent<Element>) => void
}
interface OwnProps<Type extends FieldValues> extends Omit<InputProps & TextFieldProps, "value"> {
  control: Control<FieldValue<Type>>;
  formField: Path<FieldValue<Type>>;
}
function ControlledInput<T extends FieldValues>({
  formField,
  control,
  ...props
}: OwnProps<T>): JSX.Element {

  return (
    <Controller
      control={control}
      name={formField}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...props}
          {...field}
          className={props?.className}
          error={!!error}
          helperText={error ? error?.message : ""}
          placeholder={props?.placeholder}
          type={props?.type || "text"}
          variant={props?.variant || "outlined"}
          onBlur={props?.onBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(event.target.value);
            if (props?.onChange) props?.onChange?.(event.target.value as string);
          }}
        />
      )}
    />
  );
}

export default (ControlledInput);
