export enum TransactionType {
  Expense = 0, //despesa
  Income = 1, //renda
}

export type Transaction = {
  id: string;
  amount: number;
  description: string;
  PersonId: string;
  type: TransactionType;
};

export type ResponsTransactions = {
  transactions: Transaction[];
};

export type CreateTransactionDto = {
  description: string;
  amount: number;
  type: number;
  personId: string;
};
