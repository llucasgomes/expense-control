'use client'
import { useSummary } from "@/hooks/useData";
import { SectionCards } from "./_components/section-cards";
import { SectionPeople } from "./_components/section-people";


export default function HomePage() {

  const {data} = useSummary() 
  
  const people = data?.people || []

 

  return (
    <section className="container mx-auto flex flex-col gap-2 px-5 py-10">
 <SectionCards 
 people={people.length}
   totalIncomeGeneral={data?.totalIncomeGeneral}
   totalExpensesGeneral={data?.totalExpensesGeneral}
   balanceGeneral={data?.balanceGeneral}
 />
 <SectionPeople people={people} />
    </section>
  )
}
