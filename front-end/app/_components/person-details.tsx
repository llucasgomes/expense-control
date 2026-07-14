'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { useSummaryById } from "@/hooks/useData"
import { Transaction } from "@/types/Transaction"

export const PersonDetails = ({ personId }: { personId: string }) => {
const {data} = useSummaryById(personId)
const balance = data?.balance ?? 0;

const formattedBalance = data?.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
const balanceColor = balance < 0 ? 'text-red-500' : 'text-green-500'



  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Extrato</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Extrato Detalhado</SheetTitle>
          <SheetDescription className="flex flex-col gap-2">
            <div className="flex w-full  items-center gap-5 mt-6">
                <Avatar size="lg">
                  <AvatarImage src="https://github.com/shadcn.png"  />
                <AvatarFallback>CN</AvatarFallback>
          </Avatar>
           <div className="flex flex-col gap-2">
           <span className="text-lg">{data?.personName}</span>
           <span className="text-sm text-muted-foreground">Idade: {data?.personAge} anos</span> 
           {data && data.personAge < 18 && (
            <span className="text-sm text-muted-foreground">Pessoas menores de 18 anos só podem ter transações do tipo despesa</span>
           )}
           </div>
            </div>
          
          
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min p-4 gap-6 overflow-y-auto rounded-lg pr-2 h-100
                scrollbar-thin
                scrollbar-thumb-border
                scrollbar-track-transparent
                hover:scrollbar-thumb-muted-foreground/40">
                  
                {data?.transactions.length ? (
          data.transactions.map((transaction: Transaction) => (
            <CardTransaction
              key={transaction.id}
              transaction={transaction}
            />
          ))
        ) : (
          <div className="flex h-full items-center justify-center rounded-lg border border-dashed p-8">
            <p className="text-center text-sm text-muted-foreground">
              Nenhuma transação encontrada.
            </p>
          </div>
        )}
        </div>
        <SheetFooter className="flex flex-col gap-2 justify-end">
          <SheetTitle className={`text-right ${balanceColor}`}>
            {formattedBalance}
          </SheetTitle>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

const CardTransaction = ({ transaction }: { transaction: Transaction }) => {
  const formattedAmount = transaction.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const transationTypeTextColor = transaction.type === 1 ? 'text-green-500' : 'text-red-500';
  const transationTypeBorderColor = transaction.type === 1 ? 'border-l-green-500' : 'border-l-red-500';
  return(
    <Card className={`w-full border-l-4 ${transationTypeBorderColor}`}>
      <CardHeader>
        <CardTitle>{transaction.description}</CardTitle>
        <CardDescription className={`text-right ${transationTypeTextColor}`}>
          {formattedAmount}
        </CardDescription>
      </CardHeader>
     
    </Card>
  )
}