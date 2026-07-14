import { deletePerson, postNewPerson } from "@/actions/server/people";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type CreatePersonDto = {
  name: string;
  age: number;
};

export function useCreateMutationPerson() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: CreatePersonDto) => postNewPerson(data.name, data.age),
    onSuccess: () => {
      // Invalida a query "people" → dispara o refetch automático do useDataPeople
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });

  return mutation;
}

export function useDeleteMutationPerson() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (idperson: string) => deletePerson(idperson),
    onSuccess: () => {
      // Invalida a query "people" → dispara o refetch automático do useDataPeople
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });

  return mutation;
}
