"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useDeleteMutationPerson } from "@/hooks/PeopleData/useMutationPerson";
import { Person } from "@/types/person";
import { SummaryPerson } from "@/types/summary";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "sonner";

export const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header({ column }) {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Foto
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell(props) {
      return (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "name",
    header({ column }) {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "age",
    header({ column }) {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Idade
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "acoes",
    header: () => {
      return (
        <div className="flex w-full items-center justify-center uppercase hover:bg-transparent">
          ações
        </div>
      );
    },
    cell: ({ row }) => <AcoesCell id={row.original.id} />,
  },
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
