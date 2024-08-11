import { TransactionListMock, TransactionList, TransactionMovement } from '@pages/admin'

type GetTransactionsListParams = {
    movement?: TransactionMovement;
    amount?: string;
    date?: string;
}

export function getTransactionsList(_params: GetTransactionsListParams) {
  return new Promise<TransactionList>((resolve) => {
    setTimeout(() => {
      resolve(TransactionListMock)
    }, 500)
  })
}