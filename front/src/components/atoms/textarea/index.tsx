import { TextareaAutosize } from "@mui/material";
import {
  Control,
  Controller,
  FieldValue,
  FieldValues,
  Path,
} from "react-hook-form";

interface InputProps {
  label?: string;
  errorMessage?: string;
  maxLength?: number;
  placeholder?: string;
}
interface OwnProps<Type extends FieldValues>
  extends Omit<InputProps, "onChange" | "value"> {
  control: Control<FieldValue<Type>>;
  formField: Path<FieldValue<Type>>;
}
export default function ControlledTextarea<T extends FieldValues>({
  formField,
  control,
  ...props
}: OwnProps<T>): JSX.Element {
  return (
    <Controller
      control={control}
      name={formField}
      render={({ field }) => (
        <TextareaAutosize
          {...props}
          {...field}
          maxLength={props?.maxLength}
          placeholder={props?.placeholder}
        />
      )}
    />
  );
}
