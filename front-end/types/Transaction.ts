export enum TransactionType
{
    Expense = 0, //despesa
    Income = 1 //renda
}

export type Transaction = {
  id: string
  amount: number
  description: string
  PersonId: string
  type: TransactionType
}