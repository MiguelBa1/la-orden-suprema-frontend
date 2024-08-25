import { Link } from 'react-router-dom'
import { Button } from '@components/UI'
import { getMissionsList, MissionsListTable, MissionsTableToolbar, MissionsTableColumns } from '@pages/assassin'
import { useForm } from 'react-hook-form'
import { useUser } from '@lib/react-query-auth.ts'
import { useQuery } from '@tanstack/react-query'

export function MissionsListView() {
  const searchForm = useForm()
  const userName = useUser()?.data?.name

  const missionListQuery = useQuery({
    queryKey: ['missions-created-by-me', userName],
    queryFn: () => getMissionsList({... searchForm.getValues(), createdBy: userName }),
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
      <MissionsListTable missionListQuery={ missionListQuery } missionTableColumns={ MissionsTableColumns } />
    </div>
  )
}
