export type TransactionItem = {
  description: string;
  type: string;
  amount: string;
  date: string;
}

export type TransactionList = {
  coins: number;
  transactions: TransactionItem[];
}
