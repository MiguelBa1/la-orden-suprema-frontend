import { UseQueryResult } from '@tanstack/react-query'
import { Table, Spinner } from '@components/UI'
import { TransactionListMock, TransactionTableColumns, type TransactionList } from '@pages/admin'

type MissionsTableProps = {
  missionsListQuery: UseQueryResult<TransactionList>;
}

export function MissionsListTable({ missionsListQuery }: MissionsTableProps) {

  if (missionsListQuery.isFetching) {
    return <div className="flex justify-center items-center h-96">
      <Spinner />
    </div>
  }

  if (missionsListQuery.isError) {
    return <div className="flex justify-center items-center h-96">
      Error obteniendo la lista de misiones
    </div>
  }

  if (missionsListQuery.data?.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No se encontraron resultados
    </div>
  }

  if (!missionsListQuery.data) {
    return null
  }

  return (
    <Table columns={ TransactionTableColumns } data={ TransactionListMock } />
  )
}