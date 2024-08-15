import { UseQueryResult } from '@tanstack/react-query'
import { MissionList, MissionTableColumns } from '@pages/assassin'
import { Spinner, Table } from '@components/UI'

type MissionTableProps = {
  missionListQuery: UseQueryResult<MissionList>;
}

export function MissionListTable({ missionListQuery }: MissionTableProps) {
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
    <Table columns={ MissionTableColumns } data={ missionListQuery.data } />
  )
}
