import { UseQueryResult } from '@tanstack/react-query'
import { Table, Spinner } from '@components/UI'
import { AssassinsTableColumns, AssassinsList } from '@pages/admin'

type AssassinsTableProps = {
  assassinsListQuery: UseQueryResult<AssassinsList>;
}

export function AssassinsTable({ assassinsListQuery }: AssassinsTableProps) {

  if (assassinsListQuery.isFetching) {
    return <div className="flex justify-center items-center h-96">
      <Spinner />
    </div>
  }

  if (assassinsListQuery.isError) {
    return <div className="flex justify-center items-center h-96">
      Error obteniendo la lista de asesinos
    </div>
  }

  if (assassinsListQuery.data?.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No se encontraron resultados
    </div>
  }

  if (!assassinsListQuery.data) {
    return null
  }

  return (
    <Table columns={ AssassinsTableColumns } data={ assassinsListQuery.data } />
  )
}
