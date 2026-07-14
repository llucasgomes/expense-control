"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputField } from "@/components/ui/input/field";
import { SelectionField } from "@/components/ui/select/field-selection";
import { useDataPeople } from "@/hooks/PeopleData/useDataPeople";
import { useCreateMutationTransaction } from "@/hooks/TransactionsData/useMutationTransaction";
import { CreateTransactionDto } from "@/types/Transaction";

import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { SelectionFieldType } from "./field-selection-type";

type FormData = CreateTransactionDto & {};

export const TransactionForm = () => {
  const { data } = useDataPeople();
  const methods = useForm<FormData>();
  const { mutateAsync, isPending } = useCreateMutationTransaction();

  const typesExpenses = [
    {
      id: 1,
      type: "Renda",
    },
    {
      id: 0,
      type: "Despesa",
    },
  ];

  async function onSubmit(data: FormData) {
    console.log(data);

    data.amount = Number(data.amount);
    data.type = Number(data.type);
    try {
      await mutateAsync(data);
      toast.success("Registrado com Sucesso");
      methods.reset({
        description: "",
        amount: 0,
        personId: "",
        type: 0,
      });
    } catch (error) {
      toast.warning("Erro ao Registrar Trans");
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Salvar Transação</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 "
          >
            <InputField
              label=""
              name="description"
              placeholder="Descrição"
              required
            />
            <InputField
              label=""
              name="amount"
              placeholder="R$ 00.00"
              required
            />
            <div className="w-full justify-between flex gap-2">
              <SelectionField
                list={data?.people || []}
                name="personId"
                label=""
                required
              />
              <SelectionFieldType
                list={typesExpenses}
                name="type"
                label=""
                required
              />
            </div>
            <Button className="w-full" type="submit">
              {isPending ? "Salvando..." : "Salvar"}
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};
