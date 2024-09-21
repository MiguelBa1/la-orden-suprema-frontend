import { useQuery } from '@tanstack/react-query'
import { Table } from '@components/UI'
import { getMissionsHistory } from '@pages/admin/assassins'
import { MissionsHistoryTableColumns } from '@pages/admin/assassins'

type MissionsHistoryTableProps = {
  assassinId?: string
}

export function MissionsHistoryTable({ assassinId }: MissionsHistoryTableProps) {
  const missionsHistoryQuery = useQuery({
    queryKey: ['missionsHistory', assassinId],
    queryFn: () => getMissionsHistory(assassinId)
  })

  if (!missionsHistoryQuery.data) {
    return null
  }

  if (missionsHistoryQuery.data?.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No hay historial de misiones
    </div>
  }

  return (
    <div className="space-y-4">
      <h2 className="text-base lg:text-xl">Historial de misiones</h2>
      <Table columns={ MissionsHistoryTableColumns } data={ missionsHistoryQuery.data } />
    </div>
  )
}
