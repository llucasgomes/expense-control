"use client";
import { DataTable } from "@/components/table/data-table";
import { columns } from "./_components/columns";
import { useDataTransaction } from "@/hooks/TransactionsData/useDataTransaction";
import { TransactionForm } from "./_components/transaction-form";

export default function TransactionsPage() {
  const { data } = useDataTransaction();

  return (
    <section className="container mx-auto  flex gap-2 px-5 py-10 justify-evenly">
      <div className="w-2/6  flex flex-col gap-2  rounded-lg ">
        <TransactionForm />
      </div>
      <div className="w-3/6  flex flex-col gap-2  justify-start rounded-lg">
        <DataTable columns={columns} data={data?.transactions || []} />
      </div>
    </section>
  );
}
