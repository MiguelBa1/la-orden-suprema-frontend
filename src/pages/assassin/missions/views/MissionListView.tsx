import { Link } from 'react-router-dom'
import { Button } from '@components/UI'
import { getMissionList, MissionListTable, MissionsTableToolbar, MissionTableColumns } from '@pages/assassin'
import { useForm } from 'react-hook-form'
import { useUser } from '@lib/react-query-auth.ts'
import { useQuery } from '@tanstack/react-query'

export function MissionListView() {
  const searchForm = useForm()
  const userId = useUser()?.data?.id

  const missionListQuery = useQuery({
    queryKey: ['missions-created-by-me', userId],
    queryFn: () => getMissionList({... searchForm.getValues(), created_by: userId }),
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Misiones - Creadas por mi
        </h1>
        <Link to="assassin/missions/create">
          <Button>
            Crear misión
          </Button>
        </Link>
      </div>
      <MissionsTableToolbar searchForm={ searchForm } refetchMissionList={ missionListQuery.refetch } />
      <MissionListTable missionListQuery={ missionListQuery } missionTableColumns={ MissionTableColumns } />
    </div>
  )
}
