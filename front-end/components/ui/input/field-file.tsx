import { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FieldWrapper } from "./field-wrapper";

type FileFieldProps = ComponentProps<"input"> & {
  label: string;
  name: string;
};

export const FileInputField = ({
  label,
  name,
  required,
  ...props
}: FileFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required && "Campo Obrigatório",
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} {...props}>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.webp"
            onChange={(e) => {
              field.onChange(e.target.files ? e.target.files[0] : null);
            }}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            {...props}
          />
          {fieldState.error && (
            <p className="text-sm text-red-500">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  );
};
