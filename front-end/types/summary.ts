import { Transaction } from "./Transaction"

export type SummaryPerson = {
  personId: string
  personName: string
  age: number
  totalIncome: number
  totalExpenses: number
  balance: number
}

export type ResponseSummary = {
  people: SummaryPerson[],
  totalIncomeGeneral: number
  totalExpensesGeneral: number
  balanceGeneral: number
}

export type ResponseSummaryById = {
  personId: string
  personName: string
  personAge: number
  totalIncome: number
  totalExpenses: number
  balance: number
  transactions: Transaction[] 
}