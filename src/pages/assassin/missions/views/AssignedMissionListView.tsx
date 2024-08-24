import { useQuery } from '@tanstack/react-query'
import { useUser } from '@lib/react-query-auth.ts'
import { AssignedMissionTableColumns, getMissionList, MissionListTable, AssignedMissionsTableToolbar } from '@pages/assassin'
import { useForm } from 'react-hook-form'

export function AssignedMissionListView() {
  const searchForm = useForm()
  const userId = useUser()?.data?.id

  const assignedMissionListQuery = useQuery({
    queryKey: ['assigned-missions', userId],
    queryFn: () => getMissionList({ ...searchForm.getValues(), assigned_to: userId }),
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl">
          Misiones - Asignadas
        </h1>
      </div>
      <AssignedMissionsTableToolbar searchForm={ searchForm } refetchMissionList={ assignedMissionListQuery.refetch } />
      <MissionListTable missionListQuery={ assignedMissionListQuery } missionTableColumns={ AssignedMissionTableColumns } />
    </div>
  )
}
