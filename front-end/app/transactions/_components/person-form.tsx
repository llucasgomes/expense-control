import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputField } from "@/components/ui/input/field";
import { useCreateMutationPerson } from "@/hooks/PeopleData/useMutationPerson";

import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  name: string;
  age: number;
};

export const PersonForm = () => {
  const methods = useForm<FormData>();
  const { mutateAsync, isPending } = useCreateMutationPerson();

  async function onSubmit(data: FormData) {
    try {
      await mutateAsync({ name: data.name, age: data.age });
      toast.success("Pessoa cadastrada com sucesso");
      methods.reset();
    } catch (error) {
      toast.warning("Erro ao cadastrar pessoa");
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cadastro de Pessoas</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 "
          >
            <InputField label="Nome" name="name" placeholder="Nome" required />
            <InputField label="Idade" name="age" placeholder="Idade" required />
            <Button className="w-full" type="submit">
              {isPending ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};
