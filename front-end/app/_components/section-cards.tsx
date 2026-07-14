
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

type SectionCardsProps = {
  people?: number
  totalIncomeGeneral?: number
  totalExpensesGeneral?: number
  balanceGeneral?: number
}

export const SectionCards = ({balanceGeneral,people,totalIncomeGeneral,totalExpensesGeneral}: SectionCardsProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
     <CardDetails title="Usuarios" total={people} />
     <CardDetails title="Total de Receitas" total={totalIncomeGeneral} moeda/>
     <CardDetails title="Total de Despesas" total={totalExpensesGeneral} moeda/>
     <CardDetails title="Saldo Total" total={balanceGeneral} moeda/>
    </div>
  )
}

type CardDetailsProps = {
 title?: string
 icon?: React.ReactNode
 total?: number
 moeda?:boolean
}

const CardDetails = ({ title, icon, total, moeda }: CardDetailsProps) => {
  return (
     <Card className="@container/card">
        <CardHeader>
          <CardDescription>{title}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {moeda ? total?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : total}
          </CardTitle>
         
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
  )
}