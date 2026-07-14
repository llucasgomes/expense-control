"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useDeleteMutationPerson } from "@/hooks/PeopleData/useMutationPerson";
import { Transaction, TransactionType } from "@/types/Transaction";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header({ column }) {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tipo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell({ row }) {
      const typeTransaction: TransactionType = row.original.type;

      return typeTransaction === 1 ? (
        <div className="flex items-center gap-2">
          <IconTrendingUp className="size-4 text-emerald-400" />
          <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20">
            Renda
          </Badge>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <IconTrendingDown className="size-4 text-rose-400" />
          <Badge className="border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20">
            Despesa
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header({ column }) {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          descrição
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "amount",
    header({ column }) {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Preço
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell({ row }) {
      const amount = row.original.amount;
      const amountColor = amount < 0 ? "text-red-500" : "text-green-500";

      return (
        <p>
          {amount.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      );
    },
  },
  // {
  //   accessorKey: "acoes",
  //   header: () => {
  //     return (
  //       <div className="flex w-full items-center justify-center uppercase hover:bg-transparent">
  //         ações
  //       </div>
  //     );
  //   },
  //   cell: ({ row }) => <AcoesCell id={row.original.id} />,
  // },
];

function AcoesCell({ id }: { id: string }) {
  const { mutateAsync, isPending } = useDeleteMutationPerson();

  async function deletarPerson() {
    try {
      await mutateAsync(id);
      toast.success("Pessoa deletada com sucesso");
    } catch (error) {
      toast.warning("Erro ao deletar pessoa");
    }
  }

  return (
    <div className="flex h-full w-full items-center justify-center gap-2">
      <Button variant="secondary" size="icon-lg" className="w-20 px-2">
        Editar
      </Button>
      <Button
        variant="destructive"
        size="icon-lg"
        className="w-20 px-2"
        disabled={isPending}
        onClick={() => deletarPerson()}
      >
        {isPending ? "..." : "Excluir"}
      </Button>
    </div>
  );
}
