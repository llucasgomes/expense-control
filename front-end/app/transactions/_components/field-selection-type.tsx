import { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Person } from "@/types/person";
import { FieldWrapper } from "@/components/ui/select/field-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

type SelectionFieldProps = ComponentProps<typeof Select> & {
  label: string;
  name: string;
  list: {
    id: number;
    type: string;
  }[];
};

export const SelectionFieldType = ({
  label,
  name,
  list,
  required,
  ...props
}: SelectionFieldProps) => {
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
          <Select
            {...field}
            {...props}
            value={field.value ?? ""}
            onValueChange={field.onChange}
          >
            <SelectTrigger>
              {field.value
                ? list.find((p) => p.id.toString() === field.value)?.type
                : "Selecione um Tipo"}
            </SelectTrigger>

            <SelectContent>
              <>
                <SelectItem value="0" disabled>
                  Selecione um Tipo
                </SelectItem>
                {list.map((person) => (
                  <SelectItem key={person.id} value={person.id.toString()}>
                    {person.type}
                  </SelectItem>
                ))}
              </>
            </SelectContent>
          </Select>

          {fieldState.error && (
            <p className="text-sm text-red-500">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  );
};
