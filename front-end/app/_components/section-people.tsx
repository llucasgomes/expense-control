
import { DataTable } from "@/components/table/data-table"
import { SummaryPerson } from "@/types/summary"
import { columns } from "./columns"

export const SectionPeople = ({ people }: { people: SummaryPerson[] }) => {

  return(
    <section className="container mx-auto flex flex-col gap-2 px-5 py-10">
     <DataTable columns={columns} data={people} />
    </section>
  )
}