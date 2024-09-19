import { UseQueryResult } from '@tanstack/react-query'
import { GeneralMissionsList, GeneralMissionItem } from '@pages/assassin'
import { Column, Spinner, Table } from '@components/UI'

type MissionsListTableProps = {
  missionListQuery: UseQueryResult<GeneralMissionsList>;
  missionTableColumns: Column<GeneralMissionItem>[];
}

export function GeneralMissionsListTable({ missionListQuery, missionTableColumns }: MissionsListTableProps) {
  if (missionListQuery.isFetching) {
    return <div className="flex justify-center items-center h-96">
      <Spinner />
    </div>
  }

  if (missionListQuery.isError) {
    return <div className="flex justify-center items-center h-96">
      Error obteniendo la lista de misiones
    </div>
  }

  if (missionListQuery.data?.length === 0) {
    return <div className="flex justify-center items-center h-96">
      No se encontraron resultados
    </div>
  }

  if (!missionListQuery.data) {
    return null
  }

  return (
    <Table columns={ missionTableColumns } data={ missionListQuery.data } />
  )
}
