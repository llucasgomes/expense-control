import { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { FieldWrapper } from "./field-wrapper";
import { Person } from "@/types/person";

type SelectionFieldProps = ComponentProps<typeof Select> & {
  label: string;
  name: string;
  list: Person[];
};

export const SelectionField = ({
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
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione um destinatário" />
            </SelectTrigger>

            <SelectContent>
              <>
                <SelectItem value="0" disabled>
                  Selecione um destinatário
                </SelectItem>
                {list.map((person) => (
                  <SelectItem key={person.id} value={person.id.toString()}>
                    {person.name}
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
