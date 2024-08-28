import { TransactionMovement } from '@pages/assassin'

export type TransactionItem = {
  description: string;
  transaction: TransactionMovement;
  amount: string;
  date: string;
}

export type TransactionList = TransactionItem[]
