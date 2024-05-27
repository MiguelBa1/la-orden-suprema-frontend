import { UseQueryResult } from '@tanstack/react-query'
import { Table } from '@components/UI'
import { MissionsHistoryTableColumns, type AssassinDetails } from '@pages/admin/assassins'

type MissionsHistoryTableProps = {
  missionsHistoryQuery: UseQueryResult<AssassinDetails>
}

export function MissionsHistoryTable({ missionsHistoryQuery }: MissionsHistoryTableProps) {

  if (missionsHistoryQuery.data?.missionsHistory.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No hay misiones para mostrar
    </div>
  }

  if (!missionsHistoryQuery.data) {
    return null
  }

  return (
    <Table columns={ MissionsHistoryTableColumns } data={ missionsHistoryQuery.data.missionsHistory } />
  )
}
