import { TransactionMovement } from '@pages/assassin/transactions/models/enums/TransactionMovement'


export type TransactionItem = {
  description: string;
  transaction: TransactionMovement;
  amount: string;
  date: string;
}


export type TransactionList = TransactionItem[]