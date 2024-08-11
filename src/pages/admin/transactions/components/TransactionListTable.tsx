import { UseQueryResult } from '@tanstack/react-query'
import { Table, Spinner } from '@components/UI'
import { TransactionListMock, TransactionTableColumns, type TransactionList } from '@pages/admin'

type TransactionsTableProps = {
  transactionListQuery: UseQueryResult<TransactionList>;
}

export function TransactionListTable({ transactionListQuery }: TransactionsTableProps) {

  if (transactionListQuery.isFetching) {
    return <div className="flex justify-center items-center h-96">
      <Spinner />
    </div>
  }

  if (transactionListQuery.isError) {
    return <div className="flex justify-center items-center h-96">
      Error obteniendo la lista de misiones
    </div>
  }

  if (transactionListQuery.data?.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No se encontraron resultados
    </div>
  }

  if (!transactionListQuery.data) {
    return null
  }

  return (
    <Table columns={ TransactionTableColumns } data={ transactionListQuery } />
  )
}