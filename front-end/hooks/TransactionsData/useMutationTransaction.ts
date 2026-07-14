import { deletePerson } from "@/actions/server/people";
import { postNewTransaction } from "@/actions/server/transaction";
import { CreateTransactionDto } from "@/types/Transaction";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateMutationTransaction() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: CreateTransactionDto) => postNewTransaction(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
    },
  });

  return mutation;
}

// export function useDeleteMutationTransaction() {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: (idTransaction: string) => deleteTransaction(idTransaction),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["transaction"] });
//     },
//   });

//   return mutation;
// }
