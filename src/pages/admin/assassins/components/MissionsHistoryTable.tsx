import { UseQueryResult } from '@tanstack/react-query'
import { Table } from '@components/UI'
import { MissionsHistoryTableColumns, type AssassinDetails } from '@pages/admin/assassins'

type MissionsHistoryTableProps = {
  assassinsDetailsQuery: UseQueryResult<AssassinDetails>
}

export function MissionsHistoryTable({ assassinsDetailsQuery }: MissionsHistoryTableProps) {

  if (assassinsDetailsQuery.data?.missionsHistory.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No hay misiones para mostrar
    </div>
  }

  if (!assassinsDetailsQuery.data) {
    return null
  }

  return (
    <div className="space-y-4">
      <h2 className="text-base lg:text-xl">Historial de misiones</h2>
      <Table columns={ MissionsHistoryTableColumns } data={ assassinsDetailsQuery.data.missionsHistory } />
    </div>
  )
}
