"use client";

import { DataTable } from "@/components/table/data-table";
import { columns } from "./_components/columns";

import { PersonForm } from "./_components/person-form";
import { useDataPeople } from "@/hooks/PeopleData/useDataPeople";

export default function PeoplePage() {
  const { data } = useDataPeople();
  return (
    <section className="container mx-auto  flex gap-2 px-5 py-10 justify-evenly">
      <div className="w-2/6  flex flex-col gap-2  rounded-lg ">
        <PersonForm />
      </div>
      <div className="w-3/6  flex flex-col gap-2  justify-start rounded-lg">
        <DataTable columns={columns} data={data?.people || []} />
      </div>
    </section>
  );
}
