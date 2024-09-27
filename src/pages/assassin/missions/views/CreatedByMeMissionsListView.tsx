import { NavLink } from 'react-router-dom'
import { Button } from '@components/UI'
import { CreatedByMeMissionsTableToolbar, CreatedByMeMissionsTableColumns, CreatedByMeMissionsListTable, getCreatedByMeMissionsList } from '@pages/assassin'
import { useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'

export function CreatedByMeMissionsListView() {
  const searchForm = useForm()

  const missionListQuery = useQuery({
    queryKey: ['created-by-me-missions', searchForm.getValues()],
    queryFn: () => getCreatedByMeMissionsList(searchForm.getValues()),
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Misiones - Creadas por mi
        </h1>
        <NavLink to="/app/assassin/missions/new">
          <Button>
            Crear misión
          </Button>
        </NavLink>
      </div>
      <CreatedByMeMissionsTableToolbar searchForm={ searchForm } refetchMissionList={ missionListQuery.refetch } />
      <CreatedByMeMissionsListTable missionListQuery={ missionListQuery } missionTableColumns={ CreatedByMeMissionsTableColumns } />
    </div>
  )
}
