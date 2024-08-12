import { TransactionMovement } from '@pages/admin/transactions/models/enums/TransactionMovement'


export type TransactionItem = {
  description: string;
  transaction: TransactionMovement;
  amount: number;
  date: string;
}


export type TransactionList = TransactionItem[]