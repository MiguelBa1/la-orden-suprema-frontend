export type TransactionItem = {
  description: string;
  type: string;
  amount: number;
  date: string;
}

export type TransactionList = {
  coins: number;
  transactions: TransactionItem[];
}
