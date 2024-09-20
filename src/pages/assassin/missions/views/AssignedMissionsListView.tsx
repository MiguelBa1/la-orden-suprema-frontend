import { useQuery } from '@tanstack/react-query'
import { useUser } from '@lib/react-query-auth.ts'
import { AssignedMissionsTableColumns, getMissionsList, MissionsListTable, AssignedMissionsTableToolbar } from '@pages/assassin'
import { useForm } from 'react-hook-form'

export function AssignedMissionsListView() {
  const searchForm = useForm()
  const userName = useUser()?.data?.name

  const assignedMissionListQuery = useQuery({
    queryKey: ['assignedMissions', userName],
    queryFn: () => getMissionsList({ ...searchForm.getValues() }),
    staleTime: 30000,
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Misiones - Asignadas
        </h1>
      </div>
      <AssignedMissionsTableToolbar searchForm={ searchForm } refetchMissionList={ assignedMissionListQuery.refetch } />
      <MissionsListTable missionListQuery={ assignedMissionListQuery } missionTableColumns={ AssignedMissionsTableColumns } />
    </div>
  )
}
